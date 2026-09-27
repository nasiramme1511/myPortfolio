import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: `${post.title} | Nasir Amme Blog`,
    description: post.summary,
  };
}

export default function BlogPostDetail({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 hover:text-brand-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Post Metadata Header */}
        <div className="space-y-4 border-b border-surface-200/60 pb-8">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-0.5 rounded bg-brand-600/20 text-brand-300 border border-brand-500/30 font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-slate-300 italic">{post.summary}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((t, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-surface-100 text-slate-300 font-mono text-xs border border-surface-200">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Article Body Content */}
        <article className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed font-sans">
          <div className="whitespace-pre-line leading-relaxed space-y-4">
            {post.content}
          </div>
        </article>

        {/* Footer Back Button */}
        <div className="pt-10 border-t border-surface-200/60">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs text-brand-400 hover:text-brand-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore more articles
          </Link>
        </div>

      </div>
    </div>
  );
}
