import { Target, Lightbulb, Zap, BookOpen } from 'lucide-react';

const TECH_STACK = [
  'React 18', 'TypeScript', 'Tailwind CSS', 'Vite',
  'HTML5 Canvas', 'SVG Graphics', 'WebGL', 'GitHub'
];

const JOURNEY_STEPS = [
  {
    phase: 'Started Learning',
    time: '2025',
    desc: 'Started exploring programming and web development fundamentals.',
    color: '#00d4ff',
  },
  {
    phase: 'Design',
    time: 'Q1 2026',
    desc: 'Crafted futuristic UI with glassmorphism, neon effects, and particle systems.',
    color: '#00e5ff',
  },
  {
    phase: 'Development',
    time: 'Q2 2026',
    desc: 'Built interactive components with real-time animations and scroll-triggered reveals.',
    color: '#26c6da',
  },
  {
    phase: 'Launch',
    time: '2026',
    desc: 'Deployed fully responsive landing page showcasing AI and cyborg future vision.',
    color: '#4dd0e1',
  },
];

export default function CreatorProfile() {
  return (
    <section id="creator-profile" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,15,30,1) 0%, var(--dark-bg) 100%)' }} />
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">ABOUT THE CREATOR</div>
          <h2
            className="font-orbitron font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            MY JOURNEY
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'rgba(224,242,254,0.55)', fontSize: '1.05rem' }}>
            Computer Science Engineering student passionate about web development, software engineering, and building impactful digital solutions.
          </p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </div>

        {/* Goals & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Project Goals */}
          <div className="reveal-left glass-card rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.3), transparent)' }} />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', color: 'var(--neon-cyan)' }}
              >
                <Target size={20} />
              </div>
              <h3 className="font-orbitron font-bold text-lg" style={{ color: '#e0f2fe' }}>
                Project Goals
              </h3>
            </div>

            <ul className="space-y-3">
              {[
                'Build responsive and modern web applications',
                'Improve problem-solving and development skills',
                'Create impactful software projects',
                'Grow as a professional software engineer',
               
              ].map((goal, i) => (
                <li key={i} className="flex gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 animate-pulse"
                    style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 4px var(--neon-cyan)' }}
                  />
                  <span className="text-sm" style={{ color: 'rgba(224,242,254,0.65)', fontFamily: 'Rajdhani' }}>
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Vision */}
          <div className="reveal-right glass-card rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 opacity-5" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.3), transparent)' }} />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', color: 'var(--neon-cyan)' }}
              >
                <Lightbulb size={20} />
              </div>
              <h3 className="font-orbitron font-bold text-lg" style={{ color: '#e0f2fe' }}>
                Career Vision
              </h3>
            </div>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'rgba(224,242,254,0.65)', fontFamily: 'Rajdhani' }}
            >
             My goal is to become a skilled software engineer and contribute to innovative projects that solve real-world problems. I enjoy learning new technologies and continuously improving my development skills.
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(224,242,254,0.5)', fontFamily: 'Rajdhani' }}
            >
              This portfolio represents my learning journey, projects, achievements, and technical growth as a developer.
            </p>
          </div>
        </div>

        {/* Development Journey */}
        <div className="mb-20">
          <h3 className="font-orbitron font-bold text-xl mb-8 text-center reveal" style={{ color: 'var(--neon-blue)' }}>
            DEVELOPMENT JOURNEY
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step.phase} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div
                  className="glass-card rounded-xl p-5 text-center relative overflow-hidden h-full"
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 left-1/4 right-1/4 h-0.5"
                    style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                  />

                  <div className="cyber-badge mx-auto mb-3" style={{ color: step.color, borderColor: `${step.color}40`, display: 'inline-block' }}>
                    {step.time}
                  </div>

                  <h4 className="font-orbitron font-bold text-sm mb-3" style={{ color: step.color }}>
                    {step.phase}
                  </h4>

                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'rgba(224,242,254,0.5)', fontFamily: 'Rajdhani' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="reveal">
          <div className="glass-card rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 neon-line" />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', color: 'var(--neon-cyan)' }}
              >
                <Zap size={20} />
              </div>
              <h3 className="font-orbitron font-bold text-lg" style={{ color: '#e0f2fe' }}>
                Technologies Used
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {TECH_STACK.map(tech => (
                <div
                  key={tech}
                  className="cyber-badge"
                  style={{
                    fontSize: '0.65rem',
                    background: 'rgba(0,212,255,0.05)',
                    borderColor: 'rgba(0,212,255,0.25)',
                    color: 'var(--neon-cyan)',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(0,212,255,0.1)' }}>
              <h4 className="font-orbitron font-bold text-sm mb-3" style={{ color: 'rgba(224,242,254,0.7)' }}>
                Why These Technologies?
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(224,242,254,0.55)', fontFamily: 'Rajdhani' }}>
                React provides a performant, component-driven architecture. TypeScript ensures type safety at scale.
                Tailwind CSS enables rapid, responsive design. Vite delivers blazing-fast builds. Canvas and SVG power
                real-time visual effects. Together, they create a seamless, future-ready experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
