'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Github, FileText, Mail, Shield, Server, Database, Code2, Sparkles } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-pattern">
      {/* Background Accent Gradients */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/15 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/3 right-10 w-[300px] h-[200px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/90 border border-brand-500/40 text-brand-100 text-xs font-mono shadow-[0_0_15px_rgba(223,156,27,0.15)] backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shadow-[0_0_8px_rgba(223,156,27,0.8)]" />
              <span>Full-Stack Web Developer & Software Engineer</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                NASIR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-amber-200 drop-shadow-[0_2px_15px_rgba(223,156,27,0.3)]">AMME</span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-brand-400 font-semibold tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {profileData.headline}
              </p>
            </div>

            {/* Positioning Quote */}
            <blockquote className="p-5 rounded-xl bg-gradient-to-r from-surface-100/80 to-surface-50/40 border-l-4 border-brand-400 text-slate-200 text-base sm:text-lg italic font-sans leading-relaxed shadow-lg backdrop-blur-sm">
              &ldquo;{profileData.tagline}&rdquo;
            </blockquote>

            {/* Supporting Context */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Software Engineering student at <strong className="text-brand-100 font-semibold border-b border-brand-500/50 pb-0.5">Dire Dawa University</strong> specializing in practical full-stack web engineering, resilient REST API design, multi-tenant backend architecture, and relational database systems.
            </p>

            {/* Key Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-300">
              <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-100/90 border border-brand-500/20 shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-brand-400" /> React / Next.js / TS
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-100/90 border border-brand-500/20 shadow-sm">
                <Server className="w-3.5 h-3.5 text-brand-400" /> Node.js / Express / Laravel
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-100/90 border border-brand-500/20 shadow-sm">
                <Database className="w-3.5 h-3.5 text-brand-400" /> MySQL / PostgreSQL / Prisma
              </motion.span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(223,156,27,0.3)] hover:shadow-[0_0_25px_rgba(223,156,27,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-100 hover:bg-surface-200 text-slate-200 hover:text-white font-semibold text-sm border border-brand-500/30 hover:border-brand-400 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="/Nasir_Amme_CV.pdf"
                download="Nasir_Amme_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-100 hover:bg-surface-200 text-slate-200 hover:text-white font-semibold text-sm border border-brand-500/30 hover:border-brand-400 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Profile Card & Technical Badge Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm group">
              
              {/* Golden Ambient Glow Behind Image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 to-amber-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Profile Image Container with Sleek Glow Border */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-brand-300 via-brand-600/50 to-surface-200 shadow-[0_0_30px_rgba(223,156,27,0.15)] group-hover:shadow-[0_0_40px_rgba(223,156,27,0.3)] transition-all duration-500">
                <div className="relative rounded-[14px] overflow-hidden bg-surface-50">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Nasir Amme - Full-Stack Software Engineer"
                      width={400}
                      height={460}
                      priority
                      className="w-full h-[400px] object-cover object-top filter contrast-[1.02] saturate-[1.05]"
                    />
                  </motion.div>
                  
                  {/* Subtle Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                  {/* Profile Overlay Card Details */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-50/80 backdrop-blur-md border border-brand-500/30 shadow-xl space-y-1 group-hover:border-brand-400/50 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="font-bold text-white text-sm flex items-center gap-1.5">
                        Nasir Amme Siraj
                        <Shield className="w-3.5 h-3.5 text-brand-400" />
                      </h2>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-600/20 text-brand-300 border border-brand-500/30">
                        Engineer
                      </span>
                    </div>
                    <p className="text-xs text-brand-100/70 font-mono">Dire Dawa University</p>
                  </motion.div>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 p-3.5 rounded-xl bg-surface-100/90 backdrop-blur-xl border border-brand-500/30 shadow-2xl hidden sm:flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-600/30 to-brand-400/10 border border-brand-400/40 flex items-center justify-center text-brand-400 shadow-inner">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-100">Production-Ready</p>
                  <p className="text-[11px] text-brand-200/70 font-mono">Secure & Scalable Systems</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
