/**
 * Centralized animation variants for Framer Motion.
 * Ensures consistency across all portfolio sections.
 * @module animations
 */

/**
 * Container variant with staggered children animation.
 * Stagger value controls delay between child animations.
 * @param stagger - Delay between each child animation in seconds (default: 0.12)
 */
export const staggeredContainer = (stagger: number = 0.12) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
    },
  },
});

/**
 * Item variant with fade and vertical slide animation.
 * Use with staggeredContainer for coordinated effects.
 * @param duration - Animation duration in seconds (default: 0.5)
 * @param ease - Easing function (default: "easeOut")
 */
export const itemWithY = (duration: number = 0.5, ease: string = "easeOut") => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease },
  },
});

/**
 * Item variant with fade and scale animation.
 * Use for tech badges or other elements requiring zoom effect.
 * @param duration - Animation duration in seconds (default: 0.5)
 */
export const itemWithScale = (duration: number = 0.5) => ({
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration },
  },
});

/**
 * Simple container without stagger.
 * Use for sections that display a single element or don't need staggered timing.
 */
export const simpleContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

/**
 * Simple exit animation for all variants.
 * Applied to exiting elements during route transitions.
 */
export const exitAnimation = {
  exit: { opacity: 0 },
};

/**
 * Preset animation configurations for common scenarios.
 * @example
 * // Use for FAQ or accordion-like sections
 * variants={PRESETS.sectionWithDelay(0.1)}
 */
export const PRESETS = {
  /**
   * Standard section animation with customizable delay.
   * Combines staggered container with Y-movement items.
   */
  sectionWithDelay: (delay: number = 0) => ({
    container: staggeredContainer(0.12),
    item: itemWithY(0.5),
    delayedShow: { opacity: 1, transition: { delay } },
  }),

  /**
   * Stack-like animation for tech badges or list items.
   * Uses scale effect instead of Y-movement.
   */
  stackWithBadges: {
    container: staggeredContainer(0.05),
    item: itemWithScale(0.5),
  },

  /**
   * Minimal animation for lightweight sections.
   * Just fade in without movement.
   */
  simpleSection: simpleContainer,
};
