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

  // Projects Section Titles
  completed_projects: string;
  in_development: string;

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
  project_meraki_title: string;
  project_meraki_desc: string;
  project_gallery_title: string;
  project_gallery_desc: string;
  project_smash_title: string;
  project_smash_desc: string;
  project_camellia_title: string;
  project_camellia_desc: string;
  project_flor_title: string;
  project_flor_desc: string;

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

    completed_projects: "Completed Projects",
    in_development: "Work in Progress",

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
    project_meraki_title: "Meraki Bags",
    project_meraki_desc: "Luxury handbag e-commerce. Features a dynamic catalog managed via Sanity CMS, WhatsApp integration, and a high-end minimalist aesthetic.",
    project_gallery_title: "Photo Gallery",
    project_gallery_desc: "Professional photo portfolio with cloud management. Allows the client to upload and organize albums in real-time using Sanity.",
    project_smash_title: "Smash Bar Website",
    project_smash_desc: "A modern, responsive website for a local bar featuring a digital menu, location services, and brand identity showcase.",
    project_camellia_title: "Camellia Bakery",
    project_camellia_desc: "A warm and inviting website for a boutique bakery. Features a visual product gallery and brand storytelling.",
    project_flor_title: "Flor de Antojitos",
    project_flor_desc: "E-commerce for a sweet treats business. Features a colorful gallery, direct WhatsApp ordering, and mobile-first design.",

    // --- EXPERIENCE ---
    exp_dgsisan_imp_role: "Systems Implementation Analyst",
    exp_dgsisan_imp_desc: "Led the implementation of health information systems across medical centers. Coordinated with staff to ensure smooth adoption of digital tools.",
    exp_dgsisan_support_role: "Technical Support",
    exp_dgsisan_support_desc: "Provided remote and on-site technical assistance for systems in healthcare centers.",
    exp_lab_role: "Data Entry Specialist",
    exp_lab_desc: "Managed clinical analysis data using specialized software. Ensured data accuracy and integrity for sensitive patient records.",
    exp_sanluis_role: "Systems Intern",
    exp_sanluis_desc: "Managed the computer lab and assisted teachers with technological needs.",

    // --- EDUCATION ---
    edu_uade_title: "Bachelor in IT Management",
    edu_uade_desc: "Degree focused on strategic management of technology and systems architecture.",
    edu_coder_fullstack_title: "Full Stack Programming",
    edu_coder_fullstack_desc: "Intensive program covering React.js, Node.js, and Database management.",
    edu_coder_web_title: "Web Development",
    edu_coder_web_desc: "Foundational course on HTML, CSS, SASS, Git, and JavaScript.",
    edu_utn_title: "Robotics & Game Development",
    edu_utn_desc: "Early certifications that sparked my interest in logic and code.",
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

    completed_projects: "Proyectos Completados",
    in_development: "En Desarrollo",

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
    project_meraki_title: "Meraki Bags",
    project_meraki_desc: "E-commerce de bolsos de lujo. Incluye catálogo dinámico gestionado con Sanity CMS, pedidos por WhatsApp y una estética minimalista premium.",
    project_gallery_title: "Photo Gallery",
    project_gallery_desc: "Portfolio fotográfico profesional con gestión en la nube. Permite al cliente subir y organizar álbumes en tiempo real mediante Sanity.",
    project_smash_title: "Sitio Web Smash Bar",
    project_smash_desc: "Sitio web moderno y responsivo para un bar local. Incluye menú digital interactivo e integración de mapas. Optimizado para SEO.",
    project_camellia_title: "Camellia Bakery",
    project_camellia_desc: "Un sitio web cálido y acogedor para una pastelería boutique. Cuenta con galería visual de productos e historia de la marca.",
    project_flor_title: "Flor de Antojitos",
    project_flor_desc: "E-commerce encantador para un negocio de dulces. Cuenta con galería colorida, integración de WhatsApp y diseño mobile-first.",
    
    // --- EXPERIENCE ---
    exp_dgsisan_imp_role: "Analista de Implementación de Sistemas",
    exp_dgsisan_imp_desc: "Lideré la implementación de sistemas de salud en centros médicos. Coordiné la adopción de herramientas digitales con el personal.",
    exp_dgsisan_support_role: "Soporte Técnico",
    exp_dgsisan_support_desc: "Brindé asistencia técnica remota y presencial para sistemas en centros de salud.",
    exp_lab_role: "Especialista Data Entry",
    exp_lab_desc: "Gestioné datos de análisis clínicos asegurando la precisión e integridad de los registros de pacientes.",
    exp_sanluis_role: "Pasantía en Sistemas",
    exp_sanluis_desc: "Encargado de la sala de computación y asistente técnico para profesores.",

    // --- EDUCATION ---
    edu_uade_title: "Licenciatura en Gestión de TI",
    edu_uade_desc: "Carrera enfocada en la gestión estratégica de tecnología y arquitectura de sistemas.",
    edu_coder_fullstack_title: "Programación Full Stack",
    edu_coder_fullstack_desc: "Programa intensivo sobre React.js, Node.js y gestión de bases de datos.",
    edu_coder_web_title: "Desarrollo Web",
    edu_coder_web_desc: "Curso sobre HTML, CSS, SASS, Git y JavaScript. Enfocado en diseño responsivo.",
    edu_utn_title: "Robótica y Videojuegos",
    edu_utn_desc: "Certificaciones tempranas que despertaron mi interés en la lógica y el código.",
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