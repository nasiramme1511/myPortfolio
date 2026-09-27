import React from 'react';
import { SkillsGrid } from '@/components/SkillsGrid';

export const metadata = {
  title: 'Skills & Tech Stack | Nasir Amme',
  description: 'Categorized technical skills across frontend, backend, database, DevOps, and learning roadmap without fake percentages.',
};

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
            <span>{"// Technical Stack & Tools"}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Active Learning Roadmap
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Honest breakdown of production-tested skills alongside ongoing learning focus in Next.js, Docker, cloud deployment, and system design.
          </p>
        </div>

        <SkillsGrid />

      </div>
    </div>
  );
}
