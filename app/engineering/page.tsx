import React from 'react';
import { engineeringSections } from '@/lib/data/engineering';
import { Layers, ShieldCheck, TestTube, Zap, GitBranch, Cpu, Code2, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Software Engineering & System Architecture | Nasir Amme',
  description: 'Technical specifications, frontend/backend architecture, security controls, testing strategies, performance tuning, and DevOps practices.',
};

export default function EngineeringPage() {
  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'architecture': return Layers;
      case 'security': return ShieldCheck;
      case 'testing': return TestTube;
      case 'performance': return Zap;
      case 'devops': return GitBranch;
      default: return Cpu;
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
            <span>{"// Engineering Specifications & Architecture"}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            How I Engineer Software
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A comprehensive deep-dive into my architectural patterns, security controls, testing standards, performance optimizations, and DevOps practices.
          </p>
        </div>

        {/* Anchor Quick Navigation Bar */}
        <div className="flex flex-wrap gap-2 p-2 rounded-xl bg-surface-100/60 border border-surface-200/80 backdrop-blur-md">
          {engineeringSections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-4 py-2 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-surface-200 transition-all"
            >
              #{sec.title}
            </a>
          ))}
        </div>

        {/* Detailed Sections List */}
        <div className="space-y-16">
          {engineeringSections.map((section) => {
            const Icon = getSectionIcon(section.id);
            return (
              <section
                key={section.id}
                id={section.id}
                className="p-8 sm:p-10 rounded-2xl bg-surface-100/40 border border-surface-200/80 space-y-8 scroll-mt-36"
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 border-b border-surface-200/60 pb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{section.title}</h2>
                    <p className="text-xs sm:text-sm text-slate-300">{section.description}</p>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 gap-8">
                  {section.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="space-y-4">
                      <h3 className="text-lg font-bold text-white text-brand-300 font-mono">
                        {topic.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {topic.description}
                      </p>

                      <div className="p-4 rounded-xl bg-surface-50 border border-surface-200/60 space-y-2">
                        <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          Engineering Rules & Best Practices
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                          {topic.practices.map((practice, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{practice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Code Snippet Display if Present */}
                      {topic.codeSnippet && (
                        <div className="rounded-xl overflow-hidden border border-surface-200 bg-[#070a11]">
                          <div className="px-4 py-2 bg-surface-100/80 border-b border-surface-200/60 flex items-center justify-between font-mono text-[11px] text-slate-400">
                            <span className="flex items-center gap-1.5">
                              <Code2 className="w-3.5 h-3.5 text-brand-400" /> Implementation Pattern
                            </span>
                            <span>TypeScript</span>
                          </div>
                          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                            <code>{topic.codeSnippet}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
