import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { getWriteClient } from "@/sanity/lib/writeClient";
import { githubReposQuery } from "@/sanity/lib/queries";

const GITHUB_USERNAME = "To2003";

interface GithubRepo {
  full_name: string;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  topics?: string[];
}

function humanizeRepoName(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const reposRes = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=created`,
    { headers }
  );

  if (!reposRes.ok) {
    return NextResponse.json(
      { error: `GitHub API error: ${reposRes.status}` },
      { status: 502 }
    );
  }

  const repos: GithubRepo[] = await reposRes.json();
  const nonForkRepos = repos.filter((repo) => !repo.fork);

  const existing = await client.fetch<string[]>(githubReposQuery);
  const existingSet = new Set(existing);

  const newRepos = nonForkRepos.filter(
    (repo) => !existingSet.has(repo.full_name)
  );

  const writeClient = getWriteClient();
  const created: string[] = [];
  for (const repo of newRepos) {
    const title = humanizeRepoName(repo.name);
    await writeClient.create({
      _type: "project",
      titleEn: title,
      titleEs: title,
      descriptionEn: repo.description ?? "",
      descriptionEs: repo.description ?? "",
      tags: repo.topics ?? [],
      repoUrl: repo.html_url,
      githubRepo: repo.full_name,
      icon: "Code2",
      accentColor: "oklch(0.75 0.12 180)",
      status: "in-development",
      featured: false,
      visible: false,
      order: Date.now(),
    });
    created.push(repo.full_name);
  }

  return NextResponse.json({ created });
}
