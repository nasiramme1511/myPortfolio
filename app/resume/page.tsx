import React from 'react';
import Link from 'next/link';
import { profileData } from '@/lib/data/profile';
import { Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, GraduationCap, Briefcase, FileCode } from 'lucide-react';

export const metadata = {
  title: 'Resume | Nasir Amme - Full-Stack Software Engineer',
  description: 'Official Curriculum Vitae of Nasir Amme Siraj - Full-Stack Web Developer & Software Engineering Student at Dire Dawa University.',
};

export default function ResumePage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Actions Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-200/60 pb-8">
          <div>
            <span className="font-mono text-xs text-brand-400 font-semibold uppercase tracking-wider">{"// Curriculum Vitae"}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Nasir Amme Siraj</h1>
            <p className="text-sm font-mono text-slate-300">Full-Stack Web Developer / Software Engineer</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Nasir_Amme_CV.pdf"
              download="Nasir_Amme_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs font-semibold shadow-lg shadow-brand-600/20 transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF CV
            </a>
          </div>
        </div>

        {/* Printable Web Resume Sheet */}
        <div className="p-8 sm:p-12 rounded-2xl bg-surface-100/50 border border-surface-200/80 space-y-10">
          
          {/* Contact Header Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 border-b border-surface-200/50 font-mono text-xs text-slate-300">
            <div className="space-y-1.5">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-400" /> {profileData.email}</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-400" /> {profileData.phone}</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-400" /> {profileData.location}</p>
            </div>
            <div className="space-y-1.5 md:text-right">
              <p className="flex items-center md:justify-end gap-2"><Github className="w-4 h-4 text-brand-400" /> github.com/nasiramme1511</p>
              <p className="flex items-center md:justify-end gap-2"><Linkedin className="w-4 h-4 text-brand-400" /> linkedin.com/in/nasir-amme-9a29a7340</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider border-l-2 border-brand-500 pl-3">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider border-l-2 border-brand-500 pl-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              {profileData.currentSkills.map((cat, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-surface-50 border border-surface-200 space-y-1.5">
                  <p className="text-brand-400 font-bold">{cat.category}</p>
                  <p className="text-slate-300">{cat.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider border-l-2 border-brand-500 pl-3">
              Work Experience
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white text-sm">{profileData.internship.role}</h3>
                  <p className="font-mono text-xs text-emerald-400">{profileData.internship.company}</p>
                </div>
                <span className="font-mono text-xs text-slate-400">{profileData.internship.location}</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                {profileData.internship.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider border-l-2 border-brand-500 pl-3">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <h3 className="font-bold text-white text-sm">{profileData.education.institution}</h3>
                <p className="font-mono text-brand-400">{profileData.education.degree} in {profileData.education.field}</p>
              </div>
              <span className="font-mono text-slate-400">{profileData.education.status}</span>
            </div>
          </div>

          {/* Core Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider border-l-2 border-brand-500 pl-3">
              Selected Engineering Projects
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <h3 className="font-bold text-white">OMMS — Organization Membership Management System</h3>
                <p className="text-slate-300">Multi-tenant membership, payment, event & dynamic attribute platform (React, TypeScript, Node.js, Express, Prisma, TiDB Cloud / MySQL).</p>
              </div>
              <div>
                <h3 className="font-bold text-white">MCMS — Membership Fee Management System</h3>
                <p className="text-slate-300">Financial dues tracking, stream-based bulk Excel parsing with ExcelJS, audit logging, and Groq AI queries.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">Sheikh Muhammed Zabuur Content Platform</h3>
                <p className="text-slate-300">Audio lecture archive, categorization, search & Cloudinary CDN integration.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
