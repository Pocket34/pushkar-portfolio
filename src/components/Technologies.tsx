import { Brain, Shield, Cpu, Network, Atom, Rocket } from 'lucide-react';

const TECHS = [
  {
    icon: <Brain size={28} />,
    name: 'Artificial Intelligence',
    code: 'AI-X7',
    desc: 'Self-evolving neural architectures that surpass human cognitive limits through recursive self-improvement cycles.',
    stat: '10T+ ops/s',
    color: '#00d4ff',
  },
  {
    icon: <Cpu size={28} />,
    name: 'Advanced Robotics',
    code: 'ROB-3',
    desc: 'Bio-mechanical constructs with synthetic muscle fibers, adaptive exoskeletons, and real-time sensor fusion.',
    stat: '500+ Models',
    color: '#00fff0',
  },
  {
    icon: <Shield size={28} />,
    name: 'Cyber Security',
    code: 'SEC-Q',
    desc: 'Quantum-resistant cryptography and zero-trust architectures protecting the neural grid from hostile intrusions.',
    stat: '99.9% Uptime',
    color: '#00b8d4',
  },
  {
    icon: <Network size={28} />,
    name: 'Neural Networks',
    code: 'NN-11',
    desc: 'Multi-layered consciousness emulation with 100 billion synthetic neurons forming emergent intelligence.',
    stat: '100B+ Nodes',
    color: '#00e5ff',
  },
  {
    icon: <Atom size={28} />,
    name: 'Quantum Computing',
    code: 'QC-5',
    desc: 'Leveraging quantum superposition and entanglement to process complex problems instantaneously.',
    stat: '4096 Qubits',
    color: '#26c6da',
  },
  {
    icon: <Rocket size={28} />,
    name: 'Space Technology',
    code: 'SPC-8',
    desc: 'Deep space cybernetics enabling human consciousness transfer across planetary and interstellar distances.',
    stat: '4.2 LY Range',
    color: '#4dd0e1',
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, var(--dark-bg) 0%, rgba(0,10,25,1) 100%)' }}
      />
      <div className="absolute inset-0 cyber-grid opacity-25" />

      {/* Radial background glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,80,150,0.08), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">02 // TECHNOLOGIES</div>
          <h2
            className="font-orbitron font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            CORE SYSTEMS
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'rgba(224,242,254,0.55)', fontSize: '1.05rem' }}>
            Six pillars of technological supremacy powering the cyborg revolution of 2050
          </p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHS.map((tech, i) => (
            <div
              key={tech.name}
              className="glass-card rounded-xl p-6 reveal group cursor-pointer relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute top-0 right-0 w-8 h-0.5"
                  style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
                />
                <div
                  className="absolute top-0 right-0 w-0.5 h-8"
                  style={{ background: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
                />
              </div>

              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${tech.color}08, transparent 70%)` }}
              />

              {/* Icon */}
              <div className="relative mb-4 flex items-start justify-between">
                <div
                  className="tech-icon-wrap"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <div
                  className="cyber-badge"
                  style={{ color: tech.color, borderColor: `${tech.color}40` }}
                >
                  {tech.code}
                </div>
              </div>

              {/* Name */}
              <h3
                className="font-orbitron font-bold text-sm mb-2 group-hover:transition-all"
                style={{ color: tech.color, textShadow: `0 0 8px ${tech.color}60` }}
              >
                {tech.name}
              </h3>

              {/* Desc */}
              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'rgba(224,242,254,0.55)', fontFamily: 'Rajdhani' }}
              >
                {tech.desc}
              </p>

              {/* Stat */}
              <div
                className="flex items-center gap-2 pt-4"
                style={{ borderTop: '1px solid rgba(0,212,255,0.1)' }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}` }}
                />
                <span
                  className="font-mono-tech text-xs"
                  style={{ color: tech.color }}
                >
                  {tech.stat}
                </span>
              </div>

              {/* Progress bar */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-b-xl"
                style={{ background: `linear-gradient(90deg, ${tech.color}, transparent)`, boxShadow: `0 0 8px ${tech.color}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
