import { defineQuery } from "next-sanity";

export const projectsQuery = defineQuery(
  `*[_type == "project" && visible == true] | order(order asc)`
);

export const githubReposQuery = defineQuery(
  `*[_type == "project" && defined(githubRepo)].githubRepo`
);
