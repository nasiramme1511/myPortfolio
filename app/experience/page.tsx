import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

export const metadata = {
  title: 'Work Experience & Education | Nasir Amme',
  description: 'Internship experience at Afronex Tech Hub and Software Engineering education at Dire Dawa University.',
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
            <span>{"// Work & Academic History"}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Honest record of professional software engineering internship experience and academic computer science background.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-surface-200">
          
          {/* Item 1: Afronex Tech Hub Internship */}
          <div className="relative pl-14 space-y-4">
            <div className="absolute left-3 top-1.5 w-6 h-6 rounded-full bg-emerald-600 border-4 border-background flex items-center justify-center text-white" />
            
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-100/60 border border-surface-200/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-200/50 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold border border-emerald-500/30">
                    INTERNSHIP EXPERIENCE
                  </span>
                  <h2 className="text-xl font-bold text-white mt-1">
                    {profileData.internship.role}
                  </h2>
                  <p className="text-sm font-semibold text-emerald-400 font-mono">
                    {profileData.internship.company}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{profileData.internship.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Core Engineering Responsibilities & Achievements
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {profileData.internship.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Item 2: Dire Dawa University */}
          <div className="relative pl-14 space-y-4">
            <div className="absolute left-3 top-1.5 w-6 h-6 rounded-full bg-brand-600 border-4 border-background flex items-center justify-center text-white" />

            <div className="p-6 sm:p-8 rounded-2xl bg-surface-100/60 border border-surface-200/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-200/50 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-brand-600/20 text-brand-300 font-mono text-[11px] font-bold border border-brand-500/30">
                    ACADEMIC DEGREE
                  </span>
                  <h2 className="text-xl font-bold text-white mt-1">
                    {profileData.education.degree} in {profileData.education.field}
                  </h2>
                  <p className="text-sm font-semibold text-brand-400 font-mono">
                    {profileData.education.institution}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{profileData.education.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Academic Focus & Computer Science Foundation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Rigorous software engineering curriculum covering Software Architecture, Database Management Systems, System Analysis & Design, Object-Oriented Software Engineering, Data Structures & Algorithms, and Distributed Systems.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
