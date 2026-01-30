"use client";

import React from "react"

import { motion } from "framer-motion";
import { useLanguage } from "./language-context";
import { Award, ExternalLink } from "lucide-react";

interface EducationItem {
  title: { en: string; es: string };
  institution: string;
  period: { start: string; end: string };
  duration: { en: string; es: string };
  description: { en: string; es: string };
  certificateImage: string;
  accentColor: string;
  link?: string;
}

const educationItems: EducationItem[] = [
  {
    title: { 
      en: "Bachelor in IT Management", 
      es: "Licenciatura en Gestión de Tecnología de la Información" 
    },
    institution: "UADE",
    period: { start: "Present", end: "" },
    duration: { en: "In Progress", es: "En Curso" },
    description: {
      en: "Degree focused on strategic management of technology, systems architecture, and business logic implementation.",
      es: "Carrera enfocada en la gestión estratégica de tecnología, arquitectura de sistemas e implementación de lógica de negocios.",
    },
    certificateImage: "/certificates/uade.jpg", // Placeholder
    accentColor: "oklch(0.75 0.12 180)", // Teal
    link: "#",
  },
  {
    title: { 
      en: "Full Stack Programming", 
      es: "Programación Full Stack" 
    },
    institution: "Coder House",
    period: { start: "2022", end: "2023" },
    duration: { en: "Bootcamp", es: "Bootcamp" },
    description: {
      en: "Intensive program covering React.js, Node.js, Firebase, and Database management. Built complete web applications from scratch.",
      es: "Programa intensivo que cubre React.js, Node.js, Firebase y gestión de bases de datos. Construcción de aplicaciones web completas.",
    },
    certificateImage: "/certificates/fullstack.jpg", // Placeholder
    accentColor: "oklch(0.7 0.15 300)", // Purple
    link: "#",
  },
  {
    title: { 
      en: "Web Development", 
      es: "Desarrollo Web" 
    },
    institution: "Coder House",
    period: { start: "2022", end: "2022" },
    duration: { en: "Course", es: "Curso" },
    description: {
      en: "Foundational course on HTML, CSS, SASS, Git, and JavaScript. Focused on responsive design and layout techniques.",
      es: "Curso fundamental sobre HTML, CSS, SASS, Git y JavaScript. Enfocado en diseño responsivo y técnicas de maquetación.",
    },
    certificateImage: "/certificates/webdev.jpg", // Placeholder
    accentColor: "oklch(0.65 0.20 320)", // Pink/Magenta
    link: "#",
  },
  {
    title: { 
      en: "Robotics & Game Development", 
      es: "Certificados en Robótica y Videojuegos" 
    },
    institution: "UTN",
    period: { start: "2018", end: "2019" },
    duration: { en: "Certifications", es: "Certificaciones" },
    description: {
      en: "Early certifications in Robotics and Video Game Programming that sparked my interest in logic and code.",
      es: "Certificaciones tempranas en Robótica y Programación de Videojuegos que despertaron mi interés en la lógica y el código.",
    },
    certificateImage: "/certificates/utn.jpg", // Placeholder
    accentColor: "oklch(0.85 0.15 90)", // Yellow
    link: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function EducationCard({ education, isLast }: { education: EducationItem; isLast: boolean }) {
  const { language, t } = useLanguage();
  const title = education.title[language];
  const description = education.description[language];
  const duration = education.duration[language];

  return (
    <motion.div variants={item} className="relative flex gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-[11px] top-[28px] w-[2px] h-[calc(100%+24px)]"
          style={{ backgroundColor: `${education.accentColor.replace(")", " / 0.2)")}` }}
        />
      )}

      {/* Timeline dot */}
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
          <Award
            className="w-3 h-3"
            style={{ color: education.accentColor }}
          />
        </motion.div>
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-10">
        {/* Period badge */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3"
          style={{
            backgroundColor: `${education.accentColor.replace(")", " / 0.1)")}`,
            color: education.accentColor,
          }}
        >
          {education.period.start} {education.period.end ? `- ${education.period.end}` : ""}
        </div>

        {/* Card with certificate image */}
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          className="group relative p-5 rounded-xl bg-card border border-border hover:border-transparent transition-all duration-300"
        >
          {/* Hover glow effect */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            style={{
              boxShadow: `0 0 40px ${education.accentColor.replace(')', ' / 0.15)')}`,
            }}
          />
          
          {/* Colored border on hover */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              border: `1px solid ${education.accentColor.replace(')', ' / 0.5)')}`,
            }}
          />

          <div className="flex flex-col md:flex-row gap-5">
            {/* Certificate Image Placeholder / Icon */}
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
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Info */}
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

              {/* Duration badge */}
              <div className="flex items-center gap-2 pt-1">
                <span
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/50"
                >
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

export function EducationSection() {
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
          // FIX: Usamos el index para garantizar que la Key sea única siempre
          key={`${education.institution}-${index}`}
          education={education}
          isLast={index === educationItems.length - 1}
        />
      ))}
    </motion.div>
  );
}