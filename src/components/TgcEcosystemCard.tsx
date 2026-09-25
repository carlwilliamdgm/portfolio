import React from 'react';
import { Building2, Users, Code2, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';

export const TgcEcosystemCard: React.FC = () => {
  return (
    <div className="glass-bento rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-amber-500/25">
      
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              ORGANISATION & INITIATIVE
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-orange-300 bg-orange-500/10 border border-orange-500/20">
              FONDÉE EN MAI 2026
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl text-white font-bold">
            The Great Corporation (TGC)
          </h3>
          <p className="font-mono text-xs text-amber-400/90 mt-1">
            Incubateur de Systèmes Numériques Futuristes & Souveraineté Technologique
          </p>
        </div>

        <a
          href="https://github.com/The-Great-Corporation"
          target="_blank"
          rel="noreferrer"
          onClick={() => sound.playClick()}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-amber-500/30 bg-amber-950/20 hover:bg-amber-500/20 text-white font-mono text-xs transition-colors shrink-0"
        >
          <span>Organisation GitHub</span>
          <ArrowUpRight size={14} className="text-amber-400" />
        </a>
      </div>

      <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
        <strong className="text-white font-medium">The Great Corporation</strong> est une initiative de long terme créée par Carl-William, 
        dédiée à la recherche, à la conception conceptuelle, à l’architecture des systèmes et à la préparation de la propriété intellectuelle. 
        Pour catalyser les talents locaux au Togo, TGC a notamment initié <strong className="text-amber-300 font-medium">The Great Bootcamp</strong>, 
        encadrant le développement d'une vingtaine de solutions logicielles pratiques.
      </p>

      {/* Grid of TGC Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] hover:border-amber-500/30 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
            <Building2 size={16} />
          </div>
          <h4 className="font-display text-sm font-bold text-white mb-1">Architecture Systémique</h4>
          <p className="text-xs text-zinc-400 font-sans leading-normal">
            Préparation conceptuelle de systèmes cross-platform et d'infrastructures résilientes.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] hover:border-amber-500/30 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-3">
            <Users size={16} />
          </div>
          <h4 className="font-display text-sm font-bold text-white mb-1">The Great Bootcamp</h4>
          <p className="text-xs text-zinc-400 font-sans leading-normal">
            Formation intensive et encadrement technique de jeunes développeurs sur des cas concrets.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] hover:border-amber-500/30 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-3">
            <Code2 size={16} />
          </div>
          <h4 className="font-display text-sm font-bold text-white mb-1">Outillage Système</h4>
          <p className="text-xs text-zinc-400 font-sans leading-normal">
            Automatisation d'environnements (scripts PowerShell / Bash sous licence MIT).
          </p>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          20+ Dépôts publics gérés au sein de l'organisation
        </span>
        <span className="text-zinc-500 hidden sm:inline">Lomé, Togo</span>
      </div>

    </div>
  );
};
