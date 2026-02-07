# 🎯 Portfolio Website | Personal Developer Portfolio

<!-- 4. **Limpieza Final:** -->
![Project Preview](/public/images/screenshot.png)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white&style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?logo=framermotion&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

🚀 **[Live Demo →](https://portfolio-website-to2003s-projects.vercel.app//)** | 📚 [Documentation](./docs) | 🐛 [Report Bug](https://github.com/To2003/portfolio-website/issues)

> 🇺🇸 **English** | [🇪🇸 Español](#-spanish)

---

## 📋 About the Project

**Portfolio Website** is a modern, fully-responsive personal portfolio platform built to showcase professional work, skills, and experience. This project demonstrates **advanced React patterns**, **server-side rendering**, and **professional web standards** with a focus on **animation excellence** and **multilingual support**.

Developed as a portfolio masterpiece to demonstrate expertise in:
- ✅ Advanced React patterns (Context API, custom hooks, performance optimization)
- ✅ Server-Side Rendering (SSR) with Next.js 14 App Router
- ✅ Professional animations with Framer Motion
- ✅ Type-safe development with TypeScript
- ✅ Responsive UI/UX design with Tailwind CSS
- ✅ Internationalization (i18n) - English/Spanish bilingual support
- ✅ Modern web accessibility standards (WCAG)

---

## 🎯 Why I Built This (Motivation)

This project was developed as a **portfolio showcase** to demonstrate **professional-grade development skills** and is designed to impress potential employers. It showcases:

### 💼 Technical Expertise
- Mastery of **modern React ecosystem** (hooks, Context, composition)
- **Advanced animations** with Framer Motion (stagger effects, scroll triggers)
- **Internationalization (i18n)** implementation with React Context
- **Server-Side Rendering (SSR)** for SEO optimization
- **Type safety** throughout the entire application with TypeScript
- **Responsive design** with mobile-first approach

### 🎓 Learning Outcomes
- Building reusable animation systems and patterns
- Complex state management without Redux (Context API)
- Creating accessible, semantic HTML structures
- Performance optimization techniques (code splitting, lazy loading)
- Professional portfolio design and UX patterns

### 🚀 Career Ready
This project demonstrates that I'm ready to:
- Lead front-end development initiatives
- Mentor junior developers on modern React patterns
- Build complex, interactive user interfaces
- Optimize web applications for performance and accessibility
- Work with design teams to implement pixel-perfect designs

---

## ✨ Key Features

- 🌍 **Multilingual Support** - English/Spanish with dynamic language switching
- 🎨 **Smooth Animations** - Framer Motion with stagger effects and scroll triggers
- 📱 **Fully Responsive** - Mobile-optimized design with adaptive layouts
- ✨ **Modern Design System** - Consistent colors, typography, and spacing
- 🎯 **Project Showcase** - Beautiful presentation of completed projects with live links
- 📊 **Skills Display** - Categorized tech stack with proficiency indicators
- 🎓 **Education Timeline** - Interactive timeline of certifications and degrees
- 💼 **Experience Section** - Professional background and achievements
- 🌙 **Dark/Light Mode** - Theme switching with Next.js Themes
- ♿ **Accessible** - WCAG compliance with semantic HTML and ARIA labels
- 📈 **Performance** - Optimized with SSR, code splitting, and lazy loading
- 🔍 **SEO Optimized** - Dynamic metadata, Open Graph tags, structured data

---

## 🚀 Tech Stack

### Frontend Framework & Language
- **Next.js 14** - React framework with App Router, SSR, and edge functions
- **React 19** - Latest React with hooks and concurrent features
- **TypeScript 5** - Type-safe JavaScript for production-grade applications

### Animation & Interactivity
- **Framer Motion 12** - Advanced animations with physics-based motion
- **React Context** - Centralized state management for language/theme

### Styling & UI
- **Tailwind CSS 3** - Utility-first CSS framework with custom configuration
- **Shadcn/ui Components** - Accessible component library built on Radix UI
- **Lucide React** - Modern icon library with 600+ icons
- **Next.js Themes** - Dark/Light mode implementation

### Internationalization & Accessibility
- **React Context API** - Custom i18n solution for EN/ES
- **Semantic HTML** - WCAG accessibility compliance
- **ARIA Labels** - Screen reader support

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript Strict Mode** - Maximum type safety
- **PostCSS & Autoprefixer** - Advanced CSS processing
- **pnpm** - Fast, disk space efficient package manager

### Deployment
- **Vercel** - Optimized hosting for Next.js with analytics
- **Vercel Analytics** - Performance and user behavior tracking

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or higher
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/To2003/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 📂 Project Structure

```
portfolio-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
│
├── components/                   # Reusable React components
│   ├── portfolio/                # Portfolio-specific components
│   │   ├── about-section.tsx    # Introduction with keywords
│   │   ├── stack-section.tsx    # Technologies showcase
│   │   ├── projects-section.tsx # Project gallery
│   │   ├── education-section.tsx # Timeline of education
│   │   ├── experience-section.tsx # Professional background
│   │   ├── sidebar.tsx          # Social links and theme
│   │   ├── language-context.tsx # i18n provider
│   │   └── language-toggle.tsx  # Language switcher
│   │
│   ├── theme-provider.tsx       # Dark/Light mode provider
│   │
│   └── ui/                      # Shadcn/ui components (40+ primitives)
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       ├── dialog.tsx
│       └── ... (reusable components)
│
├── constants/                    # Centralized configuration
│   ├── animations.ts            # Framer Motion presets
│   ├── colors.ts                # OKLCH color palette
│   └── tailwind.ts              # Reusable Tailwind utilities
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Mobile breakpoint detection
│   └── use-toast.ts             # Toast notification system
│
├── lib/                          # Utilities
│   └── utils.ts                 # Helper functions
│
├── public/                       # Static assets
│   ├── icon.png                 # Favicon
│   └── certificates/            # Education images
│
├── styles/                       # Global stylesheets
│   └── globals.css              # CSS variables
│
├── package.json                  # Dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.mjs              # Next.js configuration
└── README.md                     # This file
```

---

## 💡 Architecture Highlights

### Component Composition
- **Atomic Design**: Small, composable components that build complex UIs
- **Single Responsibility**: Each component has one clear purpose
- **Props-Driven Configuration**: Highly flexible and reusable

### Animation Architecture
```typescript
// Centralized animation constants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Applied in components
<motion.div variants={containerVariants}>
  {/* Staggered children animation */}
## Contact

**Tomás Aguilar** — Full-Stack Developer  
</motion.div>
```

### Internationalization (i18n)
```typescript
// Language Context for dynamic content switching
const { language, setLanguage, t } = useLanguage();

// Content updates reactively without re-render
<h1>{t('hero.title')}</h1>
```

---

## 🎯 Key Code Examples

### Framer Motion Animations
```typescript
// Stagger animation for list items
const itemVariants = {
**Node.js** 18.17 or higher  
**npm**, **yarn**, or **pnpm** package manager  

  visible: { opacity: 1, y: 0 }
};

<motion.ul variants={containerVariants}>
  {items.map(item => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### Language Switching
```typescript
// Context-based i18n implementation
const { language, setLanguage, t } = useLanguage();

<button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
  {language === 'en' ? '🇪🇸 Español' : '🇺🇸 English'}
</button>
```

### Responsive Hooks
```typescript
// Mobile detection
const isMobile = useIsMobile();

{isMobile && <MobileNavigation />}
{!isMobile && <DesktopNavigation />}

---

## 🔄 Development Workflow

### Available Scripts
```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Code Quality
- TypeScript strict mode enabled
- ESLint for consistent code
- Prettier formatting configured
- Component-driven development

---

## 📊 Performance Metrics

### Lighthouse Targets
- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 95+
- **SEO**: 100

### Optimizations Applied
- ✅ Server-Side Rendering (SSR)
- ✅ Static Generation (SSG) where applicable
- ✅ Image optimization with Next.js Image
- ✅ Code splitting by route
- ✅ CSS purging with Tailwind
- ✅ Hardware-accelerated animations (Framer Motion)
- ✅ Preloading critical resources

---

## 🚀 Deployment

This project is optimized for deployment on **Vercel** (the creators of Next.js).

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on every push with preview URLs

[Deploy Now →](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

## 📝 Future Enhancements

- [ ] Add blog section with MDX support
- [ ] Implement contact form with email backend
- [ ] Add project filtering and search
- [ ] Create case studies for major projects
- [ ] Add testimonials section
- [ ] Implement newsletter subscription
- [ ] Add performance monitoring
- [ ] Create admin dashboard for content updates
- [ ] Add AI-powered chatbot

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 About the Developer

**Tomás Aguilar** | Full-Stack Developer  
📧 Email: [tomasaguilar.code@gmail.com](mailto:tomasaguilar.code@gmail.com)  
🔗 LinkedIn: [Perfil](https://www.linkedin.com/in/tomás-aguilar-8b3603262)  
🐙 GitHub: [@To2003](https://github.com/To2003)  
🌐 Portfolio: [portfolio-website-to2003s-projects.vercel.app](https://portfolio-website-to2003s-projects.vercel.app/)

---

## 🎖️ Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com)
- [Vercel](https://vercel.com)

---

<br />

<div align="center">

**[⬆ Back to top](#-portfolio-website--personal-developer-portfolio)**

</div>

---

<a id="spanish"></a>

# 🎯 Sitio Web Portafolio | Portafolio Personal de Desarrollador

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white&style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?logo=framermotion&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=flat-square)

🚀 **[Demo en Vivo →](https://portfolio-website-to2003s-projects.vercel.app//)** | 📚 [Documentación](./docs) | 🐛 [Reportar Error](https://github.com/To2003/portfolio-website/issues)

> [🇺🇸 English](#-portfolio-website--personal-developer-portfolio) | 🇪🇸 **Español**

---

## 📋 Sobre el Proyecto

**Sitio Web Portafolio** es una plataforma moderna y completamente responsiva diseñada para mostrar trabajo profesional, habilidades y experiencia. Este proyecto demuestra **patrones avanzados de React**, **renderización del lado del servidor** y **estándares web profesionales** con enfoque en **excelencia de animaciones** y **soporte multilingüe**.

Desarrollado como obra maestra del portafolio para demostrar experiencia en:
- ✅ Patrones avanzados de React (Context API, custom hooks, optimización)
- ✅ Renderización del lado del servidor (SSR) con Next.js 14 App Router
- ✅ Animaciones profesionales con Framer Motion
- ✅ Desarrollo type-safe con TypeScript
- ✅ Diseño UI/UX responsivo con Tailwind CSS
- ✅ Internacionalización (i18n) - Soporte bilingüe Inglés/Español
- ✅ Estándares modernos de accesibilidad web (WCAG)

---

## 🎯 Motivación (Mi Objetivo)

Este proyecto fue desarrollado como **vitrina de portafolio** para demostrar **habilidades de desarrollo de nivel profesional** y está diseñado para impresionar a potenciales empleadores. Demuestra:

### 💼 Competencia Técnica
- Dominio del **ecosistema moderno de React** (hooks, Context, composición)
- **Animaciones avanzadas** con Framer Motion (efectos de escalonamiento)
- Implementación de **internacionalización (i18n)** con React Context
- **Renderización del lado del servidor (SSR)** para optimización SEO
- **Seguridad de tipos** en toda la aplicación con TypeScript
- **Diseño responsivo** con enfoque mobile-first

### 🎓 Logros de Aprendizaje
- Construcción de sistemas de animaciones reutilizables
- Gestión compleja de estado sin Redux (Context API)
- Creación de estructuras HTML accesibles y semánticas
- Técnicas de optimización de rendimiento
- Patrones profesionales de diseño de portafolio

### 🚀 Listo para Trabajar
Este proyecto demuestra que estoy capacitado para:
- Liderar iniciativas de desarrollo front-end
- Mentorar desarrolladores en patrones modernos de React
- Construir interfaces de usuario complejas e interactivas
- Optimizar aplicaciones web para rendimiento y accesibilidad
- Trabajar con equipos de diseño en implementaciones pixel-perfect

---

## ✨ Funcionalidades Clave

- 🌍 **Soporte Multilingüe** - Inglés/Español con cambio dinámico de idioma
- 🎨 **Animaciones Suaves** - Framer Motion con efectos de escalonamiento
- 📱 **Totalmente Responsivo** - Diseño optimizado para móviles
- ✨ **Sistema de Diseño Moderno** - Colores, tipografía y espaciado consistentes
- 🎯 **Galería de Proyectos** - Presentación hermosa de proyectos completados
- 📊 **Exhibición de Habilidades** - Stack de tecnología categorizado
- 🎓 **Línea de Tiempo Educativa** - Timeline interactivo de certificaciones
- 💼 **Sección de Experiencia** - Antecedentes profesionales y logros
- 🌙 **Modo Oscuro/Claro** - Cambio de tema con Next.js Themes
- ♿ **Accesible** - Cumplimiento WCAG con HTML semántico
- 📈 **Optimizado** - SSR, code splitting, lazy loading
- 🔍 **SEO Optimizado** - Metadatos dinámicos, Open Graph tags

---

## 🚀 Stack Tecnológico

### Framework y Lenguaje
- **Next.js 14** - Framework React con App Router, SSR y funciones edge
- **React 19** - Última versión de React con hooks y características concurrentes
- **TypeScript 5** - JavaScript type-safe para aplicaciones de producción

### Animación e Interactividad
- **Framer Motion 12** - Animaciones avanzadas con movimiento basado en física
- **React Context** - Gestión centralizada de estado para idioma/tema

### Estilos y UI
- **Tailwind CSS 3** - Framework CSS utility-first con configuración personalizada
- **Componentes Shadcn/ui** - Librería accesible basada en Radix UI
- **Lucide React** - Librería moderna de iconos con 600+ iconos
- **Next.js Themes** - Implementación de modo oscuro/claro

### Internacionalización y Accesibilidad
- **React Context API** - Solución personalizada de i18n para EN/ES
- **HTML Semántico** - Cumplimiento de accesibilidad WCAG
- **Etiquetas ARIA** - Soporte para lectores de pantalla

### Herramientas de Desarrollo
- **ESLint** - Calidad y consistencia de código
- **TypeScript Strict Mode** - Seguridad de tipos máxima
- **PostCSS & Autoprefixer** - Procesamiento avanzado de CSS
- **pnpm** - Gestor de paquetes rápido y eficiente

### Despliegue
- **Vercel** - Hosting optimizado para Next.js con analytics
- **Vercel Analytics** - Rastreo de rendimiento y comportamiento

---

## 🚀 Instalación y Uso

### Requisitos Previos
- **Node.js** 18.17 o superior
- **npm**, **yarn**, o **pnpm** como gestor de paquetes

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/To2003/portfolio-website.git
   cd portfolio-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

4. **Construir para producción**
   ```bash
   npm run build
   npm start
   ```

---

## 📂 Estructura del Proyecto

```
portfolio-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout raíz con metadatos
│   ├── page.tsx                 # Página de inicio
│   └── globals.css              # Estilos globales
│
├── components/                   # Componentes React reutilizables
│   ├── portfolio/                # Componentes específicos del portafolio
│   │   ├── about-section.tsx    # Introducción con palabras clave
│   │   ├── stack-section.tsx    # Exhibición de tecnologías
│   │   ├── projects-section.tsx # Galería de proyectos
│   │   ├── education-section.tsx # Timeline de educación
│   │   ├── experience-section.tsx # Antecedentes profesionales
│   │   ├── sidebar.tsx          # Enlaces sociales y tema
│   │   ├── language-context.tsx # Proveedor de i18n
│   │   └── language-toggle.tsx  # Cambio de idioma
│   │
│   ├── theme-provider.tsx       # Proveedor de modo oscuro/claro
│   │
│   └── ui/                      # Componentes Shadcn/ui (40+ primitivos)
│       ├── button.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       ├── dialog.tsx
│       └── ... (componentes reutilizables)
│
├── constants/                    # Configuración centralizada
│   ├── animations.ts            # Presets de Framer Motion
│   ├── colors.ts                # Paleta de colores OKLCH
│   └── tailwind.ts              # Utilidades Tailwind reutilizables
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Detección de breakpoint mobile
│   └── use-toast.ts             # Sistema de notificaciones
│
├── lib/                          # Utilidades
│   └── utils.ts                 # Funciones auxiliares
│
├── public/                       # Activos estáticos
│   ├── icon.png                 # Favicon
│   └── certificates/            # Imágenes de educación
│
├── styles/                       # Hojas de estilo globales
│   └── globals.css              # Variables CSS
│
├── package.json                  # Dependencias
├── tsconfig.json                # Configuración TypeScript
├── tailwind.config.ts           # Configuración Tailwind CSS
├── next.config.mjs              # Configuración Next.js
└── README.md                     # Este archivo
```

---

## 💡 Aspectos Destacados de la Arquitectura

### Composición de Componentes
- **Diseño Atómico**: Componentes pequeños y componibles que construyen UIs complejas
- **Responsabilidad Única**: Cada componente tiene un propósito claro
- **Configuración basada en Props**: Altamente flexible y reutilizable

### Arquitectura de Animaciones
```typescript
// Constantes de animación centralizadas
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Aplicado en componentes
<motion.div variants={containerVariants}>
  {/* Animación de hijos escalonados */}
</motion.div>
```

### Internacionalización (i18n)
```typescript
// Language Context para cambio dinámico de contenido
const { language, setLanguage, t } = useLanguage();

// El contenido se actualiza reactivamente
<h1>{t('hero.title')}</h1>
```

---

## 🎯 Ejemplos de Código Clave

### Animaciones con Framer Motion
```typescript
// Animación de escalonamiento para elementos de lista
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

<motion.ul variants={containerVariants}>
  {items.map(item => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### Cambio de Idioma
```typescript
// Implementación i18n basada en Context
const { language, setLanguage, t } = useLanguage();

<button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>
  {language === 'en' ? '🇪🇸 Español' : '🇺🇸 English'}
</button>
```

### Hooks Responsivos
```typescript
// Detección de móvil
const isMobile = useIsMobile();

{isMobile && <MobileNavigation />}
{!isMobile && <DesktopNavigation />}
```

---

## 🔄 Flujo de Desarrollo

### Scripts Disponibles
```bash
# Desarrollo con hot reload
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Lint de código
npm run lint
```

### Calidad de Código
- TypeScript en modo estricto habilitado
- ESLint para consistencia de código
- Formateo Prettier configurado
- Desarrollo orientado a componentes

---

## 📊 Métricas de Rendimiento

### Objetivos Lighthouse
- **Rendimiento**: 95+
- **Accesibilidad**: 98+
- **Mejores Prácticas**: 95+
- **SEO**: 100

### Optimizaciones Aplicadas
- ✅ Renderización del lado del servidor (SSR)
- ✅ Generación estática (SSG) donde aplique
- ✅ Optimización de imágenes con Next.js Image
- ✅ Code splitting por ruta
- ✅ Purga de CSS con Tailwind
- ✅ Animaciones aceleradas por hardware (Framer Motion)
- ✅ Precarga de recursos críticos

---

## 🚀 Despliegue

Este proyecto está optimizado para desplegar en **Vercel** (creadores de Next.js).

### Desplegar en Vercel
1. Push del código a GitHub
2. Conectar repositorio a Vercel
3. Auto-deploy en cada push con URLs de preview

[Desplegar Ahora →](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

## 📝 Mejoras Futuras

- [ ] Agregar sección de blog con soporte MDX
- [ ] Implementar formulario de contacto con backend
- [ ] Agregar filtrado y búsqueda de proyectos
- [ ] Crear estudios de caso para proyectos mayores
- [ ] Agregar sección de testimonios
- [ ] Implementar suscripción a newsletter
- [ ] Agregar monitoreo de rendimiento
- [ ] Crear dashboard de administración
- [ ] Agregar chatbot impulsado por IA

---

## 🤝 Contribuciones

Este es un proyecto personal de portafolio, ¡pero sugerencias y feedback son bienvenidos!

1. Fork del repositorio
2. Crear rama de feature (`git checkout -b feature/amazing-feature`)
3. Commit de cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT** - ver el archivo [LICENSE](./LICENSE) para detalles.

---

## 👨‍💻 Sobre el Desarrollador

**Tomás Aguilar** | Desarrollador Full-Stack  
📧 Email: [tomasaguilar.code@gmail.com](mailto:tomasaguilar.code@gmail.com)  
🔗 LinkedIn: [Perfil](https://www.linkedin.com/in/tomás-aguilar-8b3603262)  
🐙 GitHub: [@To2003](https://github.com/To2003)  
🌐 Portafolio: [portfolio-website-to2003s-projects.vercel.app](https://portfolio-website-to2003s-projects.vercel.app/)

---

## 🎖️ Agradecimientos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com)
- [Vercel](https://vercel.com)

---

<br />

<div align="center">

**[⬆ Volver al inicio](#-sitio-web-portafolio--portafolio-personal-de-desarrollador)**

</div>

---

<div align="center">

### Desarrollado con ❤️ por [Tomás Aguilar](https://github.com/To2003)

🌐 [Portafolio](https://portfolio-website-to2003s-projects.vercel.app/) • 📧 [Email](mailto:tomasaguilar.code@gmail.com) • 🔗 [LinkedIn](https://www.linkedin.com/in/tomás-aguilar-8b3603262) • 🐙 [GitHub](https://github.com/To2003)

</div>
