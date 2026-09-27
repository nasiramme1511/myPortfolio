import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { projectsData } from '@/lib/data/projects';

export const metadata = {
  title: 'Projects & Systems | Nasir Amme',
  description: 'Production-ready full-stack software systems: OMMS, MCMS, and Sheikh Muhammed Zabuur content archive.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
            <span>{"// Verified Engineering Projects"}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Software Systems & Case Studies
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Detailed case studies showcasing architectural decisions, multi-tenant isolation, bulk Excel processing, security controls, and database design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}
