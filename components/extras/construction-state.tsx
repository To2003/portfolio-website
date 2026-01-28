"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../portfolio/language-context";

export function ConstructionState() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">
      {/* Animated Stickman SVG */}
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-foreground fill-none stroke-2">
          {/* Head */}
          <circle cx="100" cy="50" r="20" strokeWidth="3" />
          
          {/* Body */}
          <line x1="100" y1="70" x2="100" y2="120" strokeWidth="3" />
          
          {/* Legs (Sitting) */}
          <path d="M 100 120 L 70 150" strokeWidth="3" />
          <path d="M 100 120 L 130 150" strokeWidth="3" />

          {/* Table */}
          <line x1="40" y1="130" x2="160" y2="130" strokeWidth="2" className="stroke-muted-foreground" />
          <line x1="50" y1="130" x2="50" y2="180" strokeWidth="2" className="stroke-muted-foreground" />
          <line x1="150" y1="130" x2="150" y2="180" strokeWidth="2" className="stroke-muted-foreground" />

          {/* Laptop */}
          <path d="M 80 130 L 120 130 L 120 100 L 80 100 Z" className="fill-background stroke-primary" strokeWidth="2" />
          
          {/* Arms (Typing Animation) */}
          <motion.path
            d="M 100 90 L 85 110"
            strokeWidth="3"
            animate={{ d: ["M 100 90 L 85 110", "M 100 90 L 85 105", "M 100 90 L 85 110"] }}
            transition={{ repeat: Infinity, duration: 0.2 }}
          />
          <motion.path
            d="M 100 90 L 115 110"
            strokeWidth="3"
            animate={{ d: ["M 100 90 L 115 110", "M 100 90 L 115 105", "M 100 90 L 115 110"] }}
            transition={{ repeat: Infinity, duration: 0.2, delay: 0.1 }}
          />
          
          {/* Sweat drops (Hard work) */}
          <motion.path
            d="M 130 50 L 135 60"
            className="stroke-blue-400"
            animate={{ opacity: [0, 1, 0], y: [0, 10] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </svg>
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2 max-w-md"
      >
        <h3 className="text-2xl font-bold text-primary">{t.working_title}</h3>
        <p className="text-muted-foreground">{t.working_desc}</p>
      </motion.div>
    </div>
  );
}