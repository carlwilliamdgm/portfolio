import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Radio, Play, Pause } from 'lucide-react';
import { sound } from '../utils/sound';

export const PhantomCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const rotationAngleRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      if (isRotating) {
        rotationAngleRef.current += 0.018;
      }
      const angle = rotationAngleRef.current;

      // Draw concentric blueprint radar circles in copper/amber
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.16)';
      ctx.lineWidth = 1;

      [30, 60, 90, 120].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(cx - 130, cy);
      ctx.lineTo(cx + 130, cy);
      ctx.moveTo(cx, cy - 130);
      ctx.lineTo(cx, cy + 130);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)';
      ctx.stroke();

      // Rotating Orbital Controller Nodes (Virtual Joystick abstraction)
      const numNodes = 4;
      for (let i = 0; i < numNodes; i++) {
        const theta = angle + (i * Math.PI * 2) / numNodes;
        const x = cx + Math.cos(theta) * 75;
        const y = cy + Math.sin(theta) * 75;

        // Node Glow in warm amber
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 16);
        grad.addColorStop(0, 'rgba(245, 158, 11, 0.85)');
        grad.addColorStop(0.5, 'rgba(226, 135, 67, 0.4)');
        grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Target connecting vectors
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Center Virtual Hub Core
      ctx.fillStyle = '#0f0e0c';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 24, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('PHANTOM', cx, cy);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isRotating]);

  return (
    <div className="glass-bento rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-amber-500/25 group">
      
      {/* Decorative Blueprint Corner Markings */}
      <div className="absolute top-3 left-4 font-mono text-[10px] text-amber-500/60">
        [SYS_ARCH // 001]
      </div>
      <div className="absolute top-3 right-4 font-mono text-[10px] text-amber-500/60">
        PATENT_PREP: TGC-2026
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-4">
        
        {/* Project Details Column */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              PROJET PHARE // TGC
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-orange-300 bg-orange-500/10 border border-orange-500/20">
              KOTLIN / ANDROID
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
              ACTIF · 10 ISSUES
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl text-white font-bold mb-2 tracking-tight">
            PHANTOM
          </h3>
          <p className="font-mono text-xs text-amber-400 italic mb-4">
            « The controller you don't hold, the power you command »
          </p>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
            Système de Contrôleur Virtuel Ultime & Écosystème Multiplateforme conçu sous l’égide de 
            <strong className="text-white font-medium"> The Great Corporation</strong>. 
            PHANTOM redéfinit la façon dont l'humain interagit avec les machines en créant une couche d'abstraction virtuelle fluide, universelle et accessible.
          </p>

          {/* Technical Specs Bento Pill */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs mb-6">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
              <span className="text-[10px] text-zinc-500 block">LANGAGE</span>
              <span className="text-zinc-200 font-medium">Kotlin 100%</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
              <span className="text-[10px] text-zinc-500 block">ARCHITECTURE</span>
              <span className="text-zinc-200 font-medium">Virtual HAL</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
              <span className="text-[10px] text-zinc-500 block">PROPRIÉTÉ</span>
              <span className="text-amber-300 font-medium">Licence Carl W.</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/The-Great-Corporation/PHANTOM-by-The-Great-Corporation"
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-mono text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)]"
            >
              <span>Accéder au Repo TGC</span>
              <ExternalLink size={14} />
            </a>

            <button
              onClick={() => {
                sound.playClick();
                setIsRotating(!isRotating);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 font-mono text-xs transition-colors"
            >
              {isRotating ? <Pause size={13} /> : <Play size={13} />}
              <span>{isRotating ? 'Geler Gyro' : 'Animer Gyro'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Schematic Radar Canvas in Copper Amber */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-black/50 border border-amber-500/20 relative">
          <div className="w-full flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-2">
            <span className="flex items-center gap-1 text-amber-400">
              <Radio size={12} className="animate-pulse" />
              LIVE TELEMETRY
            </span>
            <span>VECTOR RADAR // HAL</span>
          </div>

          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            className="w-full max-w-[280px] h-auto aspect-square rounded-full border border-amber-500/20 shadow-[inner_0_0_25px_rgba(245,158,11,0.1)] cursor-crosshair"
            title="Schéma technique interactif du contrôleur virtuel PHANTOM"
          />

          <div className="w-full mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>INPUT SAMPLING: 120Hz</span>
            <span className="text-amber-400 font-bold">CALIBRATED</span>
          </div>
        </div>

      </div>

    </div>
  );
};
