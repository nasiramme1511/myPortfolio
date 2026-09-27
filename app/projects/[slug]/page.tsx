import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projectsData } from '@/lib/data/projects';
import { Github, ExternalLink, ArrowLeft, ShieldCheck, Database, Server, Cpu, CheckCircle2, AlertTriangle, Lightbulb, Rocket } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} (${project.acronym}) Case Study | Nasir Amme`,
    description: project.subtitle,
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 hover:text-brand-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Case Study Title Header */}
        <div className="space-y-4 border-b border-surface-200/60 pb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-brand-600/20 text-brand-300 font-mono text-xs font-bold border border-brand-500/30">
              {project.acronym}
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Detailed Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="font-mono text-sm text-slate-300 font-semibold">{project.subtitle}</p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-100 hover:bg-surface-200 text-white font-mono text-xs font-semibold border border-surface-200 transition-all"
            >
              <Github className="w-4 h-4" />
              Source Code on GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs font-semibold shadow-lg shadow-brand-600/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Application Demo
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-md bg-surface-100 text-slate-200 font-mono text-xs border border-surface-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview, Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-6 rounded-xl bg-surface-100/50 border border-surface-200/80 space-y-3">
            <h3 className="font-bold text-white text-base flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-4 h-4" /> Problem Statement
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.problem}</p>
          </div>

          <div className="p-6 rounded-xl bg-surface-100/50 border border-surface-200/80 space-y-3">
            <h3 className="font-bold text-white text-base flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Engineered Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>

        {/* Overview Paragraph */}
        <div className="p-6 rounded-xl bg-surface-50 border border-surface-200/60 space-y-3">
          <h3 className="font-bold text-white text-base font-mono">System Overview</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.overview}</p>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Key Capabilities & Features</h3>
          <ul className="grid grid-cols-1 gap-3">
            {caseStudy.features.map((feat, i) => (
              <li key={i} className="p-4 rounded-xl bg-surface-100/40 border border-surface-200/60 text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-400 mt-2 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Architecture & Database Design */}
        <div className="space-y-8 pt-6 border-t border-surface-200/60">
          <h2 className="text-2xl font-extrabold text-white">System Architecture & Persistence</h2>

          <div className="p-6 rounded-xl bg-surface-100/50 border border-surface-200/80 space-y-3">
            <h3 className="font-bold text-white text-base flex items-center gap-2 text-brand-400">
              <Server className="w-5 h-5" /> Architecture Layering
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.architecture}</p>
          </div>

          <div className="p-6 rounded-xl bg-surface-100/50 border border-surface-200/80 space-y-3">
            <h3 className="font-bold text-white text-base flex items-center gap-2 text-cyan-400">
              <Database className="w-5 h-5" /> Database Design & Schemas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.databaseDesign}</p>
          </div>
        </div>

        {/* Authentication, Authorization & Security Practices */}
        <div className="space-y-6 pt-6 border-t border-surface-200/60">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-brand-400" /> Security, Auth & Boundary Isolation
          </h2>
          
          <div className="p-6 rounded-xl bg-surface-100/40 border border-surface-200/80 space-y-4">
            <h3 className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">Authentication & Authorization Strategy</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.authStrategy}</p>

            <h3 className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider pt-2">Security Enforcement Practices</h3>
            <ul className="space-y-2">
              {caseStudy.securityPractices.map((sec, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Rationale & Key Decisions */}
        <div className="space-y-6 pt-6 border-t border-surface-200/60">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Cpu className="w-6 h-6 text-brand-400" /> Key Engineering Decisions
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {caseStudy.technicalDecisions.map((dec, i) => (
              <div key={i} className="p-5 rounded-xl bg-surface-100/60 border border-surface-200/80 space-y-2">
                <h3 className="font-bold text-white text-sm text-brand-300">{dec.decision}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{dec.rationale}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testing, Deployment, Lessons & Future Roadmap */}
        <div className="space-y-8 pt-6 border-t border-surface-200/60">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">Testing & Deployment Strategy</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.testingAndDeployment}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-surface-100/50 border border-surface-200/80 space-y-3">
              <h3 className="font-bold text-white text-sm flex items-center gap-2 text-amber-400">
                <Lightbulb className="w-4 h-4" /> Lessons Learned
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {caseStudy.lessonsLearned.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-surface-100/50 border border-surface-200/80 space-y-3">
              <h3 className="font-bold text-white text-sm flex items-center gap-2 text-cyan-400">
                <Rocket className="w-4 h-4" /> Future Roadmap
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {caseStudy.futureImprovements.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
