"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

// CONFIGURACIÓN: Cambia a 'false' si consigues empleo
const IS_OPEN_TO_WORK = true;

const socialLinks = [
  {
    href: "https://github.com",
    icon: Github,
    label: "GitHub",
    color: "hover:text-foreground hover:bg-foreground/10",
  },
  {
    href: "https://linkedin.com",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:text-[oklch(0.65_0.15_230)] hover:bg-[oklch(0.65_0.15_230_/_0.1)]",
  },
  {
    href: "mailto:hello@example.com",
    icon: Mail,
    label: "Email",
    color: "hover:text-[oklch(0.75_0.15_55)] hover:bg-[oklch(0.75_0.15_55_/_0.1)]",
  },
];

export function Sidebar() {
  const { t } = useLanguage();
  
  return (
    <aside className="flex flex-col justify-center h-full p-8 lg:p-12 gap-8">
      <div className="space-y-6">
        {/* Profile Picture with Animated Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 lg:w-32 lg:h-32 mb-6"
        >
          {/* Animated glow ring */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, oklch(0.75 0.12 180), oklch(0.7 0.15 300), oklch(0.75 0.15 55), oklch(0.75 0.12 180))',
              animation: 'spin 6s linear infinite',
              padding: '2px',
            }}
          >
            <div className="w-full h-full rounded-full bg-sidebar" />
          </div>
          
          {/* Avatar content */}
          <div className="absolute inset-[3px] rounded-full bg-secondary overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center">
              <span className="text-3xl lg:text-4xl font-bold text-primary">TA</span>
            </div>
          </div>
        </motion.div>

        {/* Name and Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-2xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Tomas Aguilar
          </h1>
          <p className="text-lg lg:text-xl text-primary font-semibold mt-1">
            {t.role}
          </p>
        </motion.div>

        {/* STATUS TAG (New Feature) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
           <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs lg:text-sm font-medium border ${
              IS_OPEN_TO_WORK
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                : "bg-rose-500/10 text-rose-500 border-rose-500/20"
            }`}
          >
            <span className="relative flex h-2 w-2">
              {IS_OPEN_TO_WORK && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  IS_OPEN_TO_WORK ? "bg-emerald-500" : "bg-rose-500"
                }`}
              ></span>
            </span>
            {IS_OPEN_TO_WORK ? t.status_open : t.status_closed}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mt-4 text-sm lg:text-base leading-relaxed max-w-[280px]"
        >
          {t.tagline}
        </motion.p>
      </div>

      {/* Social Links with Color */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-2"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2.5 rounded-lg text-muted-foreground transition-all duration-200 ${link.color}`}
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5 lg:w-6 lg:h-6" />
          </motion.a>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </aside>
  );
}