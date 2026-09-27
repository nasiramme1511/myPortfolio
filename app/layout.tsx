import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://nasir-amme-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nasir Amme | Full-Stack Software Engineer',
    template: '%s | Nasir Amme',
  },
  description:
    'Full-Stack Software Engineer and Software Engineering student at Dire Dawa University. Building modern, secure, and production-ready web applications.',
  keywords: [
    'Nasir Amme',
    'Full Stack Developer',
    'Software Engineer',
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Express',
    'MySQL',
    'PostgreSQL',
    'Prisma',
    'Dire Dawa University',
    'Multi-Tenant Architecture',
    'RBAC',
  ],
  authors: [{ name: 'Nasir Amme Siraj' }],
  creator: 'Nasir Amme',
  openGraph: {
    title: 'Nasir Amme | Full-Stack Software Engineer',
    description:
      'Building modern, secure, scalable and production-ready web applications.',
    url: siteUrl,
    siteName: 'Nasir Amme Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Nasir Amme - Full-Stack Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nasir Amme | Full-Stack Software Engineer',
    description:
      'Building modern, secure, scalable and production-ready web applications.',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-background text-slate-100 min-h-screen flex flex-col antialiased selection:bg-brand-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
