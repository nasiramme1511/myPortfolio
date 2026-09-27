'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Copy, Check } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Failed to submit message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Contact Details Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold uppercase">
            <span>{"// Contact & Connections"}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Let&apos;s Connect</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Have a project in mind, want to discuss software architecture, or explore engineering opportunities? Feel free to reach out directly.
          </p>
        </div>

        <div className="space-y-3 font-mono text-xs">
          
          {/* Email Item */}
          <div className="p-4 rounded-xl bg-surface-100/60 border border-surface-200/80 flex items-center justify-between gap-3">
            <div>
              <p className="text-slate-400 text-[11px]">Primary Email</p>
              <p className="text-white font-semibold">{profileData.email}</p>
            </div>
            <button
              onClick={copyEmail}
              aria-label="Copy Email Address"
              className="p-2 rounded-lg bg-surface-50 hover:bg-surface-200 text-slate-300 hover:text-white border border-surface-200 transition-colors"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Item */}
          <div className="p-4 rounded-xl bg-surface-100/60 border border-surface-200/80 space-y-1">
            <p className="text-slate-400 text-[11px]">Location</p>
            <p className="text-white font-semibold">{profileData.location}</p>
          </div>

          {/* Telegram Handle */}
          <div className="p-4 rounded-xl bg-surface-100/60 border border-surface-200/80 space-y-1">
            <p className="text-slate-400 text-[11px]">Telegram</p>
            <a
              href={profileData.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:underline font-semibold"
            >
              @nasiramme1511
            </a>
          </div>

        </div>
      </div>

      {/* Interactive Form Column */}
      <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-surface-100/50 border border-surface-200/80">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-slate-300 mb-1">
                Your Name <span className="text-brand-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Mercer"
                className="w-full px-3.5 py-2.5 rounded-lg bg-surface-50 border border-surface-200 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs text-slate-300 mb-1">
                Your Email <span className="text-brand-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-surface-50 border border-surface-200 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block font-mono text-xs text-slate-300 mb-1">
              Subject <span className="text-brand-400">*</span>
            </label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. Full-Stack Web Project Opportunity"
              className="w-full px-3.5 py-2.5 rounded-lg bg-surface-50 border border-surface-200 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs text-slate-300 mb-1">
              Message <span className="text-brand-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your message here..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-surface-50 border border-surface-200 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>

          {status === 'error' && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {status === 'success' && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white text-xs font-semibold font-mono transition-all shadow-lg shadow-brand-600/20"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

    </div>
  );
}
