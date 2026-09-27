import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Technical Blog & Articles | Nasir Amme',
  description: 'Technical articles on RBAC authorization, streaming Excel imports, REST API patterns, and database design.',
};

export default function BlogListingPage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 font-semibold tracking-wider uppercase">
            <span>{"// Engineering Blog"}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Writing & Architecture Articles
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            In-depth guides on designing RBAC security, optimizing bulk file parsing in Node.js, and structuring REST APIs with TypeScript.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
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
                <h2 className="text-xl font-bold text-white hover:text-brand-300 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-surface-50 text-slate-400 font-mono text-[11px] border border-surface-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-surface-200/50 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-400 hover:text-brand-300"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
