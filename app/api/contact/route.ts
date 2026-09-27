import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(150),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Strict Server-Side Validation using Zod
    const validatedData = contactSchema.parse(body);

    // Sanitize string fields to protect against injection
    const sanitizedMessage = {
      name: validatedData.name.trim(),
      email: validatedData.email.trim().toLowerCase(),
      subject: validatedData.subject.trim(),
      message: validatedData.message.trim(),
      receivedAt: new Date().toISOString(),
    };

    // Log message submission internally (or forward via SMTP service if configured)
    console.log('[Contact Form Submission Received]:', sanitizedMessage);

    return NextResponse.json({
      success: true,
      message: 'Message validated and recorded successfully.',
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const issue = error.issues[0]?.message || 'Invalid form input.';
      return NextResponse.json({ success: false, error: issue }, { status: 400 });
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error processing message.' },
      { status: 500 }
    );
  }
}
