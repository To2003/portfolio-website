"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "es";

interface Translations {
  // Navigation and UI labels
  role: string;
  tagline: string;
  status_open: string;
  status_closed: string;
  present: string;
  durationLabel: string;
  view_certificate: string;
  
  // Main section tabs
  about: string;
  stack: string;
  projects: string;
  experience: string;
  education: string;

  // Placeholder for unfinished sections
  working_title: string;
  working_desc: string;
  
  // About section
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

  // Technology categories
  languages: string;
  frontend: string;
  backend: string;
  tools: string;
  ai: string;
  
  // --- REAL PROJECTS ---
  project_smash_title: string;
  project_smash_desc: string;
  project_camellia_title: string;
  project_camellia_desc: string;

  // --- EXPERIENCE DATA (CV) ---
  exp_dgsisan_imp_role: string;
  exp_dgsisan_imp_desc: string;
  exp_dgsisan_support_role: string;
  exp_dgsisan_support_desc: string;
  exp_lab_role: string;
  exp_lab_desc: string;
  exp_sanluis_role: string;
  exp_sanluis_desc: string;

  // --- EDUCATION DATA (CV) ---
  edu_uade_title: string;
  edu_uade_desc: string;
  edu_coder_fullstack_title: string;
  edu_coder_fullstack_desc: string;
  edu_coder_web_title: string;
  edu_coder_web_desc: string;
  edu_utn_title: string;
  edu_utn_desc: string;
  edu_hs_title: string;
  edu_hs_desc: string;
}

const translations: Record<Language, Translations> = {
  en: {
    role: "Full Stack Developer",
    tagline: "Bridging the gap between design and engineering.",
    status_open: "Open to Work",
    status_closed: "Not Available",
    present: "Present",
    durationLabel: "Duration",
    view_certificate: "View Certificate",

    about: "About",
    stack: "Stack",
    projects: "Projects",
    experience: "Experience",
    education: "Education",

    working_title: "Work in Progress",
    working_desc: "I'm currently building this section. Check back soon!",
    
    // About Section
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
    
    // --- PROJECTS ---
    project_smash_title: "Smash Bar Website",
    project_smash_desc: "A modern, responsive website for a local bar featuring a digital menu, location services, and brand identity showcase. Built with a focus on performance and SEO.",
    project_camellia_title: "Camellia Bakery",
    project_camellia_desc: "A warm and inviting website for a boutique bakery. Features a visual product gallery, brand storytelling, and an elegant responsive design that reflects the shop's aesthetic.",

    // --- EXPERIENCE ---
    exp_dgsisan_imp_role: "Systems Implementation Analyst",
    exp_dgsisan_imp_desc: "Led the implementation of health information systems across medical centers. Coordinated with staff to ensure smooth adoption of digital tools and provided on-site training.",
    exp_dgsisan_support_role: "Technical Support",
    exp_dgsisan_support_desc: "Provided remote and on-site technical assistance for systems in healthcare centers. Resolved hardware and software issues for medical and administrative staff.",
    exp_lab_role: "Data Entry Specialist",
    exp_lab_desc: "Managed clinical analysis data using specialized software (Labsys, SISA, DTS). Ensured data accuracy and integrity for sensitive patient records.",
    exp_sanluis_role: "Systems Intern",
    exp_sanluis_desc: "Managed the computer lab during extracurricular hours and assisted English teachers with technological needs. Handled audiovisual documentation.",

    // --- EDUCATION ---
    edu_uade_title: "Bachelor in IT Management",
    edu_uade_desc: "Degree focused on strategic management of technology, systems architecture, and business logic implementation.",
    edu_coder_fullstack_title: "Full Stack Programming",
    edu_coder_fullstack_desc: "Intensive program covering React.js, Node.js, Firebase, and Database management. Built complete web applications from scratch.",
    edu_coder_web_title: "Web Development",
    edu_coder_web_desc: "Foundational course on HTML, CSS, SASS, Git, and JavaScript. Focused on responsive design and layout techniques.",
    edu_utn_title: "Robotics & Game Development",
    edu_utn_desc: "Early certifications in Robotics and Video Game Programming that sparked my interest in logic and code.",
    edu_hs_title: "High School Degree",
    edu_hs_desc: "Bachelor in Natural Sciences.",
  },
  es: {
    role: "Desarrollador Full Stack",
    tagline: "Uniendo el diseño con la ingeniería de software.",
    status_open: "Busco Empleo",
    status_closed: "No Disponible",
    present: "Presente",
    durationLabel: "Duración",
    view_certificate: "Ver Certificado",

    about: "Sobre Mí",
    stack: "Tecnologías",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Estudios",

    working_title: "Trabajando en ello",
    working_desc: "Actualmente estoy construyendo esta sección. ¡Vuelve pronto!",

    // About Section
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

    // --- PROJECTS ---
    project_smash_title: "Sitio Web Smash Bar",
    project_smash_desc: "Sitio web moderno y responsivo para un bar local. Incluye menú digital interactivo, integración de mapas y diseño de identidad de marca. Optimizado para SEO y rendimiento.",
    project_camellia_title: "Camellia Bakery",
    project_camellia_desc: "Un sitio web cálido y acogedor para una pastelería boutique. Cuenta con galería visual de productos, historia de la marca y un diseño elegante y responsivo que refleja la estética del local.",

    // --- EXPERIENCE ---
    exp_dgsisan_imp_role: "Analista de Implementación de Sistemas",
    exp_dgsisan_imp_desc: "Lideré la implementación de sistemas de información de salud en centros médicos. Coordiné con el personal para asegurar la adopción de herramientas digitales y brindé capacitación in situ.",
    exp_dgsisan_support_role: "Soporte Técnico",
    exp_dgsisan_support_desc: "Brindé asistencia técnica remota y presencial para sistemas en centros de salud. Resolví problemas de hardware y software para el personal médico y administrativo.",
    exp_lab_role: "Especialista Data Entry",
    exp_lab_desc: "Gestioné datos de análisis clínicos utilizando software especializado (Labsys, SISA, DTS). Aseguré la precisión e integridad de los registros sensibles de pacientes.",
    exp_sanluis_role: "Pasantía en Sistemas",
    exp_sanluis_desc: "Encargado de la sala de computación en horario extracurricular y asistente técnico para profesores de inglés. Manejo de documentación audiovisual.",

    // --- EDUCATION ---
    edu_uade_title: "Licenciatura en Gestión de TI",
    edu_uade_desc: "Carrera enfocada en la gestión estratégica de tecnología, arquitectura de sistemas e implementación de lógica de negocios.",
    edu_coder_fullstack_title: "Programación Full Stack",
    edu_coder_fullstack_desc: "Programa intensivo que cubre React.js, Node.js, Firebase y gestión de bases de datos. Construcción de aplicaciones web completas.",
    edu_coder_web_title: "Desarrollo Web",
    edu_coder_web_desc: "Curso fundamental sobre HTML, CSS, SASS, Git y JavaScript. Enfocado en diseño responsivo y técnicas de maquetación.",
    edu_utn_title: "Certificados en Robótica y Videojuegos",
    edu_utn_desc: "Certificaciones tempranas en Robótica y Programación de Videojuegos que despertaron mi interés en la lógica y el código.",
    edu_hs_title: "Bachiller",
    edu_hs_desc: "Bachiller en Ciencias Naturales.",
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