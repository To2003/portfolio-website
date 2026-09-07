import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ProjectIcon =
  | "ShoppingBag"
  | "ImageIcon"
  | "Cookie"
  | "UtensilsCrossed"
  | "Coffee"
  | "Code2";

export type ProjectStatus = "completed" | "in-development";

export interface Project {
  _id: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs: string;
  image?: SanityImageSource;
  icon: ProjectIcon;
  accentColor: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  githubRepo?: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  visible: boolean;
}
