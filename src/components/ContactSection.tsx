import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, Globe, ArrowRight, Phone } from 'lucide-react';
import { sound } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('Opportunité / Collaboration');
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [senderMessage, setSenderMessage] = useState<string>('');
  const [sentSuccess, setSentSuccess] = useState<boolean>(false);

  const primaryEmail = 'charlesdjeguema@gmail.com';
  const secondaryEmail = 'carlwilliamdgm@gmail.com';
  const phone = '+228 90 63 15 80';

  const copyText = (text: string, type: 'email' | 'phone') => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    
    // Construct mailto link with encoded parameters
    const subject = encodeURIComponent(`[Portfolio Contact] ${selectedSubject} - ${senderName}`);
    const body = encodeURIComponent(
      `Bonjour Carl-William,\n\n${senderMessage}\n\nDe: ${senderName} (${senderEmail})`
    );
    window.location.href = `mailto:${primaryEmail}?cc=${secondaryEmail}&subject=${subject}&body=${body}`;
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background copper aura */}
      <div className="copper-glow w-[500px] h-[500px] bg-gradient-to-t from-amber-600/20 via-orange-600/10 to-transparent bottom-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 font-mono text-xs mb-4">
            <Globe size={13} className="text-amber-400" />
            <span>COMMUNICATION UPLINK // LOMÉ NODE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-bold mb-4">
            Bâtissons le futur ensemble.
          </h2>
          <p className="font-sans text-base text-zinc-300 font-light leading-relaxed">
            Ouvert aux collaborations de recherche, aux opportunités techniques exigeantes et aux projets à fort impact en Afrique et à l’international.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Coordinates Card */}
            <div className="glass-bento p-6 rounded-2xl relative corner-crosshair">
              <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest block mb-2 font-bold">
                COORDONNÉES DIRECTES
              </span>
              <h3 className="font-display text-2xl text-white font-bold mb-3">
                Carl-William DJEGUEMA
              </h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                Lomé Commune, Région Maritime, Togo 🇹🇬<br />
                Institut Africain d'Informatique (IAI-TOGO) · Montée en L2<br />
                Fondateur & Lead chez The Great Corporation
              </p>

              {/* Direct Phone Action */}
              <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between mb-3 hover:border-amber-500/30 transition-colors">
                <a 
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 overflow-hidden group/phone"
                  title="Appeler directement"
                >
                  <Phone size={16} className="text-emerald-400 shrink-0 group-hover/phone:animate-bounce" />
                  <span className="font-mono text-xs text-zinc-200 group-hover/phone:text-emerald-300 transition-colors">
                    {phone}
                  </span>
                </a>
                <button
                  onClick={() => copyText(phone, 'phone')}
                  title="Copier le numéro de téléphone"
                  className="p-1.5 rounded-md bg-white/[0.04] hover:bg-emerald-500/20 text-zinc-300 hover:text-emerald-300 transition-colors"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Direct Email Actions (Primary & Secondary) */}
              <div className="space-y-2 mb-4">
                <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail size={16} className="text-amber-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-mono text-xs text-zinc-200 block truncate">{primaryEmail}</span>
                      <span className="text-[10px] text-amber-400/80 font-mono">Email Principal</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText(primaryEmail, 'email')}
                    title="Copier l'email principal"
                    className="p-1.5 rounded-md bg-white/[0.04] hover:bg-amber-500/20 text-zinc-300 hover:text-amber-300 transition-colors"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06] flex items-center justify-between hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail size={16} className="text-orange-400 shrink-0" />
                    <div className="truncate">
                      <span className="font-mono text-xs text-zinc-200 block truncate">{secondaryEmail}</span>
                      <span className="text-[10px] text-orange-400/80 font-mono">Email Secondaire</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText(secondaryEmail, 'email')}
                    title="Copier l'email secondaire"
                    className="p-1.5 rounded-md bg-white/[0.04] hover:bg-orange-500/20 text-zinc-300 hover:text-orange-300 transition-colors"
                  >
                    <Copy size={14} />
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 font-mono text-xs">
                <a
                  href="https://www.linkedin.com/in/carl-william-djeguema-6132a1380"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-amber-500/30 text-zinc-300 hover:text-amber-300 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>Profil LinkedIn Professionnel</span>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://github.com/carlwilliamdgm"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-amber-500/30 text-zinc-300 hover:text-amber-300 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>GitHub Personnel (@carlwilliamdgm)</span>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://github.com/The-Great-Corporation"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-orange-500/30 text-zinc-300 hover:text-orange-300 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>The Great Corporation (@The-Great-Corporation)</span>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>

          {/* Right: Direct Transmission Dispatcher (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-bento p-6 sm:p-8 rounded-2xl relative corner-crosshair">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-amber-400" />
                  <span className="font-mono text-xs text-white font-bold uppercase">
                    CANAL DE TRANSMISSION DIRECTE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">ENCRYPTED // SECURE</span>
              </div>

              <form onSubmit={handleSend} className="space-y-4">
                
                {/* Subject Selector Pills */}
                <div>
                  <label className="font-mono text-[11px] text-zinc-400 block mb-2">
                    OBJET DU MESSAGE :
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Opportunité / Collaboration',
                      'Projet PHANTOM & TGC',
                      'Échange Technique / Cursus',
                      'Proposition de Mission'
                    ].map((subject) => (
                      <button
                        type="button"
                        key={subject}
                        onClick={() => {
                          setSelectedSubject(subject);
                          sound.playClick();
                        }}
                        className={`px-3 py-1 rounded-lg font-mono text-xs transition-all ${
                          selectedSubject === subject
                            ? 'bg-amber-500 text-zinc-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                            : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] text-zinc-400 block mb-1">
                      VOTRE NOM :
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Alexandre Dupont"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] focus:border-amber-400/50 focus:outline-none font-sans text-xs text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] text-zinc-400 block mb-1">
                      VOTRE EMAIL :
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="alexandre@domaine.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] focus:border-amber-400/50 focus:outline-none font-sans text-xs text-white placeholder-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-zinc-400 block mb-1">
                    VOTRE MESSAGE :
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Parlez-moi de votre vision ou de ce que vous aimeriez construire ensemble..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] focus:border-amber-400/50 focus:outline-none font-sans text-xs text-white placeholder-zinc-600 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => sound.playPulse()}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-zinc-950 font-display font-bold text-sm hover:brightness-110 shadow-[0_0_25px_rgba(245,158,11,0.35)] flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Send size={15} />
                  <span>Transmettre le Message à Carl-William</span>
                </button>

                {sentSuccess && (
                  <p className="font-mono text-xs text-emerald-400 text-center animate-fade-in pt-1 font-semibold">
                    [TRANSMISSION INIT] Votre client email s'est ouvert pour envoyer votre message !
                  </p>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
