export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  telegram: string;
  youtube: string;
  bio: string;
  education: {
    institution: string;
    degree: string;
    field: string;
    status: string;
    location: string;
  };
  internship: {
    company: string;
    role: string;
    location: string;
    period: string;
    highlights: string[];
  };
  currentSkills: {
    category: string;
    skills: string[];
  }[];
  currentlyLearning: string[];
}

export const profileData: ProfileData = {
  name: "NASIR AMME",
  title: "Full-Stack Web Developer",
  headline: "Full-Stack Software Engineer",
  tagline: "Building modern, secure, scalable and production-ready web applications.",
  location: "Dire Dawa, Ethiopia",
  email: "nasiramme1511@gmail.com",
  phone: "+251996656617",
  github: "https://github.com/nasiramme1511",
  linkedin: "https://www.linkedin.com/in/nasir-amme-9a29a7340",
  telegram: "https://t.me/nasiramme1511",
  youtube: "https://www.youtube.com/@NasirAmme-h4o",
  bio: "Software Engineering student at Dire Dawa University passionate about full-stack web engineering, backend architecture, relational database design, and robust API development. Experienced in building production-ready multi-tenant management platforms, financial tracking tools, and secure web applications.",
  education: {
    institution: "Dire Dawa University",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    status: "Undergraduate Student",
    location: "Dire Dawa, Ethiopia",
  },
  internship: {
    company: "Afronex Tech Hub",
    role: "Junior Web Developer / Software Engineering Intern",
    location: "Dire Dawa, Ethiopia",
    period: "Internship Period",
    highlights: [
      "Developed responsive frontend components and robust backend services.",
      "Worked extensively with MySQL database schemas, query optimization, and migrations.",
      "Participated in active debugging, automated/manual testing, and code refactoring.",
      "Contributed to full-stack application development workflows in an agile team environment.",
    ],
  },
  currentSkills: [
    {
      category: "Frontend Engineering",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express.js", "PHP", "Laravel", "RESTful API Design", "JWT & OAuth Auth"],
    },
    {
      category: "Database & ORM",
      skills: ["MySQL", "PostgreSQL", "Prisma ORM", "Sequelize ORM", "Relational Database Design"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vercel / Render Deployment"],
    },
  ],
  currentlyLearning: [
    "Next.js App Router Architecture",
    "Advanced TypeScript Patterns",
    "PostgreSQL Query Tuning",
    "Docker Containerization",
    "AWS Core Infrastructure",
    "System Design & Distributed Caching",
    "CI/CD Pipeline Automation",
  ],
};
