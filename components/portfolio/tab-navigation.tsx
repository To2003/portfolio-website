"use client";

import { motion } from "framer-motion";
import { User, Layers, FolderKanban, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "./language-context";

type Tab = "about" | "stack" | "projects" | "experience" | "education";

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; labelKey: "about" | "stack" | "projects" | "experience" | "education"; icon: typeof User }[] = [
  { id: "about", labelKey: "about", icon: User },
  { id: "stack", labelKey: "stack", icon: Layers },
  { id: "projects", labelKey: "projects", icon: FolderKanban },
  { id: "experience", labelKey: "experience", icon: Briefcase },
  { id: "education", labelKey: "education", icon: GraduationCap },
];

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const { t } = useLanguage();
  
  return (
    <nav className="flex gap-1 p-1.5 bg-secondary/50 backdrop-blur-sm rounded-xl w-fit border border-border/50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        const label = t[tab.labelKey];
        
        return (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            whileHover={{ scale: isActive ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-2 ${
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-lg shadow-lg"
                style={{
                  boxShadow: '0 0 20px oklch(0.75 0.12 180 / 0.3)',
                }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
            <Icon className="relative z-10 w-4 h-4" />
            <span className="relative z-10">{label}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}
