import React from 'react';
import { ArrowUpRight, Award, GitBranch, Sparkles, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';

export const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Copper & Amber Radial Highlights */}
      <div className="copper-glow w-[550px] h-[550px] bg-gradient-to-tr from-amber-600/25 via-orange-600/15 to-transparent -top-20 -left-20"></div>
      <div className="copper-glow w-[600px] h-[600px] bg-gradient-to-br from-amber-500/20 via-yellow-600/10 to-transparent top-1/3 -right-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Blueprint Header Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 font-mono text-xs mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <Sparkles size={13} className="text-amber-400 animate-pulse" />
          <span>BLUEPRINT ARCHITECTURE // VERSION 2.6</span>
          <span className="text-white/20">|</span>
          <span className="text-zinc-400">IAI-TOGO L2 & FOUNDER @ TGC</span>
        </div>

        {/* Main Grid: Manifesto & Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Big Display Title & Manifesto (8 cols) */}
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.08] mb-6">
              L'architecture de systèmes numériques{' '}
              <span className="text-chrome block sm:inline">
                centrés sur l'humain.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8 max-w-2xl">
              Moi, c'est <strong className="text-white font-medium">Carl-William (Bonèh Komlan) DJEGUEMA</strong>. 
              Étudiant en Génie Logiciel à l’<span className="text-amber-300 font-mono text-sm underline decoration-amber-500/40 underline-offset-4">IAI-TOGO</span>, 
              initiateur de <strong className="text-white font-medium">The Great Corporation</strong>, 
              et 3<sup>e</sup> prix national au <strong className="text-amber-400 font-medium">MIABE Hackathon 2026</strong>. 
              Je conçois la technologie non comme un simple outil, mais comme un écosystème de sens, d'accessibilité et de souveraineté.
            </p>

            {/* Quick Action Matrix */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#blueprints"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playPulse()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-display font-bold text-sm hover:brightness-110 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Explorer les Blueprints</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#terminal"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playPulse()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/[0.12] bg-white/[0.03] hover:bg-amber-500/10 hover:border-amber-400/40 text-zinc-200 font-mono text-xs transition-all"
              >
                <Terminal size={15} className="text-amber-400" />
                <span>Ouvrir la Console TGC</span>
              </a>

              <a
                href="https://github.com/carlwilliamdgm"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-4 py-3 text-zinc-400 hover:text-white font-mono text-xs transition-colors"
              >
                <GitBranch size={15} />
                <span>GitHub @carlwilliamdgm</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tactical HUD / Spec Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="glass-bento rounded-2xl p-6 relative corner-crosshair">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.07] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></div>
                  <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider">
                    SPEC // IDENTITÉ
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase">NODE: TG-44</span>
              </div>

              {/* Identity Details */}
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Nom Complet</span>
                  <span className="text-white font-bold text-sm">Carl-William DJEGUEMA</span>
                  <span className="text-amber-400/80 text-[11px] block">(Bonèh Komlan)</span>
                </div>

                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Cursus Académique</span>
                  <span className="text-zinc-200">Institut Africain d'Informatique</span>
                  <span className="text-amber-300 text-[11px] block">IAI-TOGO · Montée en L2</span>
                </div>

                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Initiative Majeure</span>
                  <span className="text-white font-medium">The Great Corporation (TGC)</span>
                  <p className="text-[11px] text-zinc-400 font-sans mt-0.5">
                    Fondateur, architecture système & lead du Great Bootcamp.
                  </p>
                </div>

                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Distinction Nationale</span>
                  <div className="flex items-center gap-2 mt-1 p-2 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    <Award size={16} className="text-amber-400 shrink-0" />
                    <span className="text-[11px] font-semibold">
                      3<sup>e</sup> National MIABE Hackathon 2026 (TG-44)
                    </span>
                  </div>
                </div>
              </div>

              {/* Live telemetry footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>STATUS: HIREABLE // OPEN</span>
                <span className="text-amber-400 font-bold">LOMÉ, TOGO 🇹🇬</span>
              </div>

            </div>
          </div>

        </div>

        {/* Blueprint HUD Numbers Ribbon */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { metric: '3e', label: 'Podium National', detail: 'MIABE Hackathon 2026 (Team Lead TG-44)', highlight: 'text-amber-400' },
            { metric: '20+', label: 'Dépôts & Projets', detail: 'Écosystème TGC & Bootcamp', highlight: 'text-orange-400' },
            { metric: 'L2', label: 'Génie Logiciel', detail: 'Institut Africain d\'Informatique (IAI-TOGO)', highlight: 'text-amber-300' },
            { metric: '100%', label: 'Human-Centered', detail: 'Accessibilité, UI/UX & Systèmes', highlight: 'text-yellow-400' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="glass-bento p-4 rounded-xl border border-white/[0.06] hover:border-amber-500/40 transition-all hover:scale-[1.02]"
            >
              <div className={`font-mono text-2xl sm:text-3xl font-bold ${item.highlight} mb-1`}>
                {item.metric}
              </div>
              <div className="font-display text-xs sm:text-sm font-semibold text-white">
                {item.label}
              </div>
              <div className="text-[11px] text-zinc-400 font-sans mt-0.5 line-clamp-1">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
