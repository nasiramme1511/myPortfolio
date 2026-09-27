import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(254),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(150),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

// Simple in-memory rate limiting map: ip -> { count, resetAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max 5 submissions per hour per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true; // allowed
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false; // blocked
  }

  entry.count += 1;
  return true; // allowed
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting by IP
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid request body.' },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const issue = parsed.error.issues[0]?.message ?? 'Invalid form input.';
      return NextResponse.json({ success: false, error: issue }, { status: 400 });
    }

    const { name, email, subject, message } = parsed.data;

    // Sanitize string fields
    const sanitized = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    };

    const recipientEmail = process.env.CONTACT_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey && recipientEmail) {
      // Dynamically import Resend only when the key is present
      // This avoids build failures when the package isn't configured
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);

      const { error: resendError } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: [recipientEmail],
        replyTo: sanitized.email,
        subject: `[Portfolio Contact] ${sanitized.subject}`,
        text: [
          `Name: ${sanitized.name}`,
          `Email: ${sanitized.email}`,
          `Subject: ${sanitized.subject}`,
          '',
          'Message:',
          sanitized.message,
        ].join('\n'),
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#4f46e5">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px;font-weight:bold;color:#6b7280">Name</td><td style="padding:8px">${sanitized.name}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#6b7280">Email</td><td style="padding:8px"><a href="mailto:${sanitized.email}">${sanitized.email}</a></td></tr>
              <tr><td style="padding:8px;font-weight:bold;color:#6b7280">Subject</td><td style="padding:8px">${sanitized.subject}</td></tr>
            </table>
            <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px">
              <p style="font-weight:bold;color:#374151;margin:0 0 8px">Message:</p>
              <p style="color:#374151;white-space:pre-wrap;margin:0">${sanitized.message}</p>
            </div>
          </div>
        `,
      });

      if (resendError) {
        // Log server-side only — do not expose to client
        console.error('[Contact Form] Resend delivery error:', resendError.name);
        return NextResponse.json(
          { success: false, error: 'Failed to send message. Please try emailing directly.' },
          { status: 500 }
        );
      }
    } else {
      // Fallback: log when Resend is not configured (development)
      console.log('[Contact Form] Submission received (email not configured):', {
        name: sanitized.name,
        subject: sanitized.subject,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch {
    // Never expose internal error details to the client
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
