"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "es";

interface Translations {
  // Sidebar
  role: string;
  tagline: string;
  status_open: string;
  status_closed: string;
  // Tabs
  about: string;
  stack: string;
  projects: string;
  experience: string;
  education: string;

  // Working on it
  working_title: string;
  working_desc: string;
  
  // New About Section Keys (Reemplazan a los P1, P2, etc.)
  about_intro_1: string;
  about_intro_2: string;
  and: string;
  at: string;
  about_edu_1: string;
  about_edu_2: string;
  self_taught: string;
  about_edu_3: string;
  uade_degree: string;
  about_maker: string;
  about_hobbies_1: string;
  hockey: string;
  dm: string;
  about_hobbies_2: string;

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
    tagline: "Bridging the gap between design and engineering.",
    status_open: "Open to Work",
    status_closed: "Not Available",
    about: "About",
    stack: "Stack",
    projects: "Projects",
    experience: "Experience",
    education: "Education",

    // Working on it
    working_title: "Work in Progress",
    working_desc: "I'm currently building this section. Check back soon!",
    
    // About Section - English
    about_intro_1: "I'm a Developer who loves the intersection of logic and creativity. At 22, I specialize in building modern web applications with",
    about_intro_2: ", always looking for the smartest way to solve a problem—whether it's automating workflows with AI or building a dynamic catalog website.",
    and: " and ",
    at: " at ",
    about_edu_1: "My coding journey began with courses at",
    about_edu_2: ", but I truly honed my skills by being",
    self_taught: "self-taught",
    about_edu_3: "—building web apps and learning from YouTube. Currently, I'm sharpening my programming logic through my degree in",
    uade_degree: "IT Management",
    about_maker: "My approach is hands-on: I learn by building. I'm currently working on a niche dating/networking app for musicians and experimenting with game design.",
    about_hobbies_1: "Beyond the screen, I’m a competitive",
    hockey: "field hockey player",
    dm: "D&D Dungeon Master",
    about_hobbies_2: ". I bring the same strategic thinking and storytelling skills from the game table to my development projects.",

    // Categories
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Platforms",
    ai: "AI Tools & Platforms",
    
    // Projects
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
    tagline: "Uniendo el diseño con la ingeniería de software.",
    status_open: "Busco Empleo",
    status_closed: "No Disponible",
    about: "Sobre Mí",
    stack: "Tecnologías",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Estudios",

    //Working on it
    working_title: "Trabajando en ello",
    working_desc: "Actualmente estoy construyendo esta sección. ¡Vuelve pronto!",

    // About Section - Español
    about_intro_1: "Soy un desarrollador apasionado por la intersección entre lógica y creatividad. A mis 22 años, me especializo en crear aplicaciones web modernas con",
    about_intro_2: ", siempre buscando la forma más inteligente de resolver problemas, ya sea automatizando flujos con IA o creando catálogos web dinámicos.",
    and: " y ",
    at: " en ",
    about_edu_1: "Mi camino en código empezó con cursos en",
    about_edu_2: ", pero realmente pulí mis habilidades siendo",
    self_taught: "autodidacta",
    about_edu_3: "—creando apps y aprendiendo en YouTube. Actualmente, afilo mi lógica de programación con mi carrera de",
    uade_degree: "Gestión de TI",
    about_maker: "Mi enfoque es práctico: aprendo construyendo. Actualmente desarrollo una app de networking para músicos y experimento con diseño de juegos.",
    about_hobbies_1: "Fuera de la pantalla, juego",
    hockey: "hockey sobre césped",
    dm: "Dungeon Master de D&D",
    about_hobbies_2: "a nivel competitivo. Llevo el mismo pensamiento estratégico y narrativo de la mesa de juego a mis proyectos de desarrollo.",

    // Categorias
    languages: "Lenguajes",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Herramientas",
    ai: "Herramientas de IA",

    // Proyectos
    projectEcommerce: "Plataforma E-Commerce",
    projectEcommerceDesc: "Una solución de comercio electrónico completa con funcionalidad de carrito, procesamiento de pagos y gestión de inventario.",
    projectTask: "App de Gestión de Tareas",
    projectTaskDesc: "Herramienta colaborativa de gestión de tareas con actualizaciones en tiempo real, espacios de trabajo en equipo y seguimiento de progreso.",
    projectAnalytics: "Dashboard de Analíticas",
    projectAnalyticsDesc: "Panel de visualización de datos interactivo con widgets personalizables y capacidades de exportación.",
    projectSocial: "App de Redes Sociales",
    projectSocialDesc: "Plataforma social con mensajería en tiempo real, feeds de contenido y autenticación de usuarios.",
    present: "Presente",
    durationLabel: "Duración",
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