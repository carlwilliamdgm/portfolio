import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/sound';

export const Navigation: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('fr-FR', { timeZone: 'Africa/Lome', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) sound.playClick();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08090b]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.8)]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram & Coordinates */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onClick={() => sound.playClick()} 
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded border border-amber-400/40 bg-amber-950/40 flex items-center justify-center font-mono text-xs font-bold text-amber-300 group-hover:border-amber-300 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.5)] transition-all">
                CW
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  DJEGUEMA
                </span>
                <span className="block font-mono text-[10px] text-amber-500/80 tracking-tighter">
                  SYS_ID: TG-44
                </span>
              </div>
            </a>

            <div className="h-4 w-px bg-white/10 hidden md:block" />

            {/* Live Lomé Node Pill */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-amber-500/20 text-[11px] font-mono text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>LOMÉ, TG</span>
              <span className="text-amber-400 font-semibold">{time} GMT</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">06°08′N 01°12′E</span>
            </div>
          </div>

          {/* Navigation Anchors */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs text-zinc-300 bg-[#0e0f14]/80 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {[
              { label: '// 01. VISION', href: '#vision' },
              { label: '// 02. BLUEPRINTS', href: '#blueprints' },
              { label: '// 03. ACCOLADES', href: '#accolades' },
              { label: '// 04. LAB', href: '#terminal' },
              { label: '// 05. MATRIX', href: '#matrix' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playPulse()}
                className="px-3.5 py-1.5 rounded-full hover:text-amber-300 hover:bg-amber-500/10 transition-all font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* System Utilities */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Désactiver les effets audio' : 'Activer les effets audio'}
              className="p-2 rounded-md border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-zinc-400 hover:text-amber-300 transition-colors"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Direct Uplink Button with Copper Glow */}
            <a
              href="#contact"
              onClick={() => sound.playClick()}
              className="relative group overflow-hidden rounded-md p-px font-mono text-xs font-semibold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300 opacity-70 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative block px-4 py-1.5 rounded-[5px] bg-[#07080a] text-amber-200 group-hover:bg-[#12100d] transition-colors">
                UPLINK // CONTACT
              </span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
