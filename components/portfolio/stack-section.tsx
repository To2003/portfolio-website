"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

type CategoryKey = "languages" | "frontend" | "backend" | "tools" | "ai";

interface TechItem {
  name: string;
  icon?: string;
}

const techStack: Record<CategoryKey, TechItem[]> = {
  languages: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "HTML" },
    { name: "CSS" },
  ],
  frontend: [
    { name: "React" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "Redux" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "Express" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "REST APIs" },
  ],
  tools: [
    { name: "Git" },
    { name: "Docker" },
    { name: "Figma" },
    { name: "VS Code" },
    { name: "Vercel" },
  ],
  ai: [
    { name: "Gemini" },
    { name: "GitHub Copilot" },
    { name: "ChatGPT" },
    { name: "Claude" },
  ],
};

/**
 * Category color themes for tech stack display.
 * REFACTORING NOTE: These colors are duplicated here and should be centralized.
 * Import from @/constants/colors instead after centralization.
 * @see REFACTORING_GUIDE.md for migration steps
 */
const categoryColors: Record<CategoryKey, { bg: string; border: string; text: string; glow: string }> = {
  languages: {
    bg: "bg-[oklch(0.85_0.15_90_/_0.1)]",
    border: "border-[oklch(0.85_0.15_90_/_0.3)]",
    text: "text-[oklch(0.85_0.15_90)]",
    glow: "hover:shadow-[0_0_20px_oklch(0.85_0.15_90_/_0.2)]",
  },
  frontend: {
    bg: "bg-[oklch(0.75_0.12_180_/_0.1)]",
    border: "border-[oklch(0.75_0.12_180_/_0.3)]",
    text: "text-[oklch(0.75_0.12_180)]",
    glow: "hover:shadow-[0_0_20px_oklch(0.75_0.12_180_/_0.2)]",
  },
  backend: {
    bg: "bg-[oklch(0.7_0.15_300_/_0.1)]",
    border: "border-[oklch(0.7_0.15_300_/_0.3)]",
    text: "text-[oklch(0.7_0.15_300)]",
    glow: "hover:shadow-[0_0_20px_oklch(0.7_0.15_300_/_0.2)]",
  },
  tools: {
    bg: "bg-[oklch(0.75_0.15_55_/_0.1)]",
    border: "border-[oklch(0.75_0.15_55_/_0.3)]",
    text: "text-[oklch(0.75_0.15_55)]",
    glow: "hover:shadow-[0_0_20px_oklch(0.75_0.15_55_/_0.2)]",
  },
  ai: {
    bg: "bg-[oklch(0.75_0.12_350_/_0.1)]",
    border: "border-[oklch(0.75_0.12_350_/_0.3)]",
    text: "text-[oklch(0.75_0.12_350)]",
    glow: "hover:shadow-[0_0_20px_oklch(0.75_0.12_350_/_0.2)]",
  },
};

const categoryTitles: Record<CategoryKey, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  ai: "AI",
};

/**
 * Maps category keys to translation keys.
 * REFACTORING NOTE: This redundant mapping exists to maintain type safety.
 * Consider removing if translation system is refactored.
 * @see REFACTORING_GUIDE.md
 */
const categoryTitleKeys: Record<CategoryKey, "languages" | "frontend" | "backend" | "tools" | "ai"> = {
  languages: "languages",
  frontend: "frontend",
  backend: "backend",
  tools: "tools",
  ai: "ai",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: { opacity: 1, scale: 1, y: 0 },
};

/**
 * Renders individual technology badge with animation and color theming.
 * Applies scale effect on hover for interactive feedback.
 * @param tech - Technology item with name and optional icon
 * @param colors - Color theme object (bg, border, text, glow)
 */
function TechBadge({ tech, colors }: { tech: TechItem; colors: typeof categoryColors.languages }) {
  return (
    <motion.span
      variants={item}
      whileHover={{ scale: 1.08, y: -3 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 cursor-default ${colors.bg} ${colors.border} ${colors.text} ${colors.glow}`}
    >
      {tech.name}
    </motion.span>
  );
}

/**
 * Renders a technology category section with staggered animations.
 * Automatically fetches category title from i18n translations.
 * @param categoryKey - Category identifier (languages, frontend, backend, tools, ai)
 * @param items - Array of technology items to display
 * @param index - Section order for staggered animation delay
 */
function TechCategory({
  categoryKey,
  items,
  index,
}: {
  categoryKey: CategoryKey;
  items: TechItem[];
  index: number;
}) {
  const { t } = useLanguage();
  const colors = categoryColors[categoryKey];
  const titleKey = categoryTitleKeys[categoryKey];
  const title = t[titleKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="space-y-3"
    >
      <h3 className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
        {title}
      </h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2"
      >
        {items.map((tech) => (
          <TechBadge key={tech.name} tech={tech} colors={colors} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export function StackSection() {
  const categories: CategoryKey[] = ["languages", "frontend", "backend", "tools", "ai"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {categories.map((category, index) => (
        <TechCategory
          key={category}
          categoryKey={category}
          items={techStack[category]}
          index={index}
        />
      ))}
    </motion.div>
  );
}
