import React from 'react';
import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Nasir Amme - Full-Stack Software Engineer',
  description: 'Get in touch with Nasir Amme for web development projects, full-stack software engineering roles, and technical collaborations.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  );
}
