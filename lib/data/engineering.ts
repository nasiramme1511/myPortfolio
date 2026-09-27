export interface EngineeringSection {
  id: string;
  title: string;
  description: string;
  iconName: string;
  topics: {
    name: string;
    description: string;
    practices: string[];
    codeSnippet?: string;
  }[];
}

export const engineeringSections: EngineeringSection[] = [
  {
    id: "architecture",
    title: "System Architecture & Layering",
    description: "Designing modular, decoupled full-stack web applications with clear boundaries between UI, API controllers, domain business logic, and persistence layers.",
    iconName: "Layers",
    topics: [
      {
        name: "Frontend Architecture",
        description: "Building scalable single-page and server-rendered React/Next.js interfaces with strict component scoping, custom hooks, and centralized state management.",
        practices: [
          "Separation of Presentational components from Container logic",
          "Custom React hooks for encapsulating async API interactions & cache management",
          "Strict TypeScript DTO type synchronization between client and server APIs",
          "Atomic design principle for UI consistency and accessibility",
        ],
        codeSnippet: `// Example: Clean API Fetch Custom Hook pattern in React/TS
export function useFetchData<T>(apiEndpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(apiEndpoint, { signal: controller.signal });
        if (!response.ok) throw new Error(\`HTTP error \${response.status}\`);
        const json = await response.json();
        if (isMounted) setData(json);
      } catch (err: any) {
        if (err.name !== 'AbortError' && isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();
    return () => { isMounted = false; controller.abort(); };
  }, [apiEndpoint]);

  return { data, loading, error };
}`
      },
      {
        name: "Backend Architecture",
        description: "Layered Node.js/Express MVC design isolating API routing, request validation, domain service logic, and database ORM interactions.",
        practices: [
          "Controller layer responsible solely for HTTP request/response orchestration",
          "Service layer containing pure domain rules independent of HTTP framework",
          "Data Access Layer leveraging Prisma / Sequelize ORMs with transactional safety",
          "Centralized asynchronous error handling middleware eliminating repetitive try-catch blocks",
        ],
        codeSnippet: `// Layered Express Service Pattern with Async Handler
export const getOrganizationMembers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tenantId = req.tenantContext.id;
    const members = await OrganizationService.fetchMembers(tenantId, req.query);
    return res.status(200).json({ success: true, data: members });
  } catch (error) {
    next(error); // Forward to global error handler middleware
  }
};`
      },
      {
        name: "Database Architecture",
        description: "Relational schema design emphasizing 3NF normalization, multi-tenant isolation, foreign key constraints, and dynamic schema extensions.",
        practices: [
          "Normalized relational models (MySQL / TiDB / PostgreSQL)",
          "Tenant boundary enforcement via compound unique keys (`tenant_id`, `id`)",
          "Hybrid EAV/JSON fields for dynamic user-defined organization attributes",
          "Database migrations managed via Prisma Migrate or Sequelize CLI",
        ]
      }
    ]
  },
  {
    id: "security",
    title: "Security & Access Control",
    description: "Engineering defense-in-depth security into web applications across authentication, authorization, input validation, and API rate limiting.",
    iconName: "ShieldCheck",
    topics: [
      {
        name: "Authentication & Authorization (RBAC)",
        description: "Implementing stateless JWT bearer tokens with refresh token rotation and hierarchical Role-Based Access Control.",
        practices: [
          "Password hashing using Argon2 / Bcrypt with configurable salt rounds",
          "HTTP-only, SameSite=Strict cookie storage preventing XSS token theft",
          "Fine-grained RBAC middleware enforcing permissions per route (e.g. `checkPermission('members:write')`)",
          "Multi-tenant claim validation on every incoming API request",
        ],
        codeSnippet: `// Middleware: Enforcing Granular RBAC Permissions
export function authorizePermission(requiredPermission: string) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const userPermissions = req.user?.permissions || [];
    if (!userPermissions.includes(requiredPermission)) {
      return res.status(403).json({ error: "Forbidden: Insufficient privileges" });
    }
    return next();
  };
}`
      },
      {
        name: "Input Validation & Sanitization",
        description: "Eliminating SQL injection, cross-site scripting (XSS), and CSV formula injection at application boundaries.",
        practices: [
          "Server-side runtime schema validation using Zod for all request bodies & parameters",
          "Parametrized queries enforced by Prisma ORM eliminating raw string concatenation SQL injections",
          "Content Security Policy (CSP) and security headers configured via server options",
          "Sanitizing file upload streams and Excel inputs in bulk processing engines",
        ]
      }
    ]
  },
  {
    id: "testing",
    title: "Testing & Code Quality",
    description: "Maintaining system stability and preventing regression through structured unit testing, integration checks, static analysis, and type safety.",
    iconName: "TestTube",
    topics: [
      {
        name: "Testing Strategy",
        description: "Multi-level testing approach ensuring business calculations, API boundaries, and UI components behave as expected.",
        practices: [
          "Unit testing pure business calculations (financial balance algorithms, tax rules, date math) using Vitest / Jest",
          "Component testing interactive UI states using React Testing Library",
          "Integration testing API controllers with mock database repositories",
          "Strict TypeScript checks (`tsc --noEmit`) blocking unsafe type coercions",
        ],
        codeSnippet: `// Vitest Unit Test Example: Financial Fee Calculation Algorithm
import { describe, it, expect } from 'vitest';
import { calculateOutstandingBalance } from './feeCalculator';

describe('calculateOutstandingBalance', () => {
  it('correctly computes balance when partial payments are made', () => {
    const totalDues = 1200;
    const payments = [{ amount: 400 }, { amount: 300 }];
    const balance = calculateOutstandingBalance(totalDues, payments);
    expect(balance).toBe(500);
  });
});`
      }
    ]
  },
  {
    id: "performance",
    title: "Performance & Optimization",
    description: "Optimizing Web Vitals, resource loading, bundle sizes, and database queries for fast user experiences.",
    iconName: "Zap",
    topics: [
      {
        name: "Frontend Performance",
        description: "Delivering fast page loads and smooth interactions through modern build practices.",
        practices: [
          "Next.js automatic code splitting and server component rendering",
          "Next.js Image component optimization for WebP formats & responsive srcSet",
          "Lazy loading heavy route components and dynamic imports",
          "Eliminating layout shifts (CLS) by preallocating media container dimensions",
        ]
      },
      {
        name: "Database & API Optimization",
        description: "Optimizing server response times and database load under high transaction volume.",
        practices: [
          "Database indexing on frequently queried columns (`tenant_id`, `email`, `created_at`)",
          "Selective field projection in ORM queries avoiding `SELECT *` payload bloat",
          "Streaming spreadsheet processing using ExcelJS to maintain low heap memory footprint",
          "Server-side cache control headers and Next.js revalidation caching for static API calls",
        ]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud Infrastructure",
    description: "Automating software delivery pipelines, containerizing workloads, and managing cloud deployments.",
    iconName: "GitBranch",
    topics: [
      {
        name: "Continuous Integration & Deployment",
        description: "Automated verification and frictionless release workflows.",
        practices: [
          "GitHub Actions CI workflows validating linting, typechecking, tests, and production builds on PRs",
          "Vercel deployment for Next.js web applications with preview environments",
          "Render platform deployment for Node.js/Express APIs and background workers",
          "TiDB Cloud / MySQL cloud database management with SSL encryption",
        ]
      },
      {
        name: "Containerization & Learning Roadmap",
        description: "Standardizing development environments and advancing cloud engineering capabilities.",
        practices: [
          "Docker containerization (`Dockerfile` & `docker-compose.yml`) for reproducible environment setup",
          "Environment variable segregation separating production credentials from development defaults",
          "Currently advancing capabilities in AWS (S3, EC2, CloudFront) & System Design principles",
        ]
      }
    ]
  }
];
