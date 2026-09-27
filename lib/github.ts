export interface GitHubUserStats {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  bio: string;
  location: string;
  htmlUrl: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  stargazersCount: number;
  forksCount: number;
  language: string | null;
  updatedAt: string;
}

export async function fetchGitHubStats(): Promise<{ stats: GitHubUserStats; repos: GitHubRepo[] }> {
  const fallbackStats: GitHubUserStats = {
    publicRepos: 12,
    followers: 10,
    following: 15,
    avatarUrl: "/profile.jpg",
    bio: "Full-Stack Web Developer / Software Engineering Student",
    location: "Dire Dawa, Ethiopia",
    htmlUrl: "https://github.com/nasiramme1511",
  };

  const fallbackRepos: GitHubRepo[] = [
    {
      id: 1,
      name: "omms-web-app",
      description: "Organization Membership Management System - Multi-tenant management platform built with React, Node.js, Express & Prisma.",
      htmlUrl: "https://github.com/nasiramme1511/omms-web-app",
      homepage: "https://omms-web-app.onrender.com/",
      stargazersCount: 5,
      forksCount: 2,
      language: "TypeScript",
      updatedAt: "2026-09-01T00:00:00Z",
    },
    {
      id: 2,
      name: "mcms",
      description: "Membership Fee Management System featuring bulk Excel imports, audit logs, and Groq AI queries.",
      htmlUrl: "https://github.com/nasiramme1511/mcms",
      homepage: null,
      stargazersCount: 4,
      forksCount: 1,
      language: "TypeScript",
      updatedAt: "2026-08-15T00:00:00Z",
    },
    {
      id: 3,
      name: "sheikh-muhammed-zabuur",
      description: "Digital audio archive and content search platform.",
      htmlUrl: "https://github.com/nasiramme1511/sheikh-muhammed-zabuur",
      homepage: "https://sheikh-muhammed-zabuur.onrender.com/",
      stargazersCount: 3,
      forksCount: 0,
      language: "TypeScript",
      updatedAt: "2026-07-20T00:00:00Z",
    },
  ];

  try {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'NasirAmme-Portfolio-App',
    };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Server-side fetch with Next.js 3600s (1 hour) revalidation cache
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/nasiramme1511', {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch('https://api.github.com/users/nasiramme1511/repos?sort=updated&per_page=6', {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return { stats: fallbackStats, repos: fallbackRepos };
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    const stats: GitHubUserStats = {
      publicRepos: userData.public_repos ?? fallbackStats.publicRepos,
      followers: userData.followers ?? fallbackStats.followers,
      following: userData.following ?? fallbackStats.following,
      avatarUrl: userData.avatar_url ?? fallbackStats.avatarUrl,
      bio: userData.bio ?? fallbackStats.bio,
      location: userData.location ?? fallbackStats.location,
      htmlUrl: userData.html_url ?? fallbackStats.htmlUrl,
    };

    const repos: GitHubRepo[] = Array.isArray(reposData)
      ? reposData.map((r: any) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          htmlUrl: r.html_url,
          homepage: r.homepage,
          stargazersCount: r.stargazers_count ?? 0,
          forksCount: r.forks_count ?? 0,
          language: r.language,
          updatedAt: r.updated_at,
        }))
      : fallbackRepos;

    return { stats, repos };
  } catch (error) {
    return { stats: fallbackStats, repos: fallbackRepos };
  }
}
