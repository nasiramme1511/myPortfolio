import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';
import { profileData } from '@/lib/data/profile';
import { projectsData } from '@/lib/data/projects';
import { engineeringSections } from '@/lib/data/engineering';

describe('Portfolio Core Data Integrity', () => {
  it('contains valid profile data for Nasir Amme', () => {
    expect(profileData.name).toBe('NASIR AMME');
    expect(profileData.email).toBe('nasiramme1511@gmail.com');
    expect(profileData.education.institution).toBe('Dire Dawa University');
    expect(profileData.internship.company).toBe('Afronex Tech Hub');
  });

  it('contains verified project case studies for OMMS, MCMS, and Sheikh Muhammed Zabuur', () => {
    const slugs = projectsData.map((p) => p.slug);
    expect(slugs).toContain('omms');
    expect(slugs).toContain('mcms');
    expect(slugs).toContain('sheikh-muhammed-zabuur');

    const omms = projectsData.find((p) => p.slug === 'omms');
    expect(omms?.highlights.some((h) => h.includes('Multi-tenant'))).toBe(true);
  });

  it('contains engineering sections covering architecture, security, and testing', () => {
    const sectionIds = engineeringSections.map((s) => s.id);
    expect(sectionIds).toContain('architecture');
    expect(sectionIds).toContain('security');
    expect(sectionIds).toContain('testing');
  });
});
