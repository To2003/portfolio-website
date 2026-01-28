"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabNavigation } from "./tab-navigation";
import { AboutSection } from "./about-section";
import { StackSection } from "./stack-section";
import { ProjectsSection } from "./projects-section";
import { ExperienceSection } from "./experience-section";
import { EducationSection } from "./education-section";
import { LanguageToggle } from "./language-toggle";

type Tab = "about" | "stack" | "projects" | "experience" | "education";

export function MainContent() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <main className="h-screen flex flex-col">
      {/* Sticky Tab Navigation */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/50 px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between gap-4">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <LanguageToggle />
        </div>
      </div>

      {/* Content Area with Card */}
      <div className="flex-1 p-6 lg:p-8 overflow-hidden">
        {/* Content Card */}
        <div className="h-full bg-[oklch(0.18_0.015_230)] rounded-2xl shadow-lg border border-border/30 overflow-hidden">
          {/* Scrollable inner content */}
          <div className="h-full overflow-y-auto custom-scrollbar p-6 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut",
                }}
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
