"use client";

import React from "react"
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  UtensilsCrossed,
  Coffee,
  Cookie,
  ShoppingBag,
  Code2,
  Image as ImageIcon
} from "lucide-react";
import { useLanguage } from "./language-context";
import { urlFor } from "@/sanity/lib/image";
import type { Project, ProjectIcon } from "@/sanity/lib/types";

const ICONS: Record<ProjectIcon, typeof ShoppingBag> = {
  ShoppingBag,
  ImageIcon,
  Cookie,
  UtensilsCrossed,
  Coffee,
  Code2,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const { t } = useLanguage();

  const completedProjects = projects.filter((p) => p.status === "completed");
  const inDevelopmentProjects = projects.filter((p) => p.status === "in-development");

  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {t.completed_projects}
        </h2>
        {completedProjects.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {completedProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </motion.div>
        ) : (
          <EmptyState />
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          {t.in_development}
        </h2>
        {inDevelopmentProjects.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {inDevelopmentProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </motion.div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  const { t } = useLanguage();
  return (
    <p className="text-muted-foreground text-sm">{t.working_desc}</p>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const title = language === "es" ? project.titleEs : project.titleEn;
  const description = language === "es" ? project.descriptionEs : project.descriptionEn;
  const Icon = ICONS[project.icon] ?? Code2;

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

      {project.image && (
        <div className="relative w-full aspect-video bg-secondary/40 overflow-hidden">
          <Image
            src={urlFor(project.image).width(760).height(428).url()}
            alt={title}
            fill
            sizes="(min-width: 1024px) 380px, 100vw"
            className="object-cover"
          />
        </div>
      )}

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
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label={`${title} — código en GitHub`}
              title="Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label={`${title} — ver demo en vivo`}
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
