# 🌐 Nasir Amme — Full-Stack Software Engineer Portfolio & Case Studies

[![Production Build & Verification](https://github.com/nasiramme1511/myPortfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/nasiramme1511/myPortfolio/actions)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green.svg)

> **Professional Positioning**: *"Building modern, secure, scalable and production-ready web applications."*

This repository houses the personal full-stack software engineering portfolio and system architecture showcase for **Nasir Amme Siraj** — Software Engineering student at **Dire Dawa University** and Junior Web Developer intern alumnus at **Afronex Tech Hub**.

---

## ⚡ Key Highlights & Features

- **Modern Dark-First Engineering Aesthetic**: Clean visual hierarchy, code-inspired typography, subtle micro-interactions, and accessible high-contrast UI (no generic templates or fake percentage bars).
- **In-Depth Architectural Case Studies**: Complete technical breakdowns for **OMMS** (Multi-tenant management system), **MCMS** (Financial fee engine & bulk Excel stream parser), and **Sheikh Muhammed Zabuur** (Media archive platform).
- **Dedicated Engineering Specification Page (`/engineering`)**: Transparent documentation on frontend layering, backend MVC services, relational database normalization (3NF), JWT/RBAC security guards, testing strategies, performance Web Vitals tuning, and DevOps CI/CD pipelines.
- **Server-Side Validated Contact System**: Secure Next.js API endpoint (`/api/contact`) with Zod schema validation, input sanitization, and rate-limit defense.
- **Cached GitHub Integration (`/api/github`)**: Server-side fetch with Next.js revalidation cache (`revalidate: 3600`) displaying verified public repositories without exposing private API keys.
- **Preserved Authentic CV & Profile Assets**: Direct web view and download trigger for `Nasir_Amme_CV.pdf` and real profile photo.
- **100% SEO & Accessibility Ready**: Complete OpenGraph, Twitter card metadata, dynamic XML `sitemap.ts`, `robots.ts`, semantic landmarks, and keyboard focus states.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 14 (App Router)](https://nextjs.org)
- **Language**: [TypeScript (Strict Mode)](https://www.typescriptlang.org)
- **UI & Styling**: [React 18](https://react.dev), [Tailwind CSS](https://tailwindcss.com), [Lucide Icons](https://lucide.dev)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### Backend & Integrations
- **API Engine**: Next.js App Router Server Routes
- **Validation**: [Zod Schema Validation](https://zod.dev)
- **Integrations**: GitHub REST API v3 (Cached)

### Quality & Deployment
- **Testing**: [Vitest](https://vitest.dev), [React Testing Library](https://testing-library.com)
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`)
- **Deployment**: Vercel Ready (`vercel.json`)

---

## 📐 Architecture & Folder Structure

```text
myPortfolio/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Server-side Zod form validation
│   │   └── github/route.ts       # Cached GitHub stats proxy
│   ├── about/page.tsx            # Journey & DDU Education details
│   ├── blog/                     # Technical articles & dynamic [slug]
│   ├── contact/page.tsx          # Contact view
│   ├── engineering/page.tsx      # System architecture & specs
│   ├── experience/page.tsx       # Afronex Tech Hub internship timeline
│   ├── projects/                 # Systems showcase & case studies [slug]
│   ├── resume/page.tsx           # Interactive web resume + PDF download
│   ├── skills/page.tsx           # Tech stack & learning direction
│   ├── globals.css               # Tailwind directives & focus states
│   ├── layout.tsx                # Root layout, metadata & fonts
│   ├── page.tsx                  # Homepage
│   ├── robots.ts                 # Dynamic robots.txt
│   └── sitemap.ts                # Dynamic XML sitemap
├── components/
│   ├── AboutSection.tsx          # Background summary component
│   ├── ContactForm.tsx           # Interactive contact form
│   ├── Footer.tsx                # Sitemap & social footer
│   ├── Hero.tsx                  # Hero section with CTA buttons
│   ├── Navbar.tsx                # Sticky navbar & mobile drawer
│   ├── ProjectCard.tsx           # Project card component
│   └── SkillsGrid.tsx            # Categorized skills matrix
├── lib/
│   ├── data/
│   │   ├── blog.ts               # Technical articles dataset
│   │   ├── engineering.ts        # Architecture & security specifications
│   │   ├── profile.ts            # Profile dataset
│   │   └── projects.ts           # Case studies dataset
│   └── github.ts                 # Server-side GitHub API client
├── public/
│   ├── profile.jpg               # Official profile photo
│   └── Nasir_Amme_CV.pdf         # Official PDF Resume
├── tests/
│   └── portfolio.test.tsx        # Vitest component & data tests
├── .github/workflows/ci.yml      # CI pipeline script
├── next.config.js                # Next.js security headers & image config
├── tailwind.config.js            # Design tokens & color system
├── tsconfig.json                 # TypeScript strict compiler options
├── vercel.json                   # Vercel deployment manifest
└── package.json                  # Scripts & dependencies
```

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nasiramme1511/myPortfolio.git
   cd myPortfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional)**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 🧪 Testing & Verification Scripts

- **Run Unit & Component Tests**:
  ```bash
  npm run test
  ```

- **Run TypeScript Type Checking**:
  ```bash
  npm run typecheck
  ```

- **Run ESLint Code Audit**:
  ```bash
  npm run lint
  ```

- **Production Build Test**:
  ```bash
  npm run build
  ```

---

## 📦 Deployment Configuration

This application is optimized for zero-config production deployment on **Vercel**:

1. Import `nasiramme1511/myPortfolio` into your Vercel dashboard.
2. Vercel automatically detects Next.js 14 settings from `package.json` and `vercel.json`.
3. Optionally add `GITHUB_TOKEN` in Vercel environment variables for higher GitHub API rate limits.
4. Click **Deploy**.

---

## 📄 License & Contact

- **Author**: Nasir Amme Siraj
- **Email**: nasiramme1511@gmail.com
- **LinkedIn**: [linkedin.com/in/nasir-amme-9a29a7340](https://www.linkedin.com/in/nasir-amme-9a29a7340)
- **GitHub**: [github.com/nasiramme1511](https://github.com/nasiramme1511)
- **License**: [MIT License](LICENSE)
