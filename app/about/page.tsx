import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { profileData } from '@/lib/data/profile';
import { GraduationCap, Briefcase, Code2, Server, Database, ShieldCheck, ArrowRight, Download, FileText } from 'lucide-react';

export const metadata = {
  title: 'About Nasir Amme | Full-Stack Software Engineer',
  description: 'Background, education at Dire Dawa University, software engineering focus, and internship experience at Afronex Tech Hub.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
            <span>{"// Professional Profile"}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-brand-400">Nasir Amme</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Software Engineering student at Dire Dawa University specializing in building scalable full-stack web applications, multi-tenant architectures, resilient REST APIs, and normalized relational database systems.
          </p>
        </div>

        {/* Profile Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl p-1 bg-gradient-to-b from-brand-500/40 via-surface-200 to-transparent shadow-2xl">
              <div className="rounded-[14px] overflow-hidden bg-surface-50">
                <Image
                  src="/profile.jpg"
                  alt="Nasir Amme"
                  width={400}
                  height={460}
                  priority
                  className="w-full h-[400px] object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Engineering Mindset & Background</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              My engineering philosophy revolves around solving real-world operational problems using robust software design patterns. Rather than relying on superficial boilerplate templates or unvalidated claims, I focus heavily on operational security (RBAC, JWT claims, schema validation), database integrity, clean code separation, and automated testing.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Through my practical work on multi-tenant management systems (OMMS), financial fee engines (MCMS), and digital media archives (Sheikh Muhammed Zabuur), I have gained hands-on experience across the complete software development lifecycle—from domain modeling to cloud deployment.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/Nasir_Amme_CV.pdf"
                download="Nasir_Amme_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs font-semibold shadow-lg shadow-brand-600/20 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Official CV
              </a>
              <Link
                href="/engineering"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-100 hover:bg-surface-200 text-slate-200 font-mono text-xs font-semibold border border-surface-200 transition-all"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                View Engineering Architecture Page
              </Link>
            </div>
          </div>

        </div>

        {/* Detailed Education & Internship Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-surface-200/60">
          
          {/* Dire Dawa University */}
          <div className="p-8 rounded-2xl bg-surface-100/50 border border-surface-200/80 space-y-4">
            <div className="flex items-center gap-3 text-brand-400">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Software Engineering Degree</h3>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-bold text-white text-sm">{profileData.education.institution}</p>
              <p className="font-mono text-brand-400">{profileData.education.degree} in {profileData.education.field}</p>
              <p className="text-slate-400">{profileData.education.status} • {profileData.education.location}</p>
              <p className="pt-2 leading-relaxed">
                Core coursework includes Software Architecture, Object-Oriented Design, Database Management Systems, Data Structures & Algorithms, Computer Networks, Software Testing, and Web Systems Engineering.
              </p>
            </div>
          </div>

          {/* Afronex Tech Hub */}
          <div className="p-8 rounded-2xl bg-surface-100/50 border border-surface-200/80 space-y-4">
            <div className="flex items-center gap-3 text-emerald-400">
              <Briefcase className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Internship Experience</h3>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-bold text-white text-sm">{profileData.internship.company}</p>
              <p className="font-mono text-emerald-400">{profileData.internship.role}</p>
              <p className="text-slate-400">{profileData.internship.location}</p>
              <ul className="pt-2 space-y-1.5 list-disc list-inside text-slate-300">
                {profileData.internship.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
