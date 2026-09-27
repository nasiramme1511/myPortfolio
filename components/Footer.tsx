import React from 'react';
import Link from 'next/link';
import { Terminal, Github, Linkedin, Send, Youtube, Mail, ExternalLink } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

export function Footer() {
  return (
    <footer className="bg-surface-50 border-t border-surface-200/60 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-surface-200/50">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-mono text-lg font-bold text-white tracking-tight">
              <div className="w-8 h-8 rounded bg-brand-600/30 border border-brand-500/50 flex items-center justify-center text-brand-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span>NASIR <span className="text-brand-400">AMME</span></span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full-Stack Software Engineer building modern, secure, and scalable web applications.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for software engineering roles
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-mono text-xs font-semibold text-white tracking-wider uppercase mb-4">Sitemap</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-400 transition-colors">About & Journey</Link></li>
              <li><Link href="/projects" className="hover:text-brand-400 transition-colors">Featured Projects</Link></li>
              <li><Link href="/engineering" className="hover:text-brand-400 transition-colors">Engineering & Architecture</Link></li>
              <li><Link href="/skills" className="hover:text-brand-400 transition-colors">Technical Stack</Link></li>
              <li><Link href="/experience" className="hover:text-brand-400 transition-colors">Work Experience</Link></li>
              <li><Link href="/blog" className="hover:text-brand-400 transition-colors">Technical Blog</Link></li>
            </ul>
          </div>

          {/* Core Projects */}
          <div>
            <h3 className="font-mono text-xs font-semibold text-white tracking-wider uppercase mb-4">Core Systems</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/projects/omms" className="hover:text-brand-400 transition-colors">OMMS (Multi-Tenant Management)</Link></li>
              <li><Link href="/projects/mcms" className="hover:text-brand-400 transition-colors">MCMS (Financial Dues Engine)</Link></li>
              <li><Link href="/projects/sheikh-muhammed-zabuur" className="hover:text-brand-400 transition-colors">Sheikh Muhammed Zabuur Archive</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-semibold text-white tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex flex-wrap gap-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-surface-100 hover:bg-brand-600 hover:text-white border border-surface-200 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-surface-100 hover:bg-brand-600 hover:text-white border border-surface-200 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-2 rounded-lg bg-surface-100 hover:bg-brand-600 hover:text-white border border-surface-200 transition-all"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={profileData.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="p-2 rounded-lg bg-surface-100 hover:bg-brand-600 hover:text-white border border-surface-200 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              {profileData.email}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nasir Amme Siraj. Built with Next.js 14, TypeScript & Tailwind CSS.</p>
          <p className="font-mono text-[11px]">Dire Dawa University • Software Engineering</p>
        </div>
      </div>
    </footer>
  );
}
