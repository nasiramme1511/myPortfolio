'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, FileText, Mail, Shield, Server, Database, Code2 } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-pattern">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[200px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/90 border border-brand-500/30 text-slate-300 text-xs font-mono shadow-inner">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping" />
              <span>Full-Stack Web Developer & Software Engineer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                NASIR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">AMME</span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-brand-400 font-semibold tracking-wider uppercase">
                {profileData.headline}
              </p>
            </div>

            {/* Positioning Quote */}
            <blockquote className="p-4 rounded-xl bg-surface-50/70 border-l-4 border-brand-500 text-slate-200 text-base sm:text-lg italic font-sans leading-relaxed">
              &ldquo;{profileData.tagline}&rdquo;
            </blockquote>

            {/* Supporting Context */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Software Engineering student at <strong className="text-white font-medium">Dire Dawa University</strong> specializing in practical full-stack web engineering, resilient REST API design, multi-tenant backend architecture, and relational database systems.
            </p>

            {/* Key Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-100/80 border border-surface-200">
                <Code2 className="w-3.5 h-3.5 text-brand-400" /> React / Next.js / TS
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-100/80 border border-surface-200">
                <Server className="w-3.5 h-3.5 text-cyan-400" /> Node.js / Express / Laravel
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-100/80 border border-surface-200">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> MySQL / PostgreSQL / Prisma
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/25 transition-all duration-200"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-100 hover:bg-surface-200 text-slate-200 hover:text-white font-semibold text-sm border border-surface-200 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="/Nasir_Amme_CV.pdf"
                download="Nasir_Amme_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-100 hover:bg-surface-200 text-slate-200 hover:text-white font-semibold text-sm border border-surface-200 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                Download Resume
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-semibold text-sm border border-emerald-500/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Let&apos;s Work Together
              </Link>
            </div>
          </div>

          {/* Profile Card & Technical Badge Display */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Profile Image Container with Sleek Glow Border */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-brand-500/40 via-surface-200 to-transparent shadow-2xl">
                <div className="relative rounded-[14px] overflow-hidden bg-surface-50">
                  <Image
                    src="/profile.jpg"
                    alt="Nasir Amme - Full-Stack Software Engineer"
                    width={400}
                    height={460}
                    priority
                    className="w-full h-[380px] object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                  {/* Profile Overlay Card Details */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-surface-50/90 backdrop-blur-md border border-surface-200/80 shadow-xl space-y-1">
                    <div className="flex items-center justify-between">
                      <h2 className="font-bold text-white text-sm">Nasir Amme Siraj</h2>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-600/30 text-brand-300 border border-brand-500/40">
                        Software Engineer
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono">Dire Dawa University</p>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-5 -left-4 p-3 rounded-xl bg-surface-100/90 backdrop-blur-md border border-surface-200 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Production-Ready</p>
                  <p className="text-[11px] text-slate-400">RBAC, JWT & Multi-Tenant Systems</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
