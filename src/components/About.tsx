import { Cpu, Brain, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-surface) 50%, var(--dark-bg) 100%)' }} />
      <div className="absolute inset-0 cyber-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">01 // ABOUT</div>
          <h2
            className="font-orbitron font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            ABOUT ME
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="reveal-left relative">
            {/* Main panel */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden corner-tl">
              <div className="absolute top-0 right-0 w-32 h-32" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1), transparent)' }} />

              {/* Brain circuit visual */}
              <div className="relative h-64 flex items-center justify-center mb-6">
                <svg viewBox="0 0 280 220" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="circuitGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                  {/* Circuit paths */}
                  <path d="M40 110 H90 V60 H140" stroke="#00d4ff" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4" filter="url(#circuitGlow)" />
                  <path d="M40 110 H90 V160 H140" stroke="#00d4ff" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4" filter="url(#circuitGlow)" />
                  <path d="M240 110 H190 V60 H140" stroke="#00fff0" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4" filter="url(#circuitGlow)" />
                  <path d="M240 110 H190 V160 H140" stroke="#00fff0" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4" filter="url(#circuitGlow)" />

                  {/* Center brain outline */}
                  <ellipse cx="140" cy="100" rx="55" ry="48" stroke="#00d4ff" strokeWidth="1.5" fill="rgba(0,30,60,0.4)" filter="url(#circuitGlow)" />
                  <path d="M140 52 C120 52 108 65 108 80 C95 80 85 90 85 100 C85 118 100 128 115 128 C118 138 128 145 140 145 C152 145 162 138 165 128 C180 128 195 118 195 100 C195 90 185 80 172 80 C172 65 160 52 140 52Z" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1" />
                  {/* Brain divisions */}
                  <path d="M140 52 L140 145" stroke="#00d4ff" strokeWidth="0.8" opacity="0.4" />
                  {/* Neural nodes */}
                  {[
                    [120, 80], [160, 80], [105, 100], [140, 95], [175, 100],
                    [118, 118], [162, 118]
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="4" fill="#00d4ff" filter="url(#circuitGlow)" opacity="0.8" />
                      <circle cx={x} cy={y} r="2" fill="#00fff0" />
                    </g>
                  ))}
                  {/* Neural connections */}
                  <line x1="120" y1="80" x2="140" y2="95" stroke="#00d4ff" strokeWidth="0.8" opacity="0.4" />
                  <line x1="160" y1="80" x2="140" y2="95" stroke="#00d4ff" strokeWidth="0.8" opacity="0.4" />
                  <line x1="105" y1="100" x2="140" y2="95" stroke="#00d4ff" strokeWidth="0.8" opacity="0.4" />
                  <line x1="175" y1="100" x2="140" y2="95" stroke="#00d4ff" strokeWidth="0.8" opacity="0.4" />
                  <line x1="118" y1="118" x2="140" y2="95" stroke="#00d4ff" strokeWidth="0.8" opacity="0.4" />
                  <line x1="162" y1="118" x2="140" y2="95" stroke="#00d4ff" strokeWidth="0.8" opacity="0.4" />

                  {/* Data points on circuit edges */}
                  {[[40, 110], [240, 110], [90, 60], [190, 60], [90, 160], [190, 160]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3.5" fill="#00d4ff" filter="url(#circuitGlow)" opacity="0.7" />
                  ))}

                  {/* Labels */}
                  <text x="30" y="106" fill="rgba(0,212,255,0.5)" fontSize="8" fontFamily="Share Tech Mono">HTML</text>
                  <text x="245" y="106" fill="rgba(0,255,240,0.5)" fontSize="8" fontFamily="Share Tech Mono">CSS</text>
                  <text x="126" y="108" fill="rgba(0,255,240,0.8)" fontSize="9" fontFamily="Share Tech Mono" fontWeight="bold">CSE</text>
                </svg>
              </div>

              {/* Metrics */}
              {[
                { label: 'Problem Solving', value: 90 },
                { label: 'Web Development', value: 85 },
                { label: 'Teamwork', value: 88 },
              ].map(m => (
                <div key={m.label} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.6)' }}>{m.label}</span>
                    <span className="font-orbitron text-xs" style={{ color: 'var(--neon-cyan)' }}>{m.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(0,212,255,0.1)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${m.value}%`,
                        background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-cyan))',
                        boxShadow: '0 0 8px var(--neon-blue)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="reveal-right space-y-6">
            <h3
              className="font-orbitron font-bold"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', color: '#e0f2fe' }}
            >
              Hello, I'm<br />
              <span style={{ color: 'var(--neon-cyan)', textShadow: '0 0 10px var(--neon-cyan)' }}>
                Pushkar Gupta
              </span>
            </h3>

            <p style={{ color: 'rgba(224,242,254,0.65)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              I am Pushkar Gupta, a Computer Science Engineering student passionate about software development, web development, and problem-solving. I enjoy creating modern applications and continuously learning new technologies.
            </p>

            <p style={{ color: 'rgba(224,242,254,0.55)', lineHeight: '1.8', fontSize: '1rem' }}>
              I have participated in Smart India Hackathon (SIH 2025) and enjoy working on innovative projects. My goal is to build impactful software solutions and grow as a professional software engineer.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                {
                  icon: <Brain size={18} />,
                  title: 'Education',
                  desc: 'B.Tech Computer Science Engineering'
                },
                {
                  icon: <Cpu size={18} />,
                  title: 'Academic Record',
                  desc: '10th: 74.8% | 12th: 72.4%'
                },
                {
                  icon: <Globe size={18} />,
                  title: 'Experience',
                  desc: 'SIH 2025 Participant & Web Developer'
                }
              ].map(f => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: 'var(--neon-cyan)' }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-orbitron text-sm font-semibold mb-1" style={{ color: '#e0f2fe' }}>{f.title}</div>
                    <div className="text-sm" style={{ color: 'rgba(224,242,254,0.5)' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
