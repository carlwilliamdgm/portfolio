import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

export const CoopLedgerCard: React.FC = () => {
  // Simulated ledger transactions
  const transactions = [
    { id: 'TX-8910', coop: 'Coop Agri-Maritime', amount: '+ 450,000 XOF', status: 'VERIFIED', hash: '0x8f...21a' },
    { id: 'TX-8911', coop: 'Tontine Solidarité L2', amount: '+ 180,000 XOF', status: 'VERIFIED', hash: '0x3c...99b' },
    { id: 'TX-8912', coop: 'Fonds Artisans Lomé', amount: '- 95,000 XOF', status: 'AUDITED', hash: '0x4a...e12' }
  ];

  return (
    <div className="glass-bento rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-amber-500/30">
      
      {/* Blueprint Corner Tag */}
      <div className="absolute top-3 right-4 font-mono text-[10px] text-amber-500/80">
        HACKATHON LAUREATE // MIABE 2026
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
        
        <div>
          {/* Badge & Team Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-flex items-center gap-1">
              <Award size={12} className="text-amber-400" />
              3e PLACE NATIONALE // PODIUM
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-orange-300 bg-orange-500/10 border border-orange-500/20">
              TEAM LEAD // TG-44
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300 bg-white/[0.05]">
              FINTECH & COOPÉRATIVES
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl text-white font-bold">
            CoopLedger
          </h3>
          <p className="font-mono text-xs text-amber-400/90 mt-1">
            Grand Livre Comptable Numérique & Transparent pour Coopératives Africaines
          </p>
        </div>

        {/* Honor Insignia Medal with Amber Sheen */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-amber-500/15 to-transparent border border-amber-500/40 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
          <div className="w-12 h-12 rounded-full border-2 border-amber-400 bg-amber-950/60 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            <span className="font-display font-extrabold text-lg">3e</span>
          </div>
          <div className="font-mono text-xs">
            <span className="block text-amber-300 font-bold tracking-wider">MIABE HACKATHON</span>
            <span className="text-[10px] text-zinc-400">Édition Nationale 2026</span>
          </div>
        </div>

      </div>

      <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
        Développé lors du prestigieux <strong className="text-white font-medium">MIABE Hackathon 2026</strong> sous la direction de Carl-William (Capitaine de l'équipe <span className="font-mono text-amber-300">TG-44</span>). 
        <strong className="text-white font-medium"> CoopLedger</strong> résout le problème critique de traçabilité, de transparence et d'accès aux micro-crédits pour les coopératives agricoles et d'épargne communautaires (tontines).
      </p>

      {/* Simulated Live Ledger Proof */}
      <div className="rounded-xl bg-black/50 border border-white/[0.07] p-4 mb-6">
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pb-2 mb-3 border-b border-white/[0.06]">
          <span className="flex items-center gap-1.5 text-amber-300 font-bold">
            <ShieldCheck size={14} className="text-amber-400" />
            REGISTRE IMMUTABLE DE COOPÉRATIVE
          </span>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
            <CheckCircle2 size={12} />
            CONSENSUS VALIDE
          </span>
        </div>

        <div className="space-y-2 font-mono text-xs">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/[0.03] hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">{tx.id}</span>
                <span className="text-zinc-200">{tx.coop}</span>
              </div>
              <div className="flex items-center gap-3 mt-1 sm:mt-0">
                <span className={`font-semibold ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-zinc-400'}`}>
                  {tx.amount}
                </span>
                <span className="text-[10px] text-zinc-400 px-1.5 py-0.5 rounded bg-black/40 border border-white/5">
                  {tx.hash}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
        <a
          href="https://github.com/carlwilliamdgm/CoopLedger"
          target="_blank"
          rel="noreferrer"
          onClick={() => sound.playClick()}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <span>Examiner CoopLedger sur GitHub</span>
          <ExternalLink size={14} />
        </a>

        <div className="text-zinc-400 text-xs font-sans italic sm:ml-auto">
          Tech : JavaScript · Full-Stack · Systèmes Comptables Décentralisés
        </div>
      </div>

    </div>
  );
};
