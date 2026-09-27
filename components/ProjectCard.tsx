import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/data/projects';
import { Github, ExternalLink, ArrowRight, Layers, Shield, FileCode2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl bg-surface-100/50 border border-surface-200/80 hover:border-brand-500/50 hover:bg-surface-100 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Header: Acronym Badge & Links */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-1 rounded bg-brand-600/20 text-brand-300 font-mono text-xs font-bold border border-brand-500/30">
              {project.acronym}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repository for ${project.title}`}
              className="p-2 rounded-lg bg-surface-50 hover:bg-surface-200 text-slate-300 hover:text-white border border-surface-200 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo for ${project.title}`}
                className="p-2 rounded-lg bg-brand-600/20 hover:bg-brand-600 text-brand-300 hover:text-white border border-brand-500/40 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Subtitle & Description */}
        <p className="font-mono text-xs text-slate-400 font-medium">
          {project.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlight Bullets */}
        <div className="space-y-2 pt-2 border-t border-surface-200/50">
          <p className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Key Architecture & Features
          </p>
          <ul className="space-y-1.5">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-surface-50 text-slate-300 font-mono text-[11px] border border-surface-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Detailed Case Study Link */}
      <div className="px-6 py-4 bg-surface-50/80 border-t border-surface-200/60 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400">Full Architectural Breakdown</span>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-brand-400 hover:text-brand-300 transition-colors"
        >
          View Case Study
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
