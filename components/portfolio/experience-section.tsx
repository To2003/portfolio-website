"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

interface ExperienceItem {
  company: string;
  role: { en: string; es: string };
  period: { start: string; end: string | null };
  description: { en: string; es: string };
  technologies: string[];
  accentColor: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "DGSISAN - Ministerio de Salud (GCBA)",
    role: { en: "Systems Implementation Analyst", es: "Analista de Implementación de Sistemas" },
    period: { start: "2023", end: "2025" },
    description: {
      en: "Led the implementation of health information systems across medical centers. Coordinated with staff to ensure smooth adoption of digital tools and provided on-site training.",
      es: "Lideré la implementación de sistemas de información de salud en centros médicos. Coordiné con el personal para asegurar la adopción de herramientas digitales y brindé capacitación in situ.",
    },
    technologies: ["Health Systems", "Training", "IT Management", "Support"],
    accentColor: "oklch(0.75 0.12 180)", // Teal
  },
  {
    company: "DGSISAN - Ministerio de Salud (GCBA)",
    role: { en: "Technical Support", es: "Soporte Técnico" },
    period: { start: "2023", end: "2023" },
    description: {
      en: "Provided remote and on-site technical assistance for systems in healthcare centers. Resolved hardware and software issues for medical and administrative staff.",
      es: "Brindé asistencia técnica remota y presencial para sistemas en centros de salud. Resolví problemas de hardware y software para el personal médico y administrativo.",
    },
    technologies: ["Hardware", "Software Troubleshooting", "Remote Support"],
    accentColor: "oklch(0.7 0.15 300)", // Purple
  },
  {
    company: "Laboratorio Bioq. Carolina Melffi",
    role: { en: "Data Entry Specialist", es: "Especialista Data Entry" },
    period: { start: "2022", end: "2023" },
    description: {
      en: "Managed clinical analysis data using specialized software (Labsys, SISA, DTS). Ensured data accuracy and integrity for sensitive patient records.",
      es: "Gestioné datos de análisis clínicos utilizando software especializado (Labsys, SISA, DTS). Aseguré la precisión e integridad de los registros sensibles de pacientes.",
    },
    technologies: ["Labsys", "SISA", "DTS", "Data Management"],
    accentColor: "oklch(0.75 0.15 55)", // Orange
  },
  {
    company: "Colegio San Luis",
    role: { en: "Systems Intern", es: "Pasantía en Sistemas" },
    period: { start: "2021", end: "2021" },
    description: {
      en: "Managed the computer lab during extracurricular hours and assisted English teachers with technological needs. Handled audiovisual documentation.",
      es: "Encargado de la sala de computación en horario extracurricular y asistente técnico para profesores de inglés. Manejo de documentación audiovisual.",
    },
    technologies: ["IT Support", "Education Technology", "Audiovisual"],
    accentColor: "oklch(0.85 0.15 90)", // Yellow
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

function TimelineItem({ experience, isLast }: { experience: ExperienceItem; isLast: boolean }) {
  const { language, t } = useLanguage();
  const role = experience.role[language];
  const description = experience.description[language];
  const endDate = experience.period.end || t.present;

  return (
    <motion.div variants={item} className="relative flex gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-[11px] top-[28px] w-[2px] h-[calc(100%+24px)]"
          style={{ backgroundColor: `${experience.accentColor.replace(")", " / 0.2)")}` }}
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
            borderColor: experience.accentColor,
            backgroundColor: `${experience.accentColor.replace(")", " / 0.1)")}`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: experience.accentColor }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        {/* Period badge */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3"
          style={{
            backgroundColor: `${experience.accentColor.replace(")", " / 0.1)")}`,
            color: experience.accentColor,
          }}
        >
          {experience.period.start} - {endDate}
        </div>

        {/* Company and Role */}
        <h3 className="text-lg font-semibold text-foreground">{experience.company}</h3>
        <p className="text-sm font-medium mt-0.5" style={{ color: experience.accentColor }}>
          {role}
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mt-3">{description}</p>

        {/* Technologies */}
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

export function ExperienceSection() {
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
        />
      ))}
    </motion.div>
  );
}