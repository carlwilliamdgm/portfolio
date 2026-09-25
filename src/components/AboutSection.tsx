import React from 'react';
import { Award, BookOpen, Compass, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2">
              02 // VISION & PARCOURS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight mb-6">
              Une démarche ancrée dans la rigueur et le sens.
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6">
              Je refuse la technologie superficielle. Pour moi, le logiciel n’est pas qu’une suite de lignes de code ou un outil passager : c’est un écosystème d’accessibilité, d’indépendance et de dignité.
            </p>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-zinc-300 italic">
              « Questionner ce qu'on nous a appris, bâtir avec ses propres mains et créer des architectures qui durent. »
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={18} className="text-zinc-300" />
                <h3 className="font-sans font-medium text-base text-white">
                  Formation Académique en Génie Logiciel
                </h3>
              </div>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                Étudiant à l’<strong className="text-zinc-200">Institut Africain d'Informatique (IAI-TOGO)</strong> à Lomé, en montée en 2<sup>e</sup> année (L2). Ma formation combine théorie rigoureuse (programmation orientée objet, logique formelle, structures de données, bases de données relationnelles) et projets appliqués.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Award size={18} className="text-amber-400" />
                <h3 className="font-sans font-medium text-base text-white">
                  Distinction Nationale — MIABE Hackathon 2026
                </h3>
              </div>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                Capitaine de l’équipe <span className="font-mono text-zinc-200">TG-44</span>, récompensé par la <strong className="text-amber-300 font-medium">3<sup>e</sup> place nationale</strong> pour le développement de <strong className="text-zinc-200">CoopLedger</strong>. Une reconnaissance concrète de ma capacité à concevoir, prototyper et défendre une solution technique face à un jury d’experts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Compass size={18} className="text-zinc-300" />
                <h3 className="font-sans font-medium text-base text-white">
                  The Great Corporation & Entraide Communautaire
                </h3>
              </div>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                Convaincu que l’Afrique doit concevoir ses propres technologies, j’ai fondé <strong className="text-zinc-200">The Great Corporation</strong> et initié son Bootcamp pour transmettre mes acquis et stimuler l’émergence de projets concrets chez mes pairs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
