import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PhantomCard } from './components/PhantomCard';
import { CoopLedgerCard } from './components/CoopLedgerCard';
import { TgcEcosystemCard } from './components/TgcEcosystemCard';
import { TerminalConsole } from './components/TerminalConsole';
import { SkillsBlueprint } from './components/SkillsBlueprint';
import { ContactSection } from './components/ContactSection';
import { KineticBackground } from './components/KineticBackground';
import { ArrowUp, Terminal } from 'lucide-react';
import { sound } from './utils/sound';

export const App: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -500, y: -500 });
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-zinc-100 relative bg-blueprint-grid selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Fluid Kinetic Energy Waves Background Canvas */}
      <KineticBackground />

      {/* Dynamic Mouse Spotlight in Warm Amber */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.04), transparent 80%)`,
        }}
      />

      {/* Global Navigation */}
      <Navigation />

      {/* Main Content Flow */}
      <main className="relative z-10">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Section: Architectural Blueprints & Bento Showcase */}
        <section id="blueprints" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Tag */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  SYSTEM BLUEPRINTS // CORE INITIATIVES
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
                  Projets Phares & Réalisations
                </h2>
              </div>
              <p className="font-sans text-sm text-zinc-400 max-w-md font-light">
                Une sélection de mes créations propriétaires et distinctions majeures, de l’écosystème TGC aux compétitions nationales.
              </p>
            </div>

            {/* Bento Stack */}
            <div className="space-y-8">
              
              {/* Flagship 1: PHANTOM */}
              <PhantomCard />

              {/* Flagship 2: CoopLedger (Hackathon Podium) */}
              <div id="accolades">
                <CoopLedgerCard />
              </div>

              {/* Flagship 3: The Great Corporation & Bootcamp Ecosystem */}
              <TgcEcosystemCard />

            </div>

          </div>
        </section>

        {/* 3. Section: Interactive TGC Terminal Console */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="font-mono text-xs text-amber-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} className="text-amber-400" />
                <span>INTERACTIVE REPL // TGC LAB CONSOLE</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">
                CLIENT TERMINAL · PROTOCOL: BASH/TGC
              </span>
            </div>

            <TerminalConsole />
          </div>
        </section>

        {/* 4. Section: Skills Blueprint Matrix */}
        <SkillsBlueprint />

        {/* 5. Section: Contact & Transmission Uplink */}
        <ContactSection />

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-10 bg-[#07080a] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Carl-William (Bonèh Komlan) DJEGUEMA · Lomé, Togo</span>
          </div>
          <div>
            Conçu & Développé avec excellence pour <span className="text-amber-300">The Great Corporation</span>
          </div>
          <div className="text-zinc-500">
            © {new Date().getFullYear()} TGC // All Rights Reserved
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Retour en haut"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#12100d] border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-zinc-950 transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)]"
        >
          <ArrowUp size={16} />
        </button>
      )}

    </div>
  );
};
