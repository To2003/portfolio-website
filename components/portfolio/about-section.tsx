"use client";

import React from "react"
import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

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
      ease: "easeOut",
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
  const { t } = useLanguage();
  
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
        {/* Párrafo 1: Intro + Stack */}
        <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {t.about_intro_1}{" "}
          <HighlightedText color="primary">React</HighlightedText>
          {t.and}
          <HighlightedText color="primary">TypeScript</HighlightedText>
          {t.about_intro_2}
        </motion.p>
        
        {/* Párrafo 2: Educación (Coderhouse, Autodidacta, UADE) */}
        <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {t.about_edu_1}{" "}
          <HighlightedText color="purple">Coderhouse</HighlightedText>
          {t.about_edu_2}{" "}
          <HighlightedText color="orange">{t.self_taught}</HighlightedText>
          {t.about_edu_3}{" "}
          <HighlightedText color="yellow">{t.uade_degree}</HighlightedText>
          {t.at}
          <HighlightedText color="yellow">UADE</HighlightedText>
          {"."}
        </motion.p>

        {/* Párrafo 3: Proyectos Maker */}
        <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {t.about_maker}
        </motion.p>

        {/* Párrafo 4: Hobbies (Hockey, D&D) */}
        <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          {t.about_hobbies_1}{" "}
          <HighlightedText color="primary">{t.hockey}</HighlightedText>
          {t.and}
          <HighlightedText color="primary">{t.dm}</HighlightedText>
          {t.about_hobbies_2}
        </motion.p>
      </motion.div>
    </div>
  );
}