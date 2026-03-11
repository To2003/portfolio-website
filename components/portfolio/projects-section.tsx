"use client";

import React from "react"
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  UtensilsCrossed, 
  Coffee, 
  Cookie, 
  ShoppingBag, 
  Image as ImageIcon 
} from "lucide-react"; 
import { useLanguage } from "./language-context";

interface Project {
  titleKey: string;
  descKey: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  icon: any; 
  accentColor: string;
}

export function ProjectsSection() {
  const { t } = useLanguage();

  // PROYECTOS COMPLETADOS (Meraki y Flor de Antojitos)
  const completedProjects: Project[] = [
    {
      titleKey: "project_meraki_title", // Agregalo a tu language-context
      descKey: "project_meraki_desc",   // Agregalo a tu language-context
      tags: ["Next.js", "Sanity CMS", "Tailwind", "Framer Motion"],
      links: {
        demo: "https://bolsos-website.vercel.app/",
        repo: "https://github.com/To2003/bolsos-website", 
      },
      icon: ShoppingBag,
      accentColor: "oklch(0.65 0.12 20)", // Marrón elegante
    },
    {
      titleKey: "project_gallery_title", // Agregalo a tu language-context
      descKey: "project_gallery_desc",   // Agregalo a tu language-context
      tags: ["Next.js", "Sanity CMS", "Tailwind", "Photo API"],
      links: {
        demo: "https://foto-gallery-website.vercel.app/", // Ajustá la URL si es otra
        repo: "https://github.com/To2003/foto-gallery-website", 
      },
      icon: ImageIcon,
      accentColor: "oklch(0.6 0.2 250)", // Blue
    },
    {
      titleKey: "project_flor_title",
      descKey: "project_flor_desc",
      tags: ["React", "Next.js", "Sanity CMS", "Tailwind"],
      links: {
        demo: "https://flor-deantojitos-website.vercel.app/",
        repo: "https://github.com/To2003/flor-deantojitos-website", 
      },
      icon: Cookie, 
      accentColor: "oklch(0.7 0.15 290)", 
    },
  ];

  // PROYECTOS EN DESARROLLO (Smash Bar y Camellia)
  const inDevelopmentProjects: Project[] = [
    {
      titleKey: "project_smash_title",
      descKey: "project_smash_desc",
      tags: ["React", "Next.js", "Tailwind CSS"],
      links: {
        demo: "https://smash-bar-website.vercel.app/",
        repo: "https://github.com/To2003/smashBar-website", 
      },
      icon: UtensilsCrossed,
      accentColor: "oklch(0.7 0.16 50)", 
    },
    {
      titleKey: "project_camellia_title",
      descKey: "project_camellia_desc",
      tags: ["React", "Next.js", "Tailwind CSS"],
      links: {
        demo: "https://camellia-bakery-website.vercel.app/",
        repo: "https://github.com/To2003/camellia-bakery-website", 
      },
      icon: Coffee,
      accentColor: "oklch(0.75 0.18 350)", 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="space-y-16">
      {/* SECCIÓN COMPLETADOS */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Proyectos Completados
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {completedProjects.map((project) => (
            <ProjectCard key={project.titleKey} project={project} />
          ))}
        </motion.div>
      </div>

      {/* SECCIÓN EN DESARROLLO */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          En Desarrollo
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {inDevelopmentProjects.map((project) => (
            <ProjectCard key={project.titleKey} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ... (Componente ProjectCard queda igual al que ya tenés)
function ProjectCard({ project }: { project: Project }) {
  // @ts-ignore
  const { t } = useLanguage();
  // @ts-ignore
  const title = t[project.titleKey];
  // @ts-ignore
  const description = t[project.descKey];
  const Icon = project.icon;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      className="group relative flex flex-col h-full bg-secondary/20 border border-border/50 rounded-xl overflow-hidden hover:border-transparent transition-all duration-300"
    >
      {/* Glow Effects */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 80px ${project.accentColor.replace(")", " / 0.15)")}` }}
      />
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ border: `1px solid ${project.accentColor.replace(")", " / 0.5)")}` }}
      />

      <div className="p-6 pb-0 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center border"
            style={{
              backgroundColor: project.accentColor.replace(")", " / 0.1)") + "",
              borderColor: project.accentColor.replace(")", " / 0.2)") + "",
              color: project.accentColor,
            }}
          >
            <Icon className="w-5 h-5" />
          </div>
          <h3
            className="text-xl font-bold text-foreground group-hover:text-[var(--hover-color)] transition-colors"
            style={{ "--hover-color": project.accentColor } as React.CSSProperties}
          >
            {title}
          </h3>
        </div>

        <div className="flex gap-2">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              title="Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md border"
              style={{
                backgroundColor: project.accentColor.replace(")", " / 0.05)") + "",
                borderColor: project.accentColor.replace(")", " / 0.15)") + "",
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}