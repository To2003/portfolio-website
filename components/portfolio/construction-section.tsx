"use client";

import { motion } from "framer-motion";
import { simpleContainer, exitAnimation } from "@/constants/animations";
import { ConstructionState } from "../extras/construction-state";

interface ConstructionSectionProps {
  /**
   * Optional animation delay in seconds.
   * Useful for staggered section animations.
   * @default 0
   */
  animationDelay?: number;
}

/**
 * Reusable component for sections under construction.
 * Combines standard animation pattern with ConstructionState illustration.
 * Used by: Projects, Experience, Education sections.
 *
 * @param animationDelay - Delay before section fade-in animation (seconds)
 * @returns Animated container with construction state illustration
 *
 * @example
 * // Basic usage
 * <ConstructionSection />
 *
 * // With animation delay for staggered effect
 * <ConstructionSection animationDelay={0.1} />
 */
export function ConstructionSection({ animationDelay = 0 }: ConstructionSectionProps) {
  // Container animation with optional delay
  const animatedContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: animationDelay },
    },
  };

  return (
    <motion.div
      variants={animatedContainer}
      initial="hidden"
      animate="show"
      {...exitAnimation}
      className="relative min-h-[400px] flex flex-col justify-center"
    >
      <ConstructionState />
    </motion.div>
  );
}
