import { useEffect, useRef, useState } from 'react';
import { Activity, Bot, Target, Globe } from 'lucide-react';

const STATS = [
  { icon: <Activity size={28} />, value: 10, suffix: 'M+', label: 'AI Operations', sub: 'Per second globally' },
  { icon: <Bot size={28} />, value: 500, suffix: '+', label: 'Robots Deployed', sub: 'Across 60 countries' },
  { icon: <Target size={28} />, value: 99.9, suffix: '%', label: 'Accuracy Rate', sub: 'Neural precision' },
  { icon: <Globe size={28} />, value: 150, suffix: '+', label: 'Global Reach', sub: 'Nations connected' },
];

function Counter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((target * eased).toFixed(target % 1 !== 0 ? 1 : 0)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="stat-number" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'Orbitron, monospace', fontWeight: 900 }}>
      {count}{suffix}
    </div>
  );
}

export default function Statistics() {
  return (
    <section id="statistics" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(0,20,40,0.95) 0%, rgba(0,8,20,1) 100%)' }}
      />
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Horizontal neon accent */}
      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="absolute bottom-0 left-0 right-0 neon-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="cyber-badge inline-block mb-4">03 // STATISTICS</div>
          <h2
            className="font-orbitron font-black"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            BY THE NUMBERS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-8 text-center reveal group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Radial glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 30%, rgba(0,212,255,0.08), transparent 70%)' }}
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 mx-auto"
                style={{
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  color: 'var(--neon-cyan)',
                }}
              >
                {stat.icon}
              </div>

              {/* Number */}
              <Counter target={stat.value} suffix={stat.suffix} />

              {/* Label */}
              <div className="font-orbitron text-xs font-semibold mt-2 mb-1" style={{ color: '#e0f2fe' }}>
                {stat.label}
              </div>
              <div className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.5)' }}>
                {stat.sub}
              </div>

              {/* Bottom bar */}
              <div
                className="absolute bottom-0 left-1/4 right-1/4 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)', boxShadow: '0 0 8px var(--neon-cyan)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
