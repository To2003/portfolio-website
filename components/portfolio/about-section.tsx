"use client";

import React from "react"
import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

/**
 * REFACTORING NOTE: These animation variants are duplicated across multiple sections.
 * Consider importing from @/constants/animations after centralization.
 * @see REFACTORING_GUIDE.md for migration steps
 */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
};

function HighlightedText({ children, color = "primary" }: { children: React.ReactNode; color?: "primary" | "purple" | "orange" | "yellow" }) {
  const colorClasses = {
    primary: "text-primary",
    purple: "text-[oklch(0.7_0.15_300)]",
    orange: "text-[oklch(0.75_0.15_55)]",
    yellow: "text-[oklch(0.85_0.15_90)]",
  };

  return (
    <span className={`font-semibold ${colorClasses[color]} transition-colors duration-200`}>
      {children}
    </span>
  );
}

export function AboutSection() {
  const { t: translations } = useLanguage();
  
  return (
    <div className="relative">
      {/* Background decorative code brackets */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          className="text-[20rem] font-mono font-bold text-foreground/[0.02] leading-none"
          aria-hidden="true"
        >
          {"</>"}
        </span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0 }}
        className="relative z-10 space-y-6"
      >
        {/* Introduction paragraph: career overview and primary tech stack */}
        <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {translations.about_intro_1}{" "}
          <HighlightedText color="primary">React</HighlightedText>
          {translations.and}
          <HighlightedText color="primary">TypeScript</HighlightedText>
          {translations.about_intro_2}
        </motion.p>
        
        {/* Education paragraph: courses, self-taught learning, and degree */}
        <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {translations.about_edu_1}{" "}
          <HighlightedText color="purple">Coderhouse</HighlightedText>
          {translations.about_edu_2}{" "}
          <HighlightedText color="orange">{translations.self_taught}</HighlightedText>
          {translations.about_edu_3}{" "}
          <HighlightedText color="yellow">{translations.uade_degree}</HighlightedText>
          {translations.at}
          <HighlightedText color="yellow">UADE</HighlightedText>
          {"."}
        </motion.p>

        {/* Hands-on approach: maker mindset and personal projects */}
        <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {translations.about_maker}
        </motion.p>

        {/* Hobbies: competitive sports and tabletop gaming - strategic skills applied to code */}
        <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {translations.about_hobbies_1}{" "}
          <HighlightedText color="primary">{translations.hockey}</HighlightedText>
          {translations.and}
          <HighlightedText color="primary">{translations.dm}</HighlightedText>
          {translations.about_hobbies_2}
        </motion.p>
      </motion.div>
    </div>
  );
}