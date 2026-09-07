import { PortfolioLayout } from "@/components/portfolio/portfolio-layout";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/sanity/lib/types";

export default async function Home() {
  const projects = await client.fetch<Project[]>(
    projectsQuery,
    {},
    { next: { revalidate: 3600 } }
  );

  return <PortfolioLayout projects={projects} />;
}
