import { getWriteClient } from "../sanity/lib/writeClient";
import type { Project } from "../sanity/lib/types";

type SeedProject = Omit<Project, "_id">;

const seedProjects: SeedProject[] = [
  {
    titleEn: "Meraki Bags",
    titleEs: "Meraki Bags",
    descriptionEn:
      "Luxury handbag e-commerce. Features a dynamic catalog managed via Sanity CMS, WhatsApp integration, and a high-end minimalist aesthetic.",
    descriptionEs:
      "E-commerce de bolsos de lujo. Incluye catálogo dinámico gestionado con Sanity CMS, pedidos por WhatsApp y una estética minimalista premium.",
    icon: "ShoppingBag",
    accentColor: "oklch(0.65 0.12 20)",
    tags: ["Next.js", "Sanity CMS", "Tailwind", "Framer Motion"],
    repoUrl: "https://github.com/To2003/bolsos-website",
    demoUrl: "https://bolsos-website.vercel.app/",
    githubRepo: "To2003/bolsos-website",
    status: "completed",
    featured: false,
    order: 0,
    visible: true,
  },
  {
    titleEn: "Photo Gallery",
    titleEs: "Photo Gallery",
    descriptionEn:
      "Professional photo portfolio with cloud management. Allows the client to upload and organize albums in real-time using Sanity.",
    descriptionEs:
      "Portfolio fotográfico profesional con gestión en la nube. Permite al cliente subir y organizar álbumes en tiempo real mediante Sanity.",
    icon: "ImageIcon",
    accentColor: "oklch(0.6 0.2 250)",
    tags: ["Next.js", "Sanity CMS", "Tailwind", "Photo API"],
    repoUrl: "https://github.com/To2003/photo-gallery-website",
    demoUrl: "https://photo-gallery-website.vercel.app/",
    githubRepo: "To2003/photo-gallery-website",
    status: "completed",
    featured: false,
    order: 1,
    visible: true,
  },
  {
    titleEn: "Flor de Antojitos",
    titleEs: "Flor de Antojitos",
    descriptionEn:
      "E-commerce for a sweet treats business. Features a colorful gallery, direct WhatsApp ordering, and mobile-first design.",
    descriptionEs:
      "E-commerce encantador para un negocio de dulces. Cuenta con galería colorida, integración de WhatsApp y diseño mobile-first.",
    icon: "Cookie",
    accentColor: "oklch(0.7 0.15 290)",
    tags: ["React", "Next.js", "Sanity CMS", "Tailwind"],
    repoUrl: "https://github.com/To2003/flor-deantojitos-website",
    demoUrl: "https://flor-deantojitos-website.vercel.app/",
    githubRepo: "To2003/flor-deantojitos-website",
    status: "completed",
    featured: false,
    order: 2,
    visible: true,
  },
  {
    titleEn: "Smash Bar Website",
    titleEs: "Sitio Web Smash Bar",
    descriptionEn:
      "A modern, responsive website for a local bar featuring a digital menu, location services, and brand identity showcase.",
    descriptionEs:
      "Sitio web moderno y responsivo para un bar local. Incluye menú digital interactivo e integración de mapas. Optimizado para SEO.",
    icon: "UtensilsCrossed",
    accentColor: "oklch(0.7 0.16 50)",
    tags: ["React", "Next.js", "Tailwind CSS"],
    repoUrl: "https://github.com/To2003/smashBar-website",
    demoUrl: "https://smash-bar-website.vercel.app/",
    githubRepo: "To2003/smashBar-website",
    status: "in-development",
    featured: false,
    order: 3,
    visible: true,
  },
  {
    titleEn: "Camellia Bakery",
    titleEs: "Camellia Bakery",
    descriptionEn:
      "A warm and inviting website for a boutique bakery. Features a visual product gallery and brand storytelling.",
    descriptionEs:
      "Un sitio web cálido y acogedor para una pastelería boutique. Cuenta con galería visual de productos e historia de la marca.",
    icon: "Coffee",
    accentColor: "oklch(0.75 0.18 350)",
    tags: ["React", "Next.js", "Tailwind CSS"],
    repoUrl: "https://github.com/To2003/camellia-bakery-website",
    demoUrl: "https://camellia-bakery-website.vercel.app/",
    githubRepo: "To2003/camellia-bakery-website",
    status: "in-development",
    featured: false,
    order: 4,
    visible: true,
  },
];

async function seed() {
  const writeClient = getWriteClient();
  for (const project of seedProjects) {
    const result = await writeClient.create({
      _type: "project",
      ...project,
    });
    console.log(`Creado: ${result._id} — ${project.titleEs}`);
  }
}

seed()
  .then(() => {
    console.log("Seed completo.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error corriendo el seed:", error);
    process.exit(1);
  });
