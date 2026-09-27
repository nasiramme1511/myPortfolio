# Nasir Amme - Full-Stack Software Engineer Portfolio

A production-grade personal engineering portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. 

This repository replaces a previous static HTML/JS portfolio with a modern, component-driven React architecture designed to showcase complex backend engineering projects, architectural case studies, and professional experience.

## Live Application
**[nasir-amme-portfolio.vercel.app](https://nasir-amme-portfolio.vercel.app)**

---

## 🏗️ Technical Architecture & Stack

- **Framework**: Next.js 14 (App Router, Server Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS, Lucide React (Icons)
- **Data Validation**: Zod
- **Email Delivery**: Resend API
- **Testing**: Vitest, React Testing Library
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions (Linting, Typechecking, Vitest, Build Validation)

## ✨ Core Features

1. **Engineering Case Studies**: Detailed breakdowns of real multi-tenant management systems (OMMS), financial fee tracking software (MCMS), and digital media archives.
2. **Server-Side Security**: Configured Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), Frame Options, and standard security headers via `next.config.js`.
3. **Contact Delivery**: Secure server-side validation using Zod and email delivery via Resend, including in-memory IP rate-limiting.
4. **Automated Testing**: Unit and component testing using Vitest to ensure profile, project, and routing data integrity.
5. **SEO & Accessibility**: Complete static metadata, OpenGraph tags, semantic HTML, and dynamic sitemap generation.

---

## 📂 Folder Structure

```text
myPortfolio/
├── app/                  # Next.js 14 App Router pages and layouts
│   ├── api/              # Serverless API routes (e.g., Contact Form)
│   ├── about/            # Professional background and education
│   ├── blog/             # Technical engineering articles
│   ├── engineering/      # Architecture, security, and DevOps principles
│   ├── experience/       # Internship and professional work history
│   ├── projects/         # Engineering project case studies
│   └── resume/           # Printable web resume
├── components/           # Reusable React components (UI, Forms, Cards)
├── lib/                  # Shared utilities and data access
│   ├── data/             # Statically typed TS data (Projects, Profile, Blog)
│   └── github.ts         # GitHub API integration wrapper
├── public/               # Static assets (Images, Resumes, Sample Excel templates)
├── scripts/              # Build scripts (e.g., sample data generation)
└── tests/                # Vitest test suites
```

---

## 🚀 Local Development

### 1. Prerequisites
- Node.js 20+
- npm or yarn

### 2. Environment Variables
Copy the `.env.example` file to create a local `.env.local`:
```bash
cp .env.example .env.local
```
Fill in the necessary credentials:
- `RESEND_API_KEY`: API key for sending contact form emails.
- `CONTACT_EMAIL`: The destination email address for form submissions.
- `NEXT_PUBLIC_SITE_URL`: Your local or production base URL.
- `GITHUB_TOKEN`: (Optional) For higher rate limits on GitHub stats fetching.

### 3. Installation & Setup
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Verification

The project enforces strict type checking and automated tests to ensure production stability.

```bash
# Run ESLint validation
npm run lint

# Run TypeScript static analysis without emitting files
npm run typecheck

# Execute Vitest test suite
npm run test

# Create a production build locally
npm run build
```

---

## ⚙️ Continuous Integration (CI/CD)

The repository uses **GitHub Actions** (`.github/workflows/ci.yml`) to automatically validate every push and pull request to the `main` branch. The CI pipeline executes the following steps in a clean Ubuntu environment:
1. Installs Node 20 & Dependencies
2. Runs ESLint checks
3. Validates TypeScript types
4. Executes the Vitest test suite
5. Attempts a Next.js production build

Code is only considered safe to deploy if all checks pass. Vercel handles the production deployments automatically upon a successful push.

---

## 👨‍💻 Author

**Nasir Amme**  
*Full-Stack Web Developer & Software Engineering Student*  
[LinkedIn](https://www.linkedin.com/in/nasir-amme-9a29a7340) | [GitHub](https://github.com/nasiramme1511)
