import React from 'react';
import Link from 'next/link';
import { GraduationCap, Briefcase, Code, Database, ShieldCheck, Server, ArrowRight } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

export function AboutSection() {
  const pillars = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with React, TypeScript, Next.js, and Node.js with a focus on responsive UI and code quality.",
    },
    {
      icon: Server,
      title: "Backend & API Engineering",
      description: "Designing RESTful API controllers, structured service layers, and asynchronous event logic in Node.js, Express, and PHP/Laravel.",
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Modeling relational database schemas in MySQL and PostgreSQL with 3NF normalization, foreign key constraints, and Prisma/Sequelize ORMs.",
    },
    {
      icon: ShieldCheck,
      title: "Auth & Security",
      description: "Implementing multi-tenant data isolation, JWT authentication, granular Role-Based Access Control (RBAC), and server-side request validation.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-surface-50/50 border-y border-surface-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
            <span>{"// Engineering Background"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About My Journey & Core Focus
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I am a Software Engineering student at <strong className="text-white">Dire Dawa University</strong> with practical full-stack application development experience. My approach emphasizes engineering fundamentals—clean code, modular architecture, database integrity, and operational security over superficial templates.
          </p>
        </div>

        {/* Core Technical Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-surface-100/60 border border-surface-200/80 hover:border-brand-500/40 hover:bg-surface-100 transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Education & Internship Highlights Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-2xl bg-surface-100/40 border border-surface-200">
          
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <GraduationCap className="w-6 h-6" />
              <h3 className="font-bold text-white text-lg">Academic Education</h3>
            </div>
            <div className="p-4 rounded-xl bg-surface-50 border border-surface-200 space-y-2">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-white text-sm">{profileData.education.institution}</h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-600/20 text-brand-300 border border-brand-500/30">
                  {profileData.education.status}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono">
                {profileData.education.degree} in {profileData.education.field}
              </p>
              <p className="text-xs text-slate-400">
                Gaining rigorous computer science foundations in software architecture, database management systems, data structures, algorithms, and software testing.
              </p>
            </div>
          </div>

          {/* Internship */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-400">
              <Briefcase className="w-6 h-6" />
              <h3 className="font-bold text-white text-lg">Work Experience</h3>
            </div>
            <div className="p-4 rounded-xl bg-surface-50 border border-surface-200 space-y-2">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-white text-sm">{profileData.internship.company}</h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {profileData.internship.location}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono">{profileData.internship.role}</p>
              <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                {profileData.internship.highlights.slice(0, 3).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-400 hover:text-brand-300 transition-colors"
          >
            Read complete background & engineering journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
