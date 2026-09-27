import React from 'react';
import { profileData } from '@/lib/data/profile';
import { CheckCircle2, BookOpen, Terminal, Code2, Server, Database, Wrench } from 'lucide-react';

export function SkillsGrid() {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Frontend')) return Code2;
    if (category.includes('Backend')) return Server;
    if (category.includes('Database')) return Database;
    return Wrench;
  };

  return (
    <div className="space-y-16">
      
      {/* Current Verified Skills */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-surface-200/60 pb-4">
          <div className="w-8 h-8 rounded bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Production Technical Stack</h3>
            <p className="text-xs text-slate-400 font-mono">Verified technologies used in real application development</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.currentSkills.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-surface-100/50 border border-surface-200/80 space-y-4"
              >
                <div className="flex items-center gap-2.5 text-brand-400 font-mono text-sm font-semibold">
                  <Icon className="w-4 h-4" />
                  <span>{cat.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-surface-50 text-slate-200 font-mono text-xs border border-surface-200 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Currently Learning Direction */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-surface-200/60 pb-4">
          <div className="w-8 h-8 rounded bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Active Growth & Learning Direction</h3>
            <p className="text-xs text-slate-400 font-mono">Advanced topics currently being studied and integrated</p>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-surface-100/40 border border-amber-500/20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {profileData.currentlyLearning.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-surface-50/80 border border-surface-200/60 flex items-center gap-2.5 text-xs text-slate-300"
            >
              <Terminal className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
