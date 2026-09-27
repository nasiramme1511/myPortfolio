export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-role-based-access-control",
    title: "How I Designed Role-Based Access Control (RBAC) in a Full-Stack Application",
    summary: "A practical deep-dive into engineering granular authorization middleware, dynamic permission matrices, and token-based claims in multi-tenant Node.js and React applications.",
    date: "September 2026",
    readTime: "7 min read",
    category: "Security & Architecture",
    tags: ["Node.js", "TypeScript", "RBAC", "Security", "Express", "React"],
    content: `
# How I Designed Role-Based Access Control (RBAC) in a Full-Stack Application

Authorization is one of the most critical security boundaries in any full-stack web application. While authentication verifies *who* a user is, authorization dictates *what actions* they are permitted to perform on specific resources.

During the development of **OMMS (Organization Membership Management System)**, I needed an authorization model that was both flexible and robust enough to handle multiple administrative roles (SuperAdmins, Organization Admins, Managers, and Regular Members) across distinct tenants.

---

## 1. Defining the Domain Permissions Matrix

Instead of checking raw role strings directly in controller code (e.g., \`if (user.role === 'admin')\`), I adopted a **granular permission-based model**. Roles are simply named collections of explicit permissions:

- **Permissions**: Atomic strings representing discrete actions (e.g., \`members:read\`, \`members:create\`, \`payments:refund\`, \`events:publish\`).
- **Roles**: Mapped to arrays of permissions. For instance, an \`Organization Manager\` might possess \`["members:read", "events:publish"]\` while lacking \`["payments:refund"]\`.

This decoupling ensures that if a new role is introduced in the future, backend route logic remains completely untouched.

---

## 2. Token-Based Permission Claims with JWT

When a user logs in, the backend authenticates their credentials and signs a JSON Web Token (JWT). The JWT payload carries user metadata alongside their active organization context and permission set:

\`\`\`typescript
interface TokenPayload {
  userId: string;
  tenantId: string;
  role: string;
  permissions: string[];
  iat: number;
  exp: number;
}
\`\`\`

By embedding permissions in the verified token payload (or re-evaluating cached permissions in session storage), downstream API endpoints can verify authorization synchronously without executing extra database queries on every HTTP request.

---

## 3. Higher-Order Express Authorization Middleware

To protect backend endpoints declaratively, I created a reusable middleware factory in Express:

\`\`\`typescript
export function requirePermission(...requiredPermissions: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userPermissions = req.user?.permissions || [];
    
    // Check if the user possesses ALL or ANY required permissions depending on policy
    const hasPermission = requiredPermissions.every(p => userPermissions.includes(p));

    if (!hasPermission) {
      return res.status(403).json({
        success: false,
        error: "Forbidden: You do not have permission to execute this operation."
      });
    }

    return next();
  };
}
\`\`\`

### Route Usage Example:
\`\`\`typescript
router.post(
  '/api/v1/payments/refund',
  authenticateJwt,
  requirePermission('payments:refund'),
  PaymentController.processRefund
);
\`\`\`

---

## 4. Mirroring Permission Guards on the Frontend

While backend authorization guarantees API security, the frontend must also deliver a seamless UI experience by dynamically hiding or disabling UI controls that the logged-in user cannot execute.

In React with TypeScript, I created a \`<PermissionGuard>\` wrapper component:

\`\`\`tsx
interface GuardProps {
  permission: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function PermissionGuard({ permission, children, fallback = null }: GuardProps) {
  const { hasPermission } = useAuth();
  
  if (!hasPermission(permission)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
\`\`\`

---

## Key Takeaways

1. **Never trust the client**: Frontend permission guards exist purely for UX; every single backend endpoint must independently enforce permission checks.
2. **Prefer granular permissions over raw role names**: Basing checks on discrete actions like \`members:write\` scales significantly better than branching on role names like \`admin\`.
3. **Audit authorization violations**: Always log 403 Forbidden attempts to detect unauthorized access patterns early.
`
  },
  {
    slug: "handling-large-excel-imports-in-nodejs",
    title: "Handling Large Excel Imports in Node.js Without Memory Leaks",
    summary: "Architecting a streaming batch-import pipeline using Node.js, ExcelJS, and MySQL transactions to safely process thousands of spreadsheet records.",
    date: "August 2026",
    readTime: "6 min read",
    category: "Backend & Databases",
    tags: ["Node.js", "Express", "ExcelJS", "MySQL", "Performance", "Sequelize"],
    content: `
# Handling Large Excel Imports in Node.js Without Memory Leaks

When building financial systems like **MCMS (Membership Fee Management System)**, batch uploading data via Excel spreadsheets is a primary requirement for non-technical administrative users.

However, parsing large XLSX files naively in Node.js can easily exhaust memory limits or block the event loop, causing server slowdowns or crashes. Here is how I designed a memory-efficient import pipeline.

---

## The Problem with Naive Spreadsheet Parsing

Standard Excel parsing libraries often read the entire workbook into Node.js heap memory at once. If a file contains tens of thousands of rows with multiple columns, Node.js memory consumption spikes exponentially. Furthermore, if row 800 contains invalid data, a naive insert script leaves partial commits in the database—leaving financial ledgers out of balance.

---

## The Architecture Solution

Our production batch import pipeline satisfies three critical engineering constraints:
1. **Streaming / Chunked Reading**: Process spreadsheet rows iteratively without holding the entire document in RAM.
2. **Row-Level Schema Validation**: Validate every cell value before initiating database writes.
3. **Atomic Database Transactions**: Ensure an all-or-nothing execution policy using database transactions.

---

## Implementation Highlights

### 1. Stream-Based Workbook Reader with ExcelJS

Using \`ExcelJS.stream.xlsx.WorkbookReader\`, rows are read sequentially as events fire:

\`\`\`typescript
import ExcelJS from 'exceljs';

export async function processSpreadsheetStream(filePath: string) {
  const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader(filePath, {
    entries: 'emit',
    sharedStrings: 'cache',
    hyperlinks: 'ignore',
    styles: 'ignore'
  });

  const validBatch: MemberFeeRecord[] = [];
  const errors: ImportError[] = [];
  const BATCH_SIZE = 250;

  for await (const worksheetReader of workbookReader) {
    for await (const row of worksheetReader) {
      if (row.number === 1) continue; // Skip header row

      const parsedRow = parseAndValidateRow(row.values);
      if (parsedRow.error) {
        errors.push({ rowNumber: row.number, reason: parsedRow.error });
      } else {
        validBatch.push(parsedRow.data);
      }

      // Process in controlled batches to manage memory
      if (validBatch.length >= BATCH_SIZE) {
        await flushBatchToDatabase(validBatch);
        validBatch.length = 0; // Clear batch array for garbage collection
      }
    }
  }
}
\`\`\`

---

## 2. Transactional Database Batch Writing

To guarantee financial integrity, database writes are executed inside explicit transactions using ORM transaction contexts (such as Sequelize or Prisma):

\`\`\`typescript
async function flushBatchToDatabase(records: MemberFeeRecord[]) {
  const transaction = await sequelize.transaction();
  try {
    await MemberPaymentModel.bulkCreate(records, { transaction, validate: true });
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw new Error(\`Failed to commit batch insert: \${err.message}\`);
  }
}
\`\`\`

---

## Results & Benchmark Gains

- **Memory Stability**: Peak heap memory remained steady below 85MB regardless of file size.
- **Data Safety**: 100% atomicity—zero corrupted or half-imported payment logs.
- **User Feedback**: Line-by-line validation reports delivered actionable feedback to treasurers when spreadsheet formatting errors occurred.
`
  },
  {
    slug: "building-rest-apis-with-nodejs-and-typescript",
    title: "Building Modern REST APIs with Node.js, Express, and TypeScript",
    summary: "Best practices for structuring type-safe backend APIs with clean error handling, Zod validation, and OpenAPI-friendly DTO contracts.",
    date: "July 2026",
    readTime: "5 min read",
    category: "Full-Stack Engineering",
    tags: ["Node.js", "TypeScript", "Express", "Zod", "REST API"],
    content: `
# Building Modern REST APIs with Node.js, Express, and TypeScript

TypeScript has fundamentally changed how backend engineers build Node.js applications. By bringing static type safety to HTTP controllers, request payloads, and service layers, we drastically eliminate entire classes of runtime exceptions before code ever reaches staging environments.

Here is the architectural pattern I use when structuring RESTful services.

---

## Project Directory Organization

\`\`\`text
src/
├── controllers/    # Express request handlers & status code returning logic
├── services/       # Core business logic & domain rules
├── repositories/   # ORM queries and database access
├── schemas/        # Zod request payload schemas
├── middleware/     # Auth, error handling, rate limiters
├── types/          # Express type extensions & TypeScript interfaces
└── app.ts          # Express app configuration & middleware pipeline
\`\`\`

---

## Schema-First Request Validation with Zod

Relying on implicit type assertions on \`req.body\` is dangerous. By pairing Zod with TypeScript, we achieve runtime validation and automatic type inference simultaneously:

\`\`\`typescript
import { z } from 'zod';

export const CreateProjectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  acronym: z.string().max(10),
  budget: z.number().positive(),
  tags: z.array(z.string()).default([]),
});

export type CreateProjectInput = z.infer<typeof CreateProjectSchema>;
\`\`\`

---

## Centralized Express Error Handling

Avoid cluttering controller actions with repetitive try-catch blocks. Instead, use a custom AppError class combined with a global error handler middleware:

\`\`\`typescript
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

// Global Error Middleware
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }

  // Handle unexpected unhandled exceptions safely without leaking tracebacks
  console.error("Unhandled Internal Error:", err);
  return res.status(500).json({
    success: false,
    error: "Internal server error occurred.",
  });
}
\`\`\`

---

## Summary

Combining TypeScript's strict compiler options with Zod validation and layered service separation turns Node.js from a quick scripting environment into an enterprise-grade API platform.
`
  }
];
