import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, RefreshCw } from 'lucide-react';
import { sound } from '../utils/sound';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalConsole: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'sys_init --node=TG-44',
      output: (
        <div className="text-zinc-400 space-y-1">
          <p className="text-amber-400 font-bold">TGC SECURE TERMINAL // V2.6 ONLINE</p>
          <p>Bienvenue sur la console interactive de Carl-William DJEGUEMA.</p>
          <p className="text-xs text-zinc-500">
            Tapez <span className="text-amber-300 font-bold">help</span> pour afficher la liste des commandes système.
          </p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    sound.playClick();

    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-amber-300 font-semibold mb-1">COMMANDES DISPONIBLES :</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">whoami</span> — Identité, formation & vision</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">skills</span> — Matrice des compétences & technologies</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">phantom</span> — Spécifications du projet PHANTOM</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">hackathon</span> — Détails de la 3e place MIABE Hackathon (TG-44)</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">tgc</span> — The Great Corporation & The Great Bootcamp</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">contact</span> — Coordonnées directes et réseaux</p>
            <p><span className="text-amber-400 w-28 inline-block font-bold">clear</span> — Réinitialiser le terminal</p>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="text-xs space-y-1">
            <p className="text-white font-bold">Carl-William (Bonèh Komlan) DJEGUEMA</p>
            <p className="text-zinc-400">Étudiant en Génie Logiciel à l'IAI-TOGO (Montée en L2)</p>
            <p className="text-zinc-400">Fondateur & Architecte Système @ The Great Corporation</p>
            <p className="text-amber-300 mt-1 italic">
              « Exploring the frontier between code, design, and human-centered systems. »
            </p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs space-y-1.5">
            <p className="text-amber-300 font-semibold">CORE COMPETENCIES :</p>
            <p><span className="text-zinc-400">Langages :</span> Python, Kotlin, JavaScript, Java, C#, PowerShell</p>
            <p><span className="text-zinc-400">Systèmes & Concepts :</span> Logic Programming, Data Structures, Database Design, System Configuration</p>
            <p><span className="text-zinc-400">Design & Médias :</span> Conception axée utilisateur, Conception visuelle, Montage vidéo</p>
          </div>
        );
        break;

      case 'phantom':
        response = (
          <div className="text-xs space-y-1">
            <p className="text-amber-400 font-bold">PROJET PHANTOM (The Great Corporation)</p>
            <p className="text-zinc-300">« The controller you don't hold, the power you command »</p>
            <p className="text-zinc-400">Système de Contrôleur Virtuel Ultime & Écosystème Multiplateforme écrit en Kotlin.</p>
            <p className="text-emerald-400">Statut : Dépôt actif sous licence propriétaire.</p>
          </div>
        );
        break;

      case 'hackathon':
        response = (
          <div className="text-xs space-y-1">
            <p className="text-amber-400 font-bold">MIABE HACKATHON 2026 // 3e PRIX NATIONAL</p>
            <p className="text-zinc-300">Projet : <span className="text-white font-medium">CoopLedger</span></p>
            <p className="text-zinc-400">Rôle : Capitaine & Team Lead de l'équipe <span className="text-amber-400 font-mono">TG-44</span></p>
            <p className="text-zinc-400">Domaine : Registre comptable numérique et transparent pour les coopératives agricoles et communautaires au Togo.</p>
          </div>
        );
        break;

      case 'tgc':
        response = (
          <div className="text-xs space-y-1">
            <p className="text-orange-400 font-bold">THE GREAT CORPORATION (TGC)</p>
            <p className="text-zinc-300">Initiative lancée en mai 2026 à Lomé, Togo.</p>
            <p className="text-zinc-400">Vision : Architecture de systèmes durables, formation des talents via The Great Bootcamp (20+ projets encadrés).</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs space-y-1.5">
            <p className="text-amber-300 font-semibold">CANAUX DE TRANSMISSION :</p>
            <p className="text-zinc-300">
              <span className="text-emerald-400 font-mono">Tél / WhatsApp :</span>{' '}
              <a href="tel:+22890631580" className="text-white hover:text-emerald-300 underline">+228 90 63 15 80</a>
            </p>
            <p className="text-zinc-300">
              <span className="text-amber-400 font-mono">Email Principal :</span>{' '}
              <a href="mailto:charlesdjeguema@gmail.com" className="text-white hover:text-amber-300 underline">charlesdjeguema@gmail.com</a>
            </p>
            <p className="text-zinc-300">
              <span className="text-orange-400 font-mono">Email Secondaire :</span>{' '}
              <a href="mailto:carlwilliamdgm@gmail.com" className="text-white hover:text-orange-300 underline">carlwilliamdgm@gmail.com</a>
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400 font-mono">LinkedIn :</span>{' '}
              <a href="https://www.linkedin.com/in/carl-william-djeguema-6132a1380" target="_blank" rel="noreferrer" className="text-amber-400 underline">carl-william-djeguema</a>
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400 font-mono">GitHub :</span>{' '}
              <a href="https://github.com/carlwilliamdgm" target="_blank" rel="noreferrer" className="text-amber-400 underline">github.com/carlwilliamdgm</a>
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo':
        response = (
          <p className="text-xs text-amber-300">
            [ACCESS GRANTED] Vous n'avez pas besoin de privilèges root ici : vous êtes chez vous !
          </p>
        );
        break;

      case '':
        response = null;
        break;

      default:
        response = (
          <p className="text-xs text-rose-400">
            Commande inconnue: "{trimmed}". Tapez <span className="text-white underline font-bold">help</span> pour voir la liste.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <div id="terminal" className="glass-bento rounded-2xl overflow-hidden border border-amber-500/25 shadow-2xl">
      
      {/* Terminal Titlebar */}
      <div className="px-4 py-3 bg-black/60 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="font-mono text-xs text-zinc-400 ml-2 flex items-center gap-1.5">
            <Terminal size={13} className="text-amber-400" />
            tgc-shell // bash-session: lome-tg-44
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setHistory([]);
              sound.playClick();
            }}
            title="Effacer le terminal"
            className="p-1 rounded text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <RefreshCw size={13} />
          </button>
          <span className="font-mono text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
            INTERACTIF
          </span>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-6 font-mono text-xs max-h-[380px] overflow-y-auto space-y-4 bg-black/40">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400">carl@thegreatcorp:~$</span>
              <span className="text-white font-medium">{item.command}</span>
            </div>
            {item.output && <div className="pl-4 border-l border-white/[0.06]">{item.output}</div>}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input Prompt Form */}
      <form onSubmit={onSubmit} className="p-3 bg-black/60 border-t border-white/[0.06] flex items-center gap-2">
        <span className="text-amber-400 font-mono text-xs font-semibold pl-2">carl@thegreatcorp:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tapez 'help', 'phantom', 'hackathon'..."
          className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder-zinc-600"
        />
        <button
          type="submit"
          className="p-1.5 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-colors"
        >
          <CornerDownLeft size={14} />
        </button>
      </form>

    </div>
  );
};
