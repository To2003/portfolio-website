"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Ingles"}
    >
      <span className={`transition-opacity ${language === "en" ? "opacity-100" : "opacity-50"}`}>EN</span>
      <span className="text-border">/</span>
      <span className={`transition-opacity ${language === "es" ? "opacity-100" : "opacity-50"}`}>ES</span>
    </motion.button>
  );
}
