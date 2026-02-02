"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

interface ExperienceItem {
  company: string;
  roleKey: string; // Clave del contexto
  period: { start: string; end: string | null };
  descKey: string; // Clave del contexto
  technologies: string[];
  accentColor: string;
}

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      company: "DGSISAN - Ministerio de Salud (GCBA)",
      roleKey: "exp_dgsisan_imp_role",
      period: { start: "2023", end: "2025" },
      descKey: "exp_dgsisan_imp_desc",
      technologies: ["Health Systems", "Training", "IT Management", "Support"],
      accentColor: "oklch(0.75 0.12 180)", // Teal
    },
    {
      company: "DGSISAN - Ministerio de Salud (GCBA)",
      roleKey: "exp_dgsisan_support_role",
      period: { start: "2023", end: "2023" },
      descKey: "exp_dgsisan_support_desc",
      technologies: ["Hardware", "Software Troubleshooting", "Remote Support"],
      accentColor: "oklch(0.7 0.15 300)", // Purple
    },
    {
      company: "Laboratorio Bioq. Carolina Melffi",
      roleKey: "exp_lab_role",
      period: { start: "2022", end: "2023" },
      descKey: "exp_lab_desc",
      technologies: ["Labsys", "SISA", "DTS", "Data Management"],
      accentColor: "oklch(0.75 0.15 55)", // Orange
    },
    {
      company: "Colegio San Luis",
      roleKey: "exp_sanluis_role",
      period: { start: "2021", end: "2021" },
      descKey: "exp_sanluis_desc",
      technologies: ["IT Support", "Education Technology", "Audiovisual"],
      accentColor: "oklch(0.85 0.15 90)", // Yellow
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
      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.company + index}
          experience={experience}
          isLast={index === experiences.length - 1}
          t={t}
        />
      ))}
    </motion.div>
  );
}

function TimelineItem({ experience, isLast, t }: { experience: ExperienceItem; isLast: boolean; t: any }) {
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Traducciones
  const role = t[experience.roleKey];
  const description = t[experience.descKey];
  const endDate = experience.period.end || t.present;

  return (
    <motion.div variants={item} className="relative flex gap-6">
      {/* Línea vertical */}
      {!isLast && (
        <div
          className="absolute left-[11px] top-[28px] w-[2px] h-[calc(100%+24px)]"
          style={{ backgroundColor: `${experience.accentColor.replace(")", " / 0.2)")}` }}
        />
      )}

      {/* Punto conector */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: experience.accentColor,
            backgroundColor: `${experience.accentColor.replace(")", " / 0.1)")}`,
          }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: experience.accentColor }} />
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="flex-1 pb-10">
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3"
          style={{
            backgroundColor: `${experience.accentColor.replace(")", " / 0.1)")}`,
            color: experience.accentColor,
          }}
        >
          {experience.period.start} - {endDate}
        </div>

        <h3 className="text-lg font-semibold text-foreground">{experience.company}</h3>
        <p className="text-sm font-medium mt-0.5" style={{ color: experience.accentColor }}>
          {role}
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed mt-3">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}