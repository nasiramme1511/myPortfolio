import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-600/20 border border-brand-500/40 flex items-center justify-center text-brand-400 mx-auto">
          <Terminal className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <span className="font-mono text-xs text-brand-400 font-bold uppercase tracking-wider">404 — Page Not Found</span>
          <h1 className="text-3xl font-extrabold text-white">Resource Unavailable</h1>
          <p className="text-xs text-slate-300">The page or route you are looking for does not exist in this architecture.</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-mono text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
