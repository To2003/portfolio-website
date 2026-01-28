"use client";

import { Sidebar } from "./sidebar";
import { MainContent } from "./main-content";
import { LanguageProvider } from "./language-context";

export function PortfolioLayout() {
  return (
    <LanguageProvider>
      {/* CAMBIO: 'overflow-hidden' solo en lg (Escritorio). En móvil dejamos que fluya. */}
      <div className="min-h-screen bg-background flex flex-col lg:flex-row relative lg:overflow-hidden">
        {/* Animated Background Glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Primary glow */}
          <div 
            className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, oklch(0.75 0.12 180 / 0.3) 0%, transparent 70%)',
              animation: 'pulse 8s ease-in-out infinite',
            }}
          />
          {/* Secondary glow */}
          <div 
            className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, oklch(0.7 0.15 300 / 0.3) 0%, transparent 70%)',
              animation: 'pulse 10s ease-in-out infinite reverse',
            }}
          />
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(oklch(0.92 0.01 230 / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, oklch(0.92 0.01 230 / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Sticky Sidebar - Left Panel */}
        {/* CAMBIO: Sidebar relativa en móvil, sticky solo en LG */}
        <div className="relative z-10 w-full lg:w-[320px] xl:w-[380px] lg:sticky lg:top-0 lg:h-screen border-b lg:border-b-0 lg:border-r border-border bg-sidebar/80 backdrop-blur-sm shrink-0">
          <Sidebar />
        </div>

        {/* Main Content Area - Right Panel */}
        {/* CAMBIO: Quitamos h-screen en móvil para que crezca con el contenido */}
        <div className="relative z-10 flex-1 lg:h-screen lg:overflow-hidden">
          <MainContent />
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1) translate(0, 0);
              opacity: 0.15;
            }
            50% {
              transform: scale(1.1) translate(20px, -20px);
              opacity: 0.25;
            }
          }
        `}</style>
      </div>
    </LanguageProvider>
  );
}