import React from 'react';

export const StackSection: React.FC = () => {
  const categories = [
    {
      domain: 'Langages de Programmation',
      description: 'Polyvalence multi-paradigme et développement système',
      items: [
        { name: 'Python', role: 'Langage dominant, scripting, algorithmique & backend' },
        { name: 'Kotlin', role: 'Développement Android & projet PHANTOM' },
        { name: 'JavaScript', role: 'Full-stack web & projet CoopLedger' },
        { name: 'Java', role: 'Programmation Orientée Objet (POO académique)' },
        { name: 'C#', role: 'Architecture logicielle & concepts avancés' },
        { name: 'PowerShell', role: 'Automatisation d’environnements & tooling Windows' }
      ]
    },
    {
      domain: 'Ingénierie Logicielle & Données',
      description: 'Méthodologie formelle et modélisation',
      items: [
        { name: 'Structures de Données', role: 'Optimisation de complexité et algorithmique' },
        { name: 'Logic Programming', role: 'Raisonnement formel et logique appliquée' },
        { name: 'Database Design', role: 'Modélisation relationnelle & SQL' },
        { name: 'Résolution de Problèmes', role: 'Débogage méthodique et architecture résiliente' },
        { name: 'Device Development', role: 'Abstraction de périphériques et contrôleurs' },
        { name: 'WAMP & Environnements', role: 'Configuration serveur et déploiement local' }
      ]
    },
    {
      domain: 'Design Centré Humain & Médias',
      description: 'Ergonomie, communication et transmission',
      items: [
        { name: 'Conception axée utilisateur', role: 'Parcours intuitifs, clarté et accessibilité' },
        { name: 'Conception visuelle', role: 'Identités graphiques épurées et direction d’art' },
        { name: 'Montage Vidéo', role: 'Production multimédia et narration visuelle' },
        { name: 'Défense de Propositions', role: 'Pitch technique et présentation devant jurys' },
        { name: 'Sauvegarde & Récupération', role: 'Sécurisation et intégrité des systèmes' },
        { name: 'Conseil en Informatique', role: 'Accompagnement méthodologique et diagnostic' }
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2">
              03 // ARSENAL TECHNIQUE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
              Compétences & Domaines d'Expertise
            </h2>
          </div>
          <p className="font-sans text-sm text-zinc-400 max-w-md font-light">
            Une synthèse claire de mes capacités techniques, forgées à l’IAI-TOGO et mises en pratique dans des projets réels.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.domain}
              className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-semibold text-lg text-white mb-1">
                  {cat.domain}
                </h3>
                <p className="font-sans text-xs text-zinc-500 mb-6 font-light">
                  {cat.description}
                </p>

                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="border-b border-white/[0.04] pb-3 last:border-b-0">
                      <span className="font-mono text-xs font-semibold text-zinc-200 block mb-0.5">
                        {item.name}
                      </span>
                      <span className="font-sans text-xs text-zinc-400 font-light leading-relaxed block">
                        {item.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
                Compétences vérifiées
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
