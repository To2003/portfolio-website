/**
 * Centralized Tailwind CSS class constants.
 * Prevents string duplication and ensures consistency.
 * @module tailwind
 */

/**
 * Transition timing and easing classes.
 * Use these instead of hardcoding transition strings.
 */
export const TRANSITIONS = {
  // Timing variants
  fast: "transition-all duration-200",
  normal: "transition-all duration-300",
  slow: "transition-all duration-500",

  // Property-specific transitions
  colors: "transition-colors duration-200",
  opacity: "transition-opacity duration-200",
  transform: "transition-transform duration-300",
  all: "transition-all duration-300",

  // Spring animations (for interactive elements)
  spring: "transition-all duration-500 ease-out",
} as const;

/**
 * Common responsive spacing and sizing utilities.
 * Group related responsive classes for reusability.
 */
export const RESPONSIVE = {
  // Padding variants
  padding: {
    compact: "p-4 lg:p-8",
    comfortable: "p-6 lg:p-12",
    spacious: "p-8 lg:p-16",
  },

  // Text sizing
  text: {
    small: "text-sm lg:text-base",
    normal: "text-base lg:text-lg",
    large: "text-lg lg:text-xl",
    xlarge: "text-xl lg:text-2xl",
    title: "text-2xl lg:text-4xl",
  },

  // Icon sizing
  icon: {
    small: "w-4 h-4 lg:w-5 lg:h-5",
    normal: "w-5 h-5 lg:w-6 lg:h-6",
    large: "w-6 h-6 lg:w-7 lg:h-7",
  },

  // Container sizing
  container: {
    compact: "w-24 h-24 lg:w-32 lg:h-32",
    normal: "w-32 h-32 lg:w-40 lg:h-40",
  },
} as const;

/**
 * Hover state utilities for consistent interactive feedback.
 */
export const HOVER = {
  scale: "hover:scale-105 active:scale-95",
  scaleSmall: "hover:scale-102 active:scale-98",
  opacity: "hover:opacity-80 active:opacity-70",
  translate: "hover:-translate-y-1 active:translate-y-0",
} as const;

/**
 * Layout utilities for common patterns.
 */
export const LAYOUT = {
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  flexColumn: "flex flex-col",
  flexColumnCenter: "flex flex-col items-center justify-center",
  gridAuto: "grid auto-cols-max gap-2",
} as const;

/**
 * Backdrop and glass morphism utilities.
 */
export const BACKDROP = {
  blur: "backdrop-blur-md",
  glass: "bg-white/10 backdrop-blur-md",
  darkGlass: "bg-black/20 backdrop-blur-md",
} as const;

/**
 * Border and outline utilities.
 */
export const BORDERS = {
  thin: "border border-border/50",
  medium: "border-2 border-border",
  thick: "border-4 border-border",
  rounded: "rounded-lg",
  roundedFull: "rounded-full",
} as const;

/**
 * Shadow utilities for depth.
 */
export const SHADOWS = {
  light: "shadow-sm",
  normal: "shadow-md",
  medium: "shadow-lg",
  heavy: "shadow-2xl",
  glow: "shadow-lg shadow-primary/20",
} as const;

/**
 * Utility to combine multiple constant values.
 * @example
 * combineClasses(RESPONSIVE.padding.comfortable, TRANSITIONS.normal, BORDERS.thin)
 */
export const combineClasses = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
