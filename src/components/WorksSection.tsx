import React from 'react';
import { ArrowUpRight, Award, GitBranch, Layers, ShieldCheck, Terminal, Users } from 'lucide-react';

interface Project {
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  description: string;
  highlights: string[];
  tech: string[];
  link: string;
  linkText: string;
  badge?: string;
}

export const WorksSection: React.FC = () => {
  const projects: Project[] = [
    {
      number: '01',
      title: 'PHANTOM',
      tagline: '« The controller you don’t hold, the power you command »',
      category: 'Système Mobile & Abstraction Matérielle',
      year: '2026',
      description:
        'Système de contrôleur virtuel multiplateforme et écosystème d’interaction développé au sein de The Great Corporation. PHANTOM explore de nouveaux modes de commande et d’abstraction sans manette physique, en s’appuyant sur une architecture Kotlin optimisée pour la réactivité en temps réel.',
      highlights: [
        'Projet propriétaire sous licence exclusive de Carl-William',
        'Couche d\'abstraction matérielle (Virtual HAL) en Kotlin',
        'Développement actif avec suivi continu des issues techniques'
      ],
      tech: ['Kotlin', 'Android', 'Multiplatform', 'System Architecture'],
      link: 'https://github.com/The-Great-Corporation/PHANTOM-by-The-Great-Corporation',
      linkText: 'Consulter le dépôt GitHub'
    },
    {
      number: '02',
      title: 'CoopLedger',
      tagline: 'Grand livre comptable décentralisé & transparent pour coopératives',
      category: 'FinTech & Gouvernance Communautaire',
      year: '2026',
      badge: '3e National — MIABE Hackathon 2026',
      description:
        'Conçu et défendu lors de la phase finale du MIABE Hackathon national 2026 à la tête de l’équipe TG-44. CoopLedger offre aux coopératives agricoles et aux tontines d\'Afrique de l\'Ouest un système de tenue de registre infalsifiable, clair et vérifiable par chaque membre sans intermédiaire opaque.',
      highlights: [
        '3e Prix National du MIABE Hackathon 2026 (Capitaine TG-44)',
        'Résolution du déficit de traçabilité dans l\'épargne communautaire',
        'Architecture JavaScript full-stack orientée intégrité financière'
      ],
      tech: ['JavaScript', 'Full-Stack', 'Ledger Design', 'Financial Tech'],
      link: 'https://github.com/carlwilliamdgm/CoopLedger',
      linkText: 'Consulter CoopLedger sur GitHub'
    },
    {
      number: '03',
      title: 'The Great Corporation & Bootcamp',
      tagline: 'Initiative technologique & incubation de développeurs au Togo',
      category: 'Organisation & Mentorat',
      year: '2026',
      description:
        'Fondée en mai 2026 à Lomé par Carl-William, The Great Corporation est une initiative à long terme pour la conception de systèmes numériques centrés sur l’humain. À travers "The Great Bootcamp", TGC a encadré et impulsé plus de 20 projets applicatifs concrets (ERP, IA, outils système) développés par des étudiants togolais.',
      highlights: [
        'Organisation mère de projets comme PHANTOM et du Great Bootcamp',
        'Plus de 20 dépôts applicatifs initiés et structurés sur GitHub',
        'Préparation conceptuelle et propriété intellectuelle pour une tech souveraine'
      ],
      tech: ['Python', 'PowerShell (MIT)', 'Mentorat', 'Open Source'],
      link: 'https://github.com/The-Great-Corporation',
      linkText: 'Explorer l’organisation TGC'
    }
  ];

  return (
    <section id="work" className="py-24 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2">
              01 // PROJETS MAJEURS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
              Travaux Sélectionnés
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md font-light">
            Une sélection rigoureuse de mes créations logicielles, de mon projet d’ingénierie mobile aux initiatives communautaires primées.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article 
              key={project.title}
              className="editorial-card rounded-2xl p-8 sm:p-10 relative overflow-hidden group"
            >
              {/* Top Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06] text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-500 font-bold">{project.number}</span>
                  <span className="text-zinc-400">/</span>
                  <span className="text-zinc-300">{project.category}</span>
                </div>

                <div className="flex items-center gap-3">
                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 flex items-center gap-1 font-sans text-xs font-medium">
                      <Award size={12} className="text-amber-400" />
                      {project.badge}
                    </span>
                  )}
                  <span className="text-zinc-500">{project.year}</span>
                </div>
              </div>

              {/* Main Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 7 cols: Title & Narrative */}
                <div className="lg:col-span-7">
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-400 italic mb-6">
                    {project.tagline}
                  </p>
                  
                  <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-8 font-sans text-xs text-zinc-400 font-light">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-medium text-white hover:text-zinc-300 border-b border-zinc-500 pb-0.5 transition-colors"
                  >
                    <span>{project.linkText}</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Right 5 cols: Architecture Card / Spec Box */}
                <div className="lg:col-span-5 rounded-xl bg-black/40 border border-white/[0.06] p-6 space-y-4">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Stack & Paramètres Techniques
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 font-mono text-xs border border-white/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.05] space-y-2 text-xs font-mono text-zinc-400">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Auteur / Rôle :</span>
                      <span className="text-zinc-200">Carl-William DJEGUEMA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Statut :</span>
                      <span className="text-emerald-400">Dépôt Public</span>
                    </div>
                  </div>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
