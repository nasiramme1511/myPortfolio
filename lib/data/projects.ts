export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  databaseDesign: string;
  authStrategy: string;
  securityPractices: string[];
  technicalDecisions: { decision: string; rationale: string }[];
  challenges: string[];
  testingAndDeployment: string;
  lessonsLearned: string[];
  futureImprovements: string[];
}

export interface Project {
  slug: string;
  title: string;
  acronym: string;
  subtitle: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  {
    slug: "omms",
    acronym: "OMMS",
    title: "Organization Membership Management System",
    subtitle: "Multi-tenant membership, payments, events & administrative platform",
    description: "A robust full-stack multi-tenant web application engineered to streamline member administration, dynamic attribute customization, automated event tracking, role-based security, and cloud database persistence.",
    githubUrl: "https://github.com/nasiramme1511/omms-web-app",
    liveUrl: "https://omms-web-app.onrender.com/",
    featured: true,
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma ORM", "MySQL / TiDB Cloud", "JWT", "RBAC", "OAuth"],
    highlights: [
      "Multi-tenant architecture isolating organization data securely",
      "Granular Role-Based Access Control (RBAC) with fine permissions",
      "Dynamic custom member attribute schemas per organization",
      "Event scheduling, registration, dynamic member payments & automated reports",
    ],
    caseStudy: {
      overview: "OMMS (Organization Membership Management System) is an enterprise-grade full-stack platform designed to manage multi-tenant organizational structure, member records, fee collection, event planning, and access permissions safely.",
      problem: "Organizations often rely on scattered spreadsheets or inflexible single-tenant tools that fail to isolate organization boundaries, restrict administrative privileges, or accommodate custom data attributes needed by different branches.",
      solution: "Engineered a centralized multi-tenant Web Application using Node.js, Express, Prisma ORM, and React with TypeScript. Built strict data isolation logic, automated JWT authentication with OAuth support, and dynamic attribute fields stored in JSON/relational schemas.",
      features: [
        "Multi-Tenant Isolation: Complete query-level tenant context enforcement using Prisma middleware and session context.",
        "Role-Based Access Control (RBAC): Hierarchical permission models for SuperAdmins, Org Admins, Managers, and Members.",
        "Custom Attribute Schemas: Allows organization administrators to define dynamic fields (e.g. blood type, emergency contact, custom IDs) without altering underlying database DDL.",
        "Event Management & Registrations: Event publishing, RSVP workflows, and attendance audit trails.",
        "Financial & Fee Tracking: Payment logs, dues collection records, and printable receipt exports.",
        "Security & Audit Logging: Comprehensive logging of administrative actions, login attempts, and record mutations.",
      ],
      architecture: "Layered MVC architecture separating client UI (React + TypeScript SPA) from backend API services (Express REST Controller layer, Prisma Data Access Service, Relational TiDB Cloud / MySQL backend). Authentication token exchange uses HTTP-only JWTs with refresh rotation.",
      databaseDesign: "Normalized relational schema with primary entities: Organizations (Tenants), Users, Roles, Permissions, CustomFields, FieldValues, Events, EventAttendees, and Payments. Strict foreign key constraints and multi-column unique indexes (`tenant_id`, `email`) enforce data safety.",
      authStrategy: "Dual-tier authentication: Standard OAuth 2.0 integration alongside secure Argon2/Bcrypt password hashing with JWT bearer verification middleware. Claims carry tenant scope to prevent cross-tenant parameter tampering.",
      securityPractices: [
        "Strict input validation using Zod schemas on every API endpoint",
        "Tenant ID sanitization on all database queries via Prisma middleware",
        "Protection against XSS using sanitized DOM rendering and modern React escaping",
        "Rate limiting on authentication routes via express-rate-limit",
        "CORS policy limited to verified origin domains",
      ],
      technicalDecisions: [
        {
          decision: "Prisma ORM with TiDB Cloud / MySQL",
          rationale: "Provides type-safe database queries synchronized with TypeScript interfaces, eliminating runtime query typos while supporting cloud database scaling."
        },
        {
          decision: "Vite + React + TypeScript for Frontend",
          rationale: "Ensures sub-second Hot Module Replacement during development, fast bundle optimization, and compile-time type safety for complex form state."
        },
        {
          decision: "Dynamic EAV / JSON Hybrid Schema for Custom Attributes",
          rationale: "Empowers tenants to add custom properties dynamically while keeping foreign key integrity intact."
        }
      ],
      challenges: [
        "Enforcing strict data isolation across tenant boundaries without writing repetitive database queries.",
        "Handling complex dynamic form validation for user-defined custom attributes.",
        "Managing multi-role permissions where users have different permissions in different tenant organizations.",
      ],
      testingAndDeployment: "Automated API route testing, frontend component testing, continuous deployment pipeline hosted on Render for backend services and cloud database hosting on TiDB Cloud.",
      lessonsLearned: [
        "Designing multi-tenancy early in the database architecture saves hundreds of hours compared to retrofitting tenant IDs later.",
        "Type safety across the entire stack (Prisma schema to REST DTOs to React props) reduces runtime errors by over 80%.",
      ],
      futureImprovements: [
        "Implement automated background worker queues (Redis/BullMQ) for PDF invoice generation and batch email notifications.",
        "Add Webhooks for external payment gateway callbacks (Stripe / Chapa integration).",
      ]
    }
  },
  {
    slug: "mcms",
    acronym: "MCMS",
    title: "Membership Fee Management System",
    subtitle: "Financial tracking, bulk Excel processing, audit logging & AI assistant",
    description: "A specialized financial management application designed for organization treasurers to handle membership dues, perform large-scale Excel batch processing, log financial audits, support multilingual interfaces, and query records with an AI assistant.",
    githubUrl: "https://github.com/nasiramme1511/mcms",
    liveUrl: undefined,
    featured: true,
    technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Sequelize ORM", "ExcelJS", "i18next", "Groq AI"],
    highlights: [
      "Optimized ExcelJS bulk parser capable of parsing thousands of member fee records without memory leaks",
      "Real-time financial calculation engine with historical ledger tracking",
      "Multilingual internationalization support using i18next",
      "Integrated Groq AI Assistant for natural language financial queries & record filtering",
    ],
    caseStudy: {
      overview: "MCMS (Membership Fee Management System) was built to solve the complex financial accounting challenges faced by organizations collecting recurring member dues.",
      problem: "Organizations frequently process member payments via bulk spreadsheet uploads, resulting in corrupted formats, duplicate records, missing payment periods, and high risk of financial inaccuracies without audit trails.",
      solution: "Developed an end-to-end full-stack platform featuring streaming bulk Excel file parsing with ExcelJS, strict validation pipelines, automatic discrepancy detection, multilingual support, and an AI assistant for querying data.",
      features: [
        "Bulk Excel Import Pipeline: Streams spreadsheets, validates data rows against database rules, flags errors line-by-line, and executes transactional batch inserts.",
        "Financial Ledger & Audit Trail: Immutable logging of every fee payment, edit, or reversal with timestamped author details.",
        "Multilingual UI (i18next): Smooth language switching (English, Amharic, Afaan Oromo) tailored to local administrative users.",
        "Groq AI Assistant: Integrated Groq LLM API to enable natural language querying of payment history (e.g., 'Show total fees collected in Q2').",
        "Role-Based Authorization: Restricts financial modifications to authorized treasurers while offering read-only auditing views.",
      ],
      architecture: "Node.js/Express backend structured with service-oriented modules (Excel Processing Service, Calculation Service, Audit Service) interacting with a MySQL relational database via Sequelize ORM.",
      databaseDesign: "MySQL database featuring normalized tables for Members, DuesCategories, Payments, ExcelImportLogs, AuditLogs, and UserAccounts. Database transactions (`sequelize.transaction`) wrap all import batches to guarantee zero partial commits.",
      authStrategy: "JWT session authentication coupled with fine-grained role middleware restricting administrative financial functions.",
      securityPractices: [
        "MIME-type validation and file size ceiling on Excel file uploads",
        "Row-by-row input sanitization preventing SQL injection and CSV formula injection attacks",
        "Audit logging capturing IP address and User ID for all financial updates",
      ],
      technicalDecisions: [
        {
          decision: "ExcelJS over SheetJS for bulk parsing",
          rationale: "ExcelJS provided superior stream-based row processing and cell formatting controls necessary for generating validation reports."
        },
        {
          decision: "Sequelize Database Transactions",
          rationale: "Guarantees atomicity so an import error on row 500 automatically rolls back the preceding 499 rows."
        },
        {
          decision: "Groq AI Integration",
          rationale: "Fast inference speed allowing real-time query parsing without introducing latency."
        }
      ],
      challenges: [
        "Preventing memory overflows when uploading spreadsheets containing thousands of historical rows.",
        "Designing localized financial report headers compatible with multiple languages.",
      ],
      testingAndDeployment: "Unit tests covering financial calculation algorithms and integration tests verifying spreadsheet parsing accuracy under malformed data inputs.",
      lessonsLearned: [
        "Always process file uploads in streams or chunks rather than loading entire workbooks into heap memory.",
        "Audit logs are essential for any application handling monetary calculations.",
      ],
      futureImprovements: [
        "Export financial statements directly into signed PDF reports.",
        "Add automated SMS/Email reminders for members with overdue balances.",
      ]
    }
  },
  {
    slug: "sheikh-muhammed-zabuur",
    acronym: "SMZ",
    title: "Sheikh Muhammed Zabuur Content Archive",
    subtitle: "High-performance digital audio platform & structured archive",
    description: "A dedicated digital content platform built to archive, categorize, search, and stream audio lectures and educational content with cloud media storage and responsive UI.",
    githubUrl: "https://github.com/nasiramme1511/sheikh-muhammed-zabuur",
    liveUrl: "https://sheikh-muhammed-zabuur.onrender.com/",
    featured: true,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Cloudinary API", "MongoDB / REST API"],
    highlights: [
      "Fast, custom audio player with playback speed controls & queueing",
      "Categorized archive structure supporting instant keyword search & tags",
      "Cloudinary integration for optimized audio delivery & bandwidth savings",
      "Fully mobile-optimized design tuned for low-bandwidth cellular connections",
    ],
    caseStudy: {
      overview: "A specialized web media archive delivering categorized audio lectures and educational material with instant search capabilities.",
      problem: "Listeners struggled to find specific lectures across unstructured drive links, suffering slow loading times and poor mobile audio playback.",
      solution: "Engineered a clean, fast web application backed by Cloudinary CDN for adaptive audio streaming and indexed metadata search.",
      features: [
        "Custom HTML5/React Audio Player: Supports continuous playback across navigation, playback speed adjustment, and seeking.",
        "Indexed Categorization & Search: Real-time client & server filtering by series, topic, date, and keyword.",
        "Cloudinary Media Integration: Dynamic bandwidth-optimized audio file delivery.",
        "Mobile-First Responsive UI: Accessible interface designed for ease of use across mobile devices.",
      ],
      architecture: "React SPA connected to a lightweight Express REST API that handles metadata search queries while offloading heavy audio asset streaming to Cloudinary CDN.",
      databaseDesign: "Document schema modeling Lectures (title, series, audioUrl, duration, tags, date, transcriptSummary) and Categories.",
      authStrategy: "Admin portal protected by JWT authorization for content managers uploading new audio entries.",
      securityPractices: [
        "Signed Cloudinary upload signatures generated on the server",
        "Input sanitization on search queries",
      ],
      technicalDecisions: [
        {
          decision: "Cloudinary CDN for Audio Distribution",
          rationale: "Offloads static asset bandwidth, guarantees fast audio prebuffering globally, and reduces server load."
        },
        {
          decision: "Global State Audio Context",
          rationale: "Allows users to continue listening to audio lectures while browsing other parts of the archive."
        }
      ],
      challenges: [
        "Maintaining uninterrupted audio playback during page navigation.",
        "Ensuring quick audio load times over 3G/4G mobile networks.",
      ],
      testingAndDeployment: "Deployed on Render with performance checks confirming sub-second playback startup.",
      lessonsLearned: [
        "Offloading media assets to a dedicated CDN is critical for fast web application performance.",
        "Persistent global state is essential for smooth audio user experiences.",
      ],
      futureImprovements: [
        "Add offline audio caching support via Service Workers (PWA).",
        "Incorporate automatic speech-to-text transcript search.",
      ]
    }
  }
];
