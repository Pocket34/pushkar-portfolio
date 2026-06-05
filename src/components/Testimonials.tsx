import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Smart India Hackathon',
    role: 'SIH 2025',
    tag: 'HACKATHON',
    avatar: 'SI',
    stars: 5,
    text: 'Participated in Smart India Hackathon 2025 and worked on innovative solutions.'
  },
  {
    name: 'Web Development',
    role: 'React & TypeScript',
    tag: 'PROJECTS',
    avatar: 'WD',
    stars: 5,
    text: 'Built modern web applications using React, TypeScript and responsive UI design.'
  },
  {
    name: 'Computer Science',
    role: 'B.Tech CSE',
    tag: 'EDUCATION',
    avatar: 'CS',
    stars: 5,
    text: 'Passionate Computer Science Engineering student focused on software development and problem solving.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,15,30,1) 0%, var(--dark-bg) 100%)',
        }}
      />
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">RECOGNITION</div>

          <h2
            className="font-orbitron font-black mb-4"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              color: 'var(--neon-blue)',
              textShadow: '0 0 20px rgba(0,212,255,0.4)',
            }}
          >
            ACHIEVEMENTS
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
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
                }}
              />

              <div
                className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: 'var(--neon-cyan)' }}
              >
                <Quote size={48} />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    fill="#00d4ff"
                    style={{ color: 'var(--neon-blue)' }}
                  />
                ))}
              </div>

              <p
                className="text-sm md:text-base leading-relaxed mb-6"
                style={{
                  color: 'rgba(224,242,254,0.75)',
                  fontFamily: 'Rajdhani',
                  fontStyle: 'italic',
                }}
              >
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center font-orbitron font-bold text-sm"
                  style={{
                    border: '2px solid rgba(0,212,255,0.3)',
                    background: 'rgba(0,212,255,0.08)',
                    color: 'var(--neon-cyan)',
                  }}
                >
                  {t.avatar}
                </div>

                <div>
                  <div
                    className="font-orbitron text-xs font-bold"
                    style={{ color: '#e0f2fe' }}
                  >
                    {t.name}
                  </div>

                  <div
                    className="font-mono-tech text-xs"
                    style={{ color: 'rgba(0,212,255,0.5)' }}
                  >
                    {t.role}
                  </div>
                </div>

                <div
                  className="ml-auto cyber-badge"
                  style={{ fontSize: '0.5rem' }}
                >
                  {t.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}