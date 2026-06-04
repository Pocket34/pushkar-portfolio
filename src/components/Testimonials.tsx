import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Prof. Anupam Saxena',
    role: 'Faculty Advisor, Computer Science',
    avatar: 'AS',
    text: 'Pushkar\'s Cyborg Future project demonstrates exceptional web development skills combined with creative vision. A perfect example of innovative student work in emerging technologies.',
    stars: 5,
    tag: 'MENTORSHIP',
  },
  {
    name: 'Rahul Singh',
    role: 'Tech Festival Coordinator',
    avatar: 'RS',
    text: 'This interactive landing page captures the spirit of futuristic technology beautifully. The attention to detail in the cyberpunk aesthetic is remarkable for a student project.',
    stars: 5,
    tag: 'FESTIVAL',
  },
  {
    name: 'Zara Malik',
    role: 'UI/UX Designer',
    avatar: 'ZM',
    text: 'The design execution here is studio-quality. Pushkar masterfully blended glassmorphism, neon effects, and interactive animations into a cohesive visual narrative.',
    stars: 5,
    tag: 'DESIGN',
  },
  {
    name: 'Amit Patel',
    role: 'Full-Stack Developer',
    avatar: 'AP',
    text: 'The technical implementation is solid—responsive, performant, and creative use of Canvas and SVG. This is the kind of portfolio project that stands out to employers.',
    stars: 5,
    tag: 'DEVELOPMENT',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,15,30,1) 0%, var(--dark-bg) 100%)' }} />
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">RECOGNITION</div>
          <h2
            className="font-orbitron font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            COMMUNITY FEEDBACK
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="glass-card rounded-xl p-6 reveal relative overflow-hidden group"
              style={{ transitionDelay: `${(i % 2) * 0.15}s` }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)' }}
              />

              {/* Quote icon */}
              <div
                className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: 'var(--neon-cyan)' }}
              >
                <Quote size={48} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={12} fill="#00d4ff" style={{ color: 'var(--neon-blue)' }} />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm md:text-base leading-relaxed mb-6"
                style={{ color: 'rgba(224,242,254,0.75)', fontFamily: 'Rajdhani', fontStyle: 'italic' }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center font-orbitron font-bold text-sm"
                  style={{ border: '2px solid rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.08)', color: 'var(--neon-cyan)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-orbitron text-xs font-bold" style={{ color: '#e0f2fe' }}>{t.name}</div>
                  <div className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.5)' }}>{t.role}</div>
                </div>
                <div className="ml-auto cyber-badge" style={{ fontSize: '0.5rem' }}>{t.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
