"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabNavigation } from "./tab-navigation";
import { AboutSection } from "./about-section";
import { StackSection } from "./stack-section";
import { ProjectsSection } from "./projects-section";
import { ExperienceSection } from "./experience-section";
import { EducationSection } from "./education-section";
// Nota: Ya no importamos LanguageToggle aquí

type Tab = "about" | "stack" | "projects" | "experience" | "education";

export function MainContent() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <main className="flex flex-col lg:h-full w-full">
      {/* HEADER DE NAVEGACIÓN */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/50 px-4 md:px-8 lg:px-12 py-4 lg:py-6">
        {/* Usamos w-full y overflow para que en pantallas muy chicas se pueda scrollear horizontalmente los botones */}
        <div className="w-full overflow-x-auto pb-1 -mb-1 scrollbar-none flex justify-start lg:justify-center">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* ÁREA DE CONTENIDO PRINCIPAL */}
      <div className="flex-1 p-4 lg:p-8 lg:overflow-hidden">
        <div className="lg:h-full bg-[oklch(0.18_0.015_230)] rounded-2xl shadow-lg border border-border/30 overflow-hidden flex flex-col">
          <div className="flex-1 p-4 lg:p-8 lg:overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {activeTab === "about" && <AboutSection />}
                {activeTab === "stack" && <StackSection />}
                {activeTab === "projects" && <ProjectsSection />}
                {activeTab === "experience" && <ExperienceSection />}
                {activeTab === "education" && <EducationSection />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}