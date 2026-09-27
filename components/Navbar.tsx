'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Menu, X, FileText, Github, Linkedin, Send } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/engineering', label: 'Engineering' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-surface-200/50 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group font-mono text-lg font-bold text-white tracking-tight"
        >
          <div className="w-9 h-9 rounded-lg bg-brand-600/20 border border-brand-500/40 flex items-center justify-center text-brand-400 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-amber-500 group-hover:border-amber-400/50 group-hover:text-white transition-all duration-500 shadow-[0_0_10px_rgba(223,156,27,0)] group-hover:shadow-[0_0_15px_rgba(223,156,27,0.4)]">
            <Terminal className="w-5 h-5" />
          </div>
          <span className="group-hover:text-brand-100 transition-colors duration-300">
            NASIR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">AMME</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-50/80 p-1.5 rounded-full border border-surface-200/40 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-[0_2px_10px_rgba(223,156,27,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-surface-100/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Quick Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 border border-surface-200 bg-surface-50/60 hover:bg-surface-100 hover:text-white transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-brand-400" />
            Resume
          </Link>
          <a
            href="https://github.com/nasiramme1511"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-100 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-surface-100/60 border border-surface-200/50"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-surface-200 bg-[#090d16]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-brand-600/30 text-brand-400 border border-brand-500/40 font-semibold'
                      : 'text-slate-300 hover:bg-surface-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-surface-200/60 flex items-center justify-between gap-3">
            <Link
              href="/resume"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-all"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </Link>
            <div className="flex gap-2">
              <a
                href="https://github.com/nasiramme1511"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-slate-300 bg-surface-100 border border-surface-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nasir-amme-9a29a7340"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-slate-300 bg-surface-100 border border-surface-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
