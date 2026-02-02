"use client";

import React from "react"
import { motion } from "framer-motion";
import { useLanguage } from "./language-context";
import { Award, ExternalLink } from "lucide-react";

// Definimos la interfaz para usar las claves del contexto
interface EducationItem {
  titleKey: string;
  institution: string;
  period: string;
  duration: { en: string; es: string }; // Mantenemos esto simple localmente
  descKey: string;
  certificateImage: string;
  accentColor: string;
  link?: string;
}

export function EducationSection() {
  const { t, language } = useLanguage();

  // Ahora usamos las claves que definimos en language-context.tsx
  const educationItems: EducationItem[] = [
    {
      titleKey: "edu_uade_title",
      institution: "UADE",
      period: "Present",
      duration: { en: "In Progress", es: "En Curso" },
      descKey: "edu_uade_desc",
      certificateImage: "/certificates/uade.jpg",
      accentColor: "oklch(0.75 0.12 180)", // Teal
      link: "#",
    },
    {
      titleKey: "edu_coder_fullstack_title",
      institution: "Coder House",
      period: "2022 - 2023",
      duration: { en: "Bootcamp", es: "Bootcamp" },
      descKey: "edu_coder_fullstack_desc",
      certificateImage: "/certificates/fullstack.jpg",
      accentColor: "oklch(0.7 0.15 300)", // Purple
      link: "#",
    },
    {
      titleKey: "edu_coder_web_title",
      institution: "Coder House",
      period: "2022",
      duration: { en: "Course", es: "Curso" },
      descKey: "edu_coder_web_desc",
      certificateImage: "/certificates/webdev.jpg",
      accentColor: "oklch(0.65 0.20 320)", // Pink/Magenta
      link: "#",
    },
    {
      titleKey: "edu_utn_title",
      institution: "UTN",
      period: "2018 - 2019",
      duration: { en: "Certifications", es: "Certificaciones" },
      descKey: "edu_utn_desc",
      certificateImage: "/certificates/utn.jpg",
      accentColor: "oklch(0.85 0.15 90)", // Yellow
      link: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="relative"
    >
      {educationItems.map((education, index) => (
        <EducationCard
          key={`${education.institution}-${index}`}
          education={education}
          isLast={index === educationItems.length - 1}
          language={language}
          t={t}
        />
      ))}
    </motion.div>
  );
}

// Componente Tarjeta Extraído para limpieza
function EducationCard({ 
  education, 
  isLast, 
  language, 
  t 
}: { 
  education: EducationItem; 
  isLast: boolean; 
  language: "en" | "es"; 
  t: any 
}) {
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Obtenemos los textos usando las claves
  const title = t[education.titleKey];
  const description = t[education.descKey];
  const duration = education.duration[language];
  const periodText = education.period === "Present" ? t.present : education.period;

  return (
    <motion.div variants={item} className="relative flex gap-6">
      {/* Línea de tiempo */}
      {!isLast && (
        <div
          className="absolute left-[11px] top-[28px] w-[2px] h-[calc(100%+24px)]"
          style={{ backgroundColor: `${education.accentColor.replace(")", " / 0.2)")}` }}
        />
      )}

      {/* Punto de la línea */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: education.accentColor,
            backgroundColor: `${education.accentColor.replace(")", " / 0.1)")}`,
          }}
        >
          <Award className="w-3 h-3" style={{ color: education.accentColor }} />
        </motion.div>
      </div>

      {/* Tarjeta de Contenido */}
      <div className="flex-1 pb-10">
        {/* Badge de Periodo */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3"
          style={{
            backgroundColor: `${education.accentColor.replace(")", " / 0.1)")}`,
            color: education.accentColor,
          }}
        >
          {periodText}
        </div>

        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          className="group relative p-5 rounded-xl bg-card border border-border hover:border-transparent transition-all duration-300"
        >
          {/* Efectos de Hover */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            style={{ boxShadow: `0 0 40px ${education.accentColor.replace(')', ' / 0.15)')}` }}
          />
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ border: `1px solid ${education.accentColor.replace(')', ' / 0.5)')}` }}
          />

          <div className="flex flex-col md:flex-row gap-5">
            {/* Imagen del Certificado (Placeholder) */}
            <div 
              className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${education.accentColor.replace(')', ' / 0.2)')}, ${education.accentColor.replace(')', ' / 0.05)')})`,
              }}
            >
              <Award 
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                style={{ color: education.accentColor }}
              />
            </div>

            {/* Información */}
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 
                    className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-[var(--hover-color)]" 
                    style={{ '--hover-color': education.accentColor } as React.CSSProperties}
                  >
                    {title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: education.accentColor }}>
                    {education.institution}
                  </p>
                </div>
                {education.link && education.link !== "#" && (
                  <a 
                    href={education.link}
                    className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/50">
                  {t.durationLabel}: {duration}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}