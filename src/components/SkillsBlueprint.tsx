import React from 'react';
import { Cpu, Palette, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: { name: string; level: string; tag: string }[];
}

export const SkillsBlueprint: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Langages de Programmation',
      subtitle: 'Polyvalence technique & paradigmes multiples',
      icon: <Terminal className="text-amber-400" size={18} />,
      skills: [
        { name: 'Python', level: 'Écosystème dominant, automatisation & backend', tag: 'Core' },
        { name: 'Kotlin', level: 'Développement Android & projet PHANTOM', tag: 'Mobile' },
        { name: 'JavaScript / Web', level: 'Full-stack & ledger CoopLedger', tag: 'Web' },
        { name: 'Java', level: 'Programmation Orientée Objet (POO)', tag: 'Academic' },
        { name: 'C#', level: 'Architecture logicielle & structures', tag: 'Systems' },
        { name: 'PowerShell', level: 'Scripting d\'installation & OS tooling', tag: 'Tooling' }
      ]
    },
    {
      title: 'Ingénierie Logicielle & Systèmes',
      subtitle: 'Structures de données, logique & architecture',
      icon: <Cpu className="text-orange-400" size={18} />,
      skills: [
        { name: 'Logic Programming', level: 'Raisonnement formel & règles', tag: 'Theory' },
        { name: 'Data Structures', level: 'Optimisation algorithmique', tag: 'Core' },
        { name: 'Database Design', level: 'Modélisation relationnelle & SQL', tag: 'Data' },
        { name: 'Resolving Issues', level: 'Débogage méthodique & résilience', tag: 'Practice' },
        { name: 'Device Development', level: 'Interaction matériel & contrôleurs', tag: 'Hardware' },
        { name: 'WAMP & Environnements', level: 'Déploiement serveur & stack locale', tag: 'Infra' }
      ]
    },
    {
      title: 'Design Humain & Création',
      subtitle: 'Conception d\'écosystèmes accessibles & médias',
      icon: <Palette className="text-amber-300" size={18} />,
      skills: [
        { name: 'Conception axée utilisateur', level: 'Ergonomie, parcours & accessibilité', tag: 'UX' },
        { name: 'Conception visuelle', level: 'Identité graphique & direction d\'art', tag: 'UI' },
        { name: 'Montage Vidéo', level: 'Communication visuelle & storytelling', tag: 'Media' },
        { name: 'Presenting Proposals', level: 'Défense de projets & pitch hackathon', tag: 'Leadership' },
        { name: 'Sauvegarde & Récupération', level: 'Intégrité des données & continuité', tag: 'Security' },
        { name: 'Conseil en informatique', level: 'Orientation stratégique & tech coaching', tag: 'Advisory' }
      ]
    }
  ];

  return (
    <section id="matrix" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              COMPETENCIES // BLUEPRINT MATRIX
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
              Arsenal Technique & Vision Systémique
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md font-light">
            Une combinaison rigoureuse entre la profondeur du génie logiciel académique (IAI-TOGO) et la création d'expériences humaines remarquables.
          </p>
        </div>

        {/* Matrix Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass-bento rounded-2xl p-6 relative corner-crosshair flex flex-col justify-between hover:border-amber-500/40 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.07]">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] font-sans text-zinc-400">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      onMouseEnter={() => sound.playPulse()}
                      className="p-3 rounded-xl bg-black/40 border border-white/[0.04] hover:border-amber-500/30 hover:bg-black/60 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-semibold text-zinc-200 group-hover:text-amber-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-amber-400 border border-amber-500/20">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-[11px] font-sans text-zinc-400 font-light leading-snug">
                        {skill.level}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>VERIFIED VIA IAI-TOGO & TGC</span>
                <span className="text-amber-400 font-semibold">STATUS: ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
