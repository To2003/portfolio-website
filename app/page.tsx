import { existsSync } from "fs";
import path from "path";
import { PortfolioLayout } from "@/components/portfolio/portfolio-layout";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/sanity/lib/types";

const CV_FILENAME = "cv-tomas-aguilar.pdf";

export default async function Home() {
  const projects = await client.fetch<Project[]>(
    projectsQuery,
    {},
    { next: { revalidate: 3600 } }
  );
  const hasCv = existsSync(path.join(process.cwd(), "public", CV_FILENAME));

  return <PortfolioLayout projects={projects} hasCv={hasCv} />;
}
