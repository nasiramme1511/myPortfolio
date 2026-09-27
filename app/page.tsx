import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillsGrid } from '@/components/SkillsGrid';
import { ContactForm } from '@/components/ContactForm';
import { projectsData } from '@/lib/data/projects';
import { engineeringSections } from '@/lib/data/engineering';
import { blogPosts } from '@/lib/data/blog';
import { ArrowRight, Layers, ShieldCheck, Zap, Terminal, FileCode2, BookOpen } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* About & Core Journey */}
      <AboutSection />

      {/* Featured Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
                <span>{"// Featured Real Systems"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Production-Grade Engineering Projects
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Real software platforms built with multi-tenancy, granular security, bulk data processing pipelines, and resilient APIs.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-400 hover:text-brand-300 transition-colors"
            >
              Explore all project repositories & case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* Engineering Deep-Dive Teaser Section */}
      <section className="py-20 bg-surface-50/70 border-y border-surface-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
              <span>{"// Software Engineering & Architecture"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Mindset & Systems Design
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Demonstrating architectural decisions, security boundaries, testing methodologies, performance optimization, and operational DevOps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineeringSections.slice(0, 3).map((section) => (
              <div
                key={section.id}
                className="p-6 rounded-xl bg-surface-100/60 border border-surface-200/80 space-y-4 hover:border-brand-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold font-mono">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-lg">{section.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{section.description}</p>
                <div className="pt-2">
                  <Link
                    href={`/engineering#${section.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-400 hover:text-brand-300"
                  >
                    Read Technical Specifications <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/engineering"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-100 hover:bg-surface-200 text-white font-mono text-xs font-semibold border border-surface-200 transition-all"
            >
              View Full Engineering Specification Page
              <ArrowRight className="w-4 h-4 text-brand-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* Skills Showcase Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
              <span>{"// Technical Capabilities"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Learning Roadmap
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Transparent categorization of production technologies used in actual projects alongside active growth areas. No artificial percentage bars.
            </p>
          </div>

          <SkillsGrid />

        </div>
      </section>

      {/* Blog Articles Teaser */}
      <section className="py-20 bg-surface-50/50 border-t border-surface-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
                <span>{"// Technical Writing"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineering Articles & Insights
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Documenting real implementation lessons on RBAC authorization, streaming Excel uploads, REST API patterns, and database design.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-400 hover:text-brand-300 transition-colors"
            >
              View all technical articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
              <div
                key={post.slug}
                className="p-6 sm:p-8 rounded-2xl bg-surface-100/50 border border-surface-200/80 hover:border-brand-500/40 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="px-2.5 py-0.5 rounded bg-brand-600/20 text-brand-300 border border-brand-500/30">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white hover:text-brand-300 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-200/50 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-400 hover:text-brand-300"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
