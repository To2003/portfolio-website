/**
 * Centralized oklch color palette.
 * Single source of truth for brand colors across the portfolio.
 * @module colors
 */

/**
 * Primary oklch color definitions with metadata.
 * Each color is defined with: lightness, chroma, hue.
 * Format: oklch(lightness chroma hue)
 */
export const OKLCH_PALETTE = {
  // Cyan (primary - frontend)
  cyan: {
    lightness: 0.75,
    chroma: 0.12,
    hue: 180,
    label: "Cyan - Frontend",
  },
  // Purple (education)
  purple: {
    lightness: 0.7,
    chroma: 0.15,
    hue: 300,
    label: "Purple - Education",
  },
  // Orange (self-taught)
  orange: {
    lightness: 0.75,
    chroma: 0.15,
    hue: 55,
    label: "Orange - Self-Taught",
  },
  // Yellow (UADE)
  yellow: {
    lightness: 0.85,
    chroma: 0.15,
    hue: 90,
    label: "Yellow - UADE",
  },
  // Pink (AI Tools)
  pink: {
    lightness: 0.75,
    chroma: 0.12,
    hue: 350,
    label: "Pink - AI",
  },
} as const;

/**
 * Text color Tailwind classes for all palette colors.
 * Use for highlighting important terms and concepts.
 */
export const OKLCH_TEXT = {
  primary: "text-primary",
  cyan: "text-[oklch(0.75_0.12_180)]",
  purple: "text-[oklch(0.7_0.15_300)]",
  orange: "text-[oklch(0.75_0.15_55)]",
  yellow: "text-[oklch(0.85_0.15_90)]",
  pink: "text-[oklch(0.75_0.12_350)]",
} as const;

/**
 * Background color Tailwind classes for all palette colors.
 * Use for category badges and colored containers.
 */
export const OKLCH_BG = {
  cyan: "bg-[oklch(0.75_0.12_180_/_0.1)]",
  purple: "bg-[oklch(0.7_0.15_300_/_0.1)]",
  orange: "bg-[oklch(0.75_0.15_55_/_0.1)]",
  yellow: "bg-[oklch(0.85_0.15_90_/_0.1)]",
  pink: "bg-[oklch(0.75_0.12_350_/_0.1)]",
} as const;

/**
 * Border color Tailwind classes for all palette colors.
 * Use with background colors for layered effects.
 */
export const OKLCH_BORDER = {
  cyan: "border-[oklch(0.75_0.12_180_/_0.3)]",
  purple: "border-[oklch(0.7_0.15_300_/_0.3)]",
  orange: "border-[oklch(0.75_0.15_55_/_0.3)]",
  yellow: "border-[oklch(0.85_0.15_90_/_0.3)]",
  pink: "border-[oklch(0.75_0.12_350_/_0.3)]",
} as const;

/**
 * Glow/Shadow color Tailwind classes for hover effects.
 * Creates luminous box-shadow on hover for interactive elements.
 */
export const OKLCH_GLOW = {
  cyan: "hover:shadow-[0_0_20px_oklch(0.75_0.12_180_/_0.2)]",
  purple: "hover:shadow-[0_0_20px_oklch(0.7_0.15_300_/_0.2)]",
  orange: "hover:shadow-[0_0_20px_oklch(0.75_0.15_55_/_0.2)]",
  yellow: "hover:shadow-[0_0_20px_oklch(0.85_0.15_90_/_0.2)]",
  pink: "hover:shadow-[0_0_20px_oklch(0.75_0.12_350_/_0.2)]",
} as const;

/**
 * Complete color theme object for tech categories.
 * Maps category keys to all related color variants.
 */
export type ColorTheme = {
  bg: string;
  border: string;
  text: string;
  glow: string;
};

/**
 * Category color themes for tech stack section.
 * Each category has consistent styling across bg, border, text, and glow.
 */
export const CATEGORY_COLORS: Record<string, ColorTheme> = {
  languages: {
    bg: OKLCH_BG.yellow,
    border: OKLCH_BORDER.yellow,
    text: OKLCH_TEXT.yellow,
    glow: OKLCH_GLOW.yellow,
  },
  frontend: {
    bg: OKLCH_BG.cyan,
    border: OKLCH_BORDER.cyan,
    text: OKLCH_TEXT.cyan,
    glow: OKLCH_GLOW.cyan,
  },
  backend: {
    bg: OKLCH_BG.purple,
    border: OKLCH_BORDER.purple,
    text: OKLCH_TEXT.purple,
    glow: OKLCH_GLOW.purple,
  },
  tools: {
    bg: OKLCH_BG.orange,
    border: OKLCH_BORDER.orange,
    text: OKLCH_TEXT.orange,
    glow: OKLCH_GLOW.orange,
  },
  ai: {
    bg: OKLCH_BG.pink,
    border: OKLCH_BORDER.pink,
    text: OKLCH_TEXT.pink,
    glow: OKLCH_GLOW.pink,
  },
} as const;

/**
 * Highlighted text color mapping for about section.
 * Maps semantic color names to text classes.
 */
export const HIGHLIGHT_COLORS = {
  primary: OKLCH_TEXT.cyan,
  purple: OKLCH_TEXT.purple,
  orange: OKLCH_TEXT.orange,
  yellow: OKLCH_TEXT.yellow,
} as const;
