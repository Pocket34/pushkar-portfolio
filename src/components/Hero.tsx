import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Play, Zap } from 'lucide-react';

const TYPING_STRINGS = [
  'SOFTWARE ENGINEER',
  'CSE STUDENT',
  'SIH PARTICIPANT',
  'FULL STACK DEVELOPER',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = TYPING_STRINGS[strIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setTypedText(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIdx > 0) {
          setTypedText(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setStrIdx(s => (s + 1) % TYPING_STRINGS.length);
        }
      }
    }, deleting ? 60 : 90);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, strIdx]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--dark-bg)' }}
    >
      {/* Animated gradient bg */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,100,200,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(0,212,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 20% 60%, rgba(0,80,160,0.08) 0%, transparent 50%)',
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Scan line */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Horizontal neon lines */}
      {[15, 35, 65, 85].map(pct => (
        <div
          key={pct}
          className="absolute w-full opacity-20"
          style={{
            top: `${pct}%`,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.4) 30%, rgba(0,255,240,0.6) 50%, rgba(0,212,255,0.4) 70%, transparent 100%)',
          }}
        />
      ))}

      {/* Data streams */}
      {[5, 15, 85, 92].map((left, i) => (
        <div
          key={i}
          className="data-stream absolute top-0"
          style={{ left: `${left}%`, animationDelay: `${i * 1.5}s`, animationDuration: `${7 + i}s` }}
        >
          {Array.from({ length: 20 }, () =>
            String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
          ).join('')}
        </div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ boxShadow: '0 0 8px var(--neon-cyan)' }} />
            <span className="cyber-badge">PUSHKAR GUPTA // COMPUTER SCIENCE ENGINEERING</span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ boxShadow: '0 0 8px var(--neon-cyan)' }} />
          </div>

          {/* Main title */}
          <h1
            className="font-orbitron font-black mb-4 leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
          >
            <span
              style={{
                color: 'var(--neon-blue)',
                textShadow: '0 0 15px var(--neon-blue), 0 0 40px rgba(0,212,255,0.4)',
                display: 'block',
              }}
            >
              PUSHKAR
            </span>
            <span
              style={{
                color: 'var(--neon-cyan)',
                textShadow: '0 0 15px var(--neon-cyan), 0 0 40px rgba(0,255,240,0.4)',
                display: 'block',
              }}
            >
              GUPTA
            </span>
            <span
              className="gradient-text"
              style={{ display: 'block' }}
            >
              CSE
            </span>
          </h1>

          {/* Typing animation */}
          <div className="mb-6 h-8 flex items-center justify-center lg:justify-start">
            <span className="font-mono-tech text-sm md:text-base" style={{ color: 'rgba(0,212,255,0.6)' }}>
              &gt;&nbsp;
            </span>
            <span
              className="font-orbitron text-sm md:text-base typing-cursor"
              style={{ color: 'var(--neon-cyan)', textShadow: '0 0 8px var(--neon-cyan)' }}
            >
              {typedText}
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            style={{ color: 'rgba(224,242,254,0.6)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}
          >
            Computer Science Engineering student passionate about software development, web technologies, and innovative problem solving. I enjoy building modern applications and participating in hackathons to create impactful solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="btn-neon-solid flex items-center gap-2">
              <Zap size={14} />
              <button
  className="btn-neon-solid flex items-center gap-2"
  onClick={() =>
    document.querySelector('#features')
      ?.scrollIntoView({ behavior: 'smooth' })
  }
></button>
            </button>
            <button className="btn-neon flex items-center gap-2">
              <Play size={14} />
            <button
  className="btn-neon flex items-center gap-2"
  onClick={() =>
    document.querySelector('#contact')
      ?.scrollIntoView({ behavior: 'smooth' })
  }
></button>
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 mt-10 justify-center lg:justify-start">
            {[
              { v: '2+', l: 'PROJECTS' },
              { v: 'SIH', l: 'HACKATHON' },
              { v: '2026', l: 'GRADUATION' },
            ].map(stat => (
              <div key={stat.l}>
                <div
                  className="font-orbitron text-lg font-bold"
                  style={{ color: 'var(--neon-cyan)', textShadow: '0 0 10px var(--neon-cyan)' }}
                >
                  {stat.v}
                </div>
                <div className="text-xs" style={{ color: 'rgba(224,242,254,0.4)', fontFamily: 'Rajdhani' }}>
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Robot */}
        <div className="flex items-center justify-center relative">
          {/* Orbital rings */}
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${220 + i * 80}px`,
                height: `${220 + i * 80}px`,
                border: `1px solid rgba(0,212,255,${0.15 - i * 0.03})`,
                animation: `radarScan ${6 + i * 4}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`,
              }}
            />
          ))}

          {/* Pulse rings */}
          {[1, 2].map(i => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: '180px',
                height: '180px',
                border: '1.5px solid rgba(0,212,255,0.3)',
                animation: `pulseRing ${2 + i * 0.5}s ease-out ${i * 0.7}s infinite`,
              }}
            />
          ))}

          {/* Robot image container */}
          <div
            className="relative float-animation"
            style={{ width: '320px', height: '420px' }}
          >
            {/* Glow base */}
            <div
              className="absolute inset-x-0 bottom-0 h-24 rounded-full blur-3xl"
              style={{ background: 'rgba(0,212,255,0.2)' }}
            />

            {/* SVG Robot */}
            <svg
              viewBox="0 0 320 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full robot-glow"
              aria-label="Futuristic humanoid robot"
            >
              {/* Definitions */}
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#003a5c" />
                  <stop offset="50%" stopColor="#001a3a" />
                  <stop offset="100%" stopColor="#000d20" />
                </linearGradient>
                <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#004a6e" />
                  <stop offset="100%" stopColor="#001525" />
                </linearGradient>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00fff0" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="strongGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Neck */}
              <rect x="144" y="148" width="32" height="28" rx="4" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.5" />
              <rect x="150" y="152" width="20" height="4" rx="2" fill="#00d4ff" opacity="0.4" />
              <rect x="150" y="162" width="20" height="4" rx="2" fill="#00d4ff" opacity="0.4" />

              {/* HEAD */}
              <rect x="100" y="60" width="120" height="92" rx="18" fill="url(#faceGrad)" stroke="#00d4ff" strokeWidth="1" />
              {/* Head side panels */}
              <rect x="88" y="75" width="14" height="50" rx="5" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.5" />
              <rect x="218" y="75" width="14" height="50" rx="5" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.5" />
              {/* Ear details */}
              <circle cx="92" cy="95" r="4" fill="#00d4ff" filter="url(#glow)" opacity="0.8" />
              <circle cx="228" cy="95" r="4" fill="#00d4ff" filter="url(#glow)" opacity="0.8" />

              {/* Visor / Eyes area */}
              <rect x="108" y="78" width="104" height="36" rx="10" fill="#000d1f" stroke="#00d4ff" strokeWidth="1" />
              <rect x="110" y="80" width="100" height="32" rx="8" fill="url(#glowGrad)" opacity="0.1" />

              {/* Eyes */}
              <ellipse cx="143" cy="96" rx="14" ry="10" fill="#000a18" />
              <ellipse cx="143" cy="96" rx="10" ry="7" fill="#00d4ff" filter="url(#strongGlow)" opacity="0.9" />
              <ellipse cx="143" cy="96" rx="5" ry="4" fill="#00fff0" />
              <ellipse cx="143" cy="96" rx="2" ry="2" fill="white" />

              <ellipse cx="177" cy="96" rx="14" ry="10" fill="#000a18" />
              <ellipse cx="177" cy="96" rx="10" ry="7" fill="#00d4ff" filter="url(#strongGlow)" opacity="0.9" />
              <ellipse cx="177" cy="96" rx="5" ry="4" fill="#00fff0" />
              <ellipse cx="177" cy="96" rx="2" ry="2" fill="white" />

              {/* Visor scan line */}
              <rect x="110" y="93" width="100" height="1.5" fill="#00fff0" opacity="0.4" filter="url(#glow)" />

              {/* Lower face / chin */}
              <rect x="118" y="122" width="84" height="24" rx="8" fill="#001828" stroke="#00d4ff" strokeWidth="0.5" />
              {/* Mouth / speaker grille */}
              {[0, 1, 2, 3, 4].map(i => (
                <rect key={i} x={126 + i * 14} y="128" width="6" height="12" rx="2" fill="#00d4ff" opacity="0.3" />
              ))}

              {/* Head top detail */}
              <rect x="135" y="60" width="50" height="10" rx="4" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.5" />
              <rect x="148" y="62" width="24" height="2" rx="1" fill="#00d4ff" opacity="0.5" />

              {/* TORSO */}
              <rect x="86" y="176" width="148" height="120" rx="16" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="1" />

              {/* Chest center panel */}
              <rect x="120" y="186" width="80" height="70" rx="10" fill="#000d1f" stroke="#00d4ff" strokeWidth="0.5" />

              {/* Arc reactor / power core */}
              <circle cx="160" cy="218" r="22" fill="#000a18" stroke="#00d4ff" strokeWidth="1" />
              <circle cx="160" cy="218" r="16" fill="#001a30" stroke="#00d4ff" strokeWidth="0.5" />
              <circle cx="160" cy="218" r="10" fill="#003a5c" />
              <circle cx="160" cy="218" r="7" fill="#00d4ff" filter="url(#strongGlow)" opacity="0.8" />
              <circle cx="160" cy="218" r="4" fill="#00fff0" />

              {/* Chest lines */}
              {[0, 1, 2].map(i => (
                <rect key={i} x="106" y={188 + i * 14} width="10" height="2" rx="1" fill="#00d4ff" opacity="0.5" />
              ))}
              {[0, 1, 2].map(i => (
                <rect key={i} x="204" y={188 + i * 14} width="10" height="2" rx="1" fill="#00d4ff" opacity="0.5" />
              ))}

              {/* Chest vent slats */}
              {[0, 1, 2].map(i => (
                <rect key={i} x={130 + i * 20} y="265" width="12" height="6" rx="2" fill="#001828" stroke="#00d4ff" strokeWidth="0.3" opacity="0.7" />
              ))}

              {/* SHOULDERS */}
              <ellipse cx="76" cy="192" rx="22" ry="28" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="1" />
              <ellipse cx="244" cy="192" rx="22" ry="28" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="1" />
              <circle cx="76" cy="192" r="6" fill="#00d4ff" filter="url(#glow)" opacity="0.6" />
              <circle cx="244" cy="192" r="6" fill="#00d4ff" filter="url(#glow)" opacity="0.6" />

              {/* ARMS */}
              {/* Left arm */}
              <rect x="44" y="210" width="34" height="80" rx="12" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.8" />
              <rect x="48" y="225" width="26" height="4" rx="2" fill="#00d4ff" opacity="0.4" />
              <rect x="48" y="240" width="26" height="4" rx="2" fill="#00d4ff" opacity="0.3" />
              <rect x="48" y="255" width="26" height="4" rx="2" fill="#00d4ff" opacity="0.2" />

              {/* Left forearm */}
              <rect x="42" y="296" width="38" height="60" rx="10" fill="#001828" stroke="#00d4ff" strokeWidth="0.8" />
              <rect x="46" y="305" width="30" height="3" rx="1.5" fill="#00d4ff" opacity="0.5" />
              <rect x="46" y="315" width="20" height="3" rx="1.5" fill="#00d4ff" opacity="0.4" />
              <rect x="46" y="325" width="25" height="3" rx="1.5" fill="#00d4ff" opacity="0.3" />

              {/* Left hand */}
              <rect x="44" y="358" width="36" height="30" rx="8" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.8" />
              {[0, 1, 2, 3].map(i => (
                <rect key={i} x={48 + i * 8} y="352" width="5" height="10" rx="3" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.5" />
              ))}

              {/* Right arm */}
              <rect x="242" y="210" width="34" height="80" rx="12" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.8" />
              <rect x="246" y="225" width="26" height="4" rx="2" fill="#00d4ff" opacity="0.4" />
              <rect x="246" y="240" width="26" height="4" rx="2" fill="#00d4ff" opacity="0.3" />
              <rect x="246" y="255" width="26" height="4" rx="2" fill="#00d4ff" opacity="0.2" />

              {/* Right forearm */}
              <rect x="240" y="296" width="38" height="60" rx="10" fill="#001828" stroke="#00d4ff" strokeWidth="0.8" />
              <rect x="244" y="305" width="30" height="3" rx="1.5" fill="#00d4ff" opacity="0.5" />
              <rect x="244" y="315" width="20" height="3" rx="1.5" fill="#00d4ff" opacity="0.4" />
              <rect x="244" y="325" width="25" height="3" rx="1.5" fill="#00d4ff" opacity="0.3" />

              {/* Right hand */}
              <rect x="240" y="358" width="36" height="30" rx="8" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.8" />
              {[0, 1, 2, 3].map(i => (
                <rect key={i} x={244 + i * 8} y="352" width="5" height="10" rx="3" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.5" />
              ))}

              {/* LOWER BODY */}
              <rect x="100" y="296" width="120" height="70" rx="12" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.8" />
              <rect x="110" y="305" width="44" height="50" rx="8" fill="#001020" stroke="#00d4ff" strokeWidth="0.5" />
              <rect x="166" y="305" width="44" height="50" rx="8" fill="#001020" stroke="#00d4ff" strokeWidth="0.5" />

              {/* Hip details */}
              <rect x="106" y="302" width="20" height="4" rx="2" fill="#00d4ff" opacity="0.4" />
              <rect x="194" y="302" width="20" height="4" rx="2" fill="#00d4ff" opacity="0.4" />

              {/* LEGS */}
              <rect x="106" y="366" width="52" height="50" rx="12" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.8" />
              <rect x="162" y="366" width="52" height="50" rx="12" fill="url(#bodyGrad)" stroke="#00d4ff" strokeWidth="0.8" />

              {/* Leg details */}
              {[0, 1, 2].map(i => (
                <rect key={i} x="112" y={374 + i * 12} width="12" height="3" rx="1.5" fill="#00d4ff" opacity="0.4" />
              ))}
              {[0, 1, 2].map(i => (
                <rect key={i} x="196" y={374 + i * 12} width="12" height="3" rx="1.5" fill="#00d4ff" opacity="0.4" />
              ))}

              {/* Knee joints */}
              <circle cx="132" cy="370" r="8" fill="#002030" stroke="#00d4ff" strokeWidth="0.8" />
              <circle cx="188" cy="370" r="8" fill="#002030" stroke="#00d4ff" strokeWidth="0.8" />
              <circle cx="132" cy="370" r="4" fill="#00d4ff" filter="url(#glow)" opacity="0.6" />
              <circle cx="188" cy="370" r="4" fill="#00d4ff" filter="url(#glow)" opacity="0.6" />

              {/* Energy lines on body */}
              <path d="M160 176 L160 295" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 8" />
              <path d="M86 200 L86 295" stroke="#00d4ff" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 8" />
              <path d="M234 200 L234 295" stroke="#00d4ff" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 8" />

              {/* Glowing accents */}
              <circle cx="160" cy="218" r="22" stroke="#00fff0" strokeWidth="0.5" opacity="0.3" filter="url(#glow)" />
            </svg>

            {/* Status HUD overlay */}
            <div
              className="absolute top-4 right-0 text-right"
              style={{ fontFamily: 'Share Tech Mono', fontSize: '0.55rem', color: 'rgba(0,212,255,0.5)' }}
            >
              <div>STATUS: ONLINE</div>
              <div style={{ color: 'var(--neon-cyan)' }}>PUSHKAR</div>
              <div>VERSION 1.0</div>
            </div>
            <div
              className="absolute bottom-10 left-0 text-left"
              style={{ fontFamily: 'Share Tech Mono', fontSize: '0.55rem', color: 'rgba(0,212,255,0.5)' }}
            >
              <div>CREATED BY: PUSHKAR GUPTA</div>
              <div style={{ color: 'var(--neon-cyan)' }}>BATCH: 2026</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-orbitron text-xs tracking-widest" style={{ color: 'rgba(0,212,255,0.4)' }}>
          SCROLL
        </span>
        <ChevronDown
          size={20}
          style={{ color: 'var(--neon-cyan)', animation: 'float 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  );
}
