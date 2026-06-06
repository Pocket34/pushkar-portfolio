import { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

const BOOT_LINES = [
  'LOADING PORTFOLIO...',
  'INITIALIZING COMPONENTS...',
  'LOADING PROJECTS...',
  'FETCHING SKILLS DATA...',
  'PREPARING USER INTERFACE...',
  'WELCOME TO PUSHKAR GUPTA PORTFOLIO.',
];

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 400);
      }
      setProgress(Math.min(p, 100));
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, i * 360);
    });
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${done ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ background: 'var(--dark-bg)' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Animated rings */}
      <div className="relative mb-10">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-400/20"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `ringPulse ${1.5 + i * 0.5}s ease-out ${i * 0.3}s infinite`,
            }}
          />
        ))}

        {/* Central hex */}
        <div
          className="relative w-24 h-24 hex-clip flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,255,240,0.08))' }}
        >
          <div
            className="w-20 h-20 hex-clip flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(0,100,200,0.15))' }}
          >
            <span
              className="font-orbitron text-sm font-bold"
              style={{ color: 'var(--neon-cyan)', textShadow: '0 0 15px var(--neon-cyan)' }}
            >
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="mb-6 text-center">
        <div className="font-orbitron text-xs tracking-widest mb-1" style={{ color: 'rgba(0,212,255,0.5)' }}>
          PERSONAL PORTFOLIO
        </div>
        <h1
          className="font-orbitron text-2xl md:text-3xl font-black tracking-widest"
          style={{ color: 'var(--neon-cyan)', textShadow: '0 0 20px var(--neon-cyan), 0 0 40px rgba(0,255,240,0.4)' }}
        >
          PUSHKAR GUPTA
        </h1>
      </div>

      {/* Boot log */}
      <div className="w-full max-w-md mx-auto px-6 mb-6 h-32 overflow-hidden">
        {lines.map((line, i) => (
          <div
            key={i}
            className="font-mono-tech text-xs mb-1"
            style={{ color: i === lines.length - 1 ? 'var(--neon-cyan)' : 'rgba(0,212,255,0.4)' }}
          >
            <span style={{ color: 'rgba(0,212,255,0.3)' }}>&gt;&gt; </span>
            {line}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md mx-auto px-6">
        <div className="flex justify-between mb-1">
          <span className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.5)' }}>LOADING</span>
          <span className="font-mono-tech text-xs" style={{ color: 'var(--neon-cyan)' }}>{Math.round(progress)}%</span>
        </div>
        <div
          className="w-full h-1 rounded-full"
          style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.15)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-cyan))',
              boxShadow: '0 0 10px var(--neon-blue)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
