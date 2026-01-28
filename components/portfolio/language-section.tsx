"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "es";

interface Translations {
  // Sidebar
  role: string;
  tagline: string;
  // Tabs
  about: string;
  stack: string;
  projects: string;
  experience: string;
  education: string;
  // About section
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  aboutP4: string;
  startups: string;
  agencies: string;
  enterprise: string;
  // Stack categories
  languages: string;
  frontend: string;
  backend: string;
  tools: string;
  ai: string;
  // Projects
  projectEcommerce: string;
  projectEcommerceDesc: string;
  projectTask: string;
  projectTaskDesc: string;
  projectAnalytics: string;
  projectAnalyticsDesc: string;
  projectSocial: string;
  projectSocialDesc: string;
  // Experience
  present: string;
  // Education
  durationLabel: string;
}

const translations: Record<Language, Translations> = {
  en: {
    role: "Full Stack Developer",
    tagline: "I build accessible, pixel-perfect digital experiences for the web.",
    about: "About",
    stack: "Stack",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    aboutP1: "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
    aboutP2: "Currently, I specialize in building modern web applications using",
    aboutP3: "In the past, I've had the opportunity to develop software across a variety of settings — from",
    aboutP4: "In my spare time, I'm usually exploring new technologies, contributing to open-source projects, or working on personal side projects that challenge me to learn something new.",
    startups: "startups",
    agencies: "agencies",
    enterprise: "enterprise companies",
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Platforms",
    ai: "AI Tools & Platforms",
    projectEcommerce: "E-Commerce Platform",
    projectEcommerceDesc: "A full-featured e-commerce solution with cart functionality, payment processing, and inventory management.",
    projectTask: "Task Management App",
    projectTaskDesc: "Collaborative task management tool with real-time updates, team workspaces, and progress tracking.",
    projectAnalytics: "Analytics Dashboard",
    projectAnalyticsDesc: "Interactive data visualization dashboard with customizable widgets and export capabilities.",
    projectSocial: "Social Media App",
    projectSocialDesc: "Feature-rich social platform with real-time messaging, content feeds, and user authentication.",
    present: "Present",
    durationLabel: "Duration",
  },
  es: {
    role: "Desarrollador Full Stack",
    tagline: "Creo experiencias digitales accesibles y pixel-perfect para la web.",
    about: "Sobre Mi",
    stack: "Tecnologias",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Estudios",
    aboutP1: "Soy un desarrollador apasionado por crear interfaces de usuario accesibles y pixel-perfect que combinan un diseno cuidadoso con una ingenieria robusta. Mi trabajo favorito esta en la interseccion del diseno y el desarrollo, creando experiencias que no solo se ven geniales sino que estan meticulosamente construidas para el rendimiento y la usabilidad.",
    aboutP2: "Actualmente, me especializo en construir aplicaciones web modernas usando",
    aboutP3: "En el pasado, he tenido la oportunidad de desarrollar software en una variedad de entornos — desde",
    aboutP4: "En mi tiempo libre, generalmente estoy explorando nuevas tecnologias, contribuyendo a proyectos de codigo abierto o trabajando en proyectos personales que me desafian a aprender algo nuevo.",
    startups: "startups",
    agencies: "agencias",
    enterprise: "empresas",
    languages: "Lenguajes",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Herramientas",
    ai: "Herramientas de IA",
    projectEcommerce: "Plataforma E-Commerce",
    projectEcommerceDesc: "Una solucion de comercio electronico completa con funcionalidad de carrito, procesamiento de pagos y gestion de inventario.",
    projectTask: "App de Gestion de Tareas",
    projectTaskDesc: "Herramienta colaborativa de gestion de tareas con actualizaciones en tiempo real, espacios de trabajo en equipo y seguimiento de progreso.",
    projectAnalytics: "Dashboard de Analiticas",
    projectAnalyticsDesc: "Panel de visualizacion de datos interactivo con widgets personalizables y capacidades de exportacion.",
    projectSocial: "App de Redes Sociales",
    projectSocialDesc: "Plataforma social con mensajeria en tiempo real, feeds de contenido y autenticacion de usuarios.",
    present: "Presente",
    durationLabel: "Duracion",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
