import { Eye, Zap, Lock, Radio, Waves, Fingerprint, ChevronRight, Layers } from 'lucide-react';

const FEATURES = [
  {
    icon: <Eye size={24} />,
    title: 'Quantum Vision',
    desc: 'Synthetic retinas with 16K resolution, thermal imaging, X-ray penetration, and real-time AR overlay. See beyond human limits.',
    badge: 'OPTICS',
  },
  {
    icon: <Zap size={24} />,
    title: 'Neural Boost',
    desc: 'Cognitive enhancement modules amplifying processing speed 1000x. Direct access to world knowledge through neural APIs.',
    badge: 'COGNITION',
  },
  {
    icon: <Lock size={24} />,
    title: 'Biometric Shield',
    desc: 'Multi-layer quantum encryption of your neural signature. Unhackable identity verification using brainwave patterns.',
    badge: 'SECURITY',
  },
  {
    icon: <Radio size={24} />,
    title: 'Hive Network',
    desc: 'Seamless neural mesh connectivity enabling real-time thought sharing across global cyborg collectives and AI clusters.',
    badge: 'NETWORK',
  },
  {
    icon: <Waves size={24} />,
    title: 'Emotion Matrix',
    desc: 'Synthetic limbic system providing precise emotional regulation, empathy amplification, and psychological optimization.',
    badge: 'NEURAL',
  },
  {
    icon: <Fingerprint size={24} />,
    title: 'DNA Forge',
    desc: 'Real-time genetic expression control via nanobots, enabling adaptive physical transformation and disease elimination.',
    badge: 'BIO-TECH',
  },
  {
    icon: <Layers size={24} />,
    title: 'Memory Palace',
    desc: 'Unlimited photographic memory with quantum storage. Recall any moment in perfect clarity. Upload and share experiences.',
    badge: 'MEMORY',
  },
  {
    icon: <ChevronRight size={24} />,
    title: 'Temporal Sync',
    desc: 'Neural clock synchronization achieving microsecond-level reaction times. Subjective time dilation on demand.',
    badge: 'TIME',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, var(--dark-surface) 0%, var(--dark-bg) 100%)' }}
      />
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">05 // FEATURES</div>
          <h2
            className="font-orbitron font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            CYBORG CAPABILITIES
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'rgba(224,242,254,0.55)', fontSize: '1.05rem' }}>
            Eight transformative technologies that redefine what it means to be human
          </p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-xl p-6 reveal group cursor-pointer relative overflow-hidden"
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)', boxShadow: '0 0 8px var(--neon-cyan)' }}
              />

              {/* BG glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,212,255,0.06), transparent 70%)' }}
              />

              <div className="relative">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(0,212,255,0.08)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      color: 'var(--neon-cyan)',
                    }}
                  >
                    {f.icon}
                  </div>
                  <div className="cyber-badge text-xs" style={{ fontSize: '0.5rem' }}>{f.badge}</div>
                </div>

                {/* Title */}
                <h3
                  className="font-orbitron font-bold text-sm mb-2"
                  style={{ color: '#e0f2fe' }}
                >
                  {f.title}
                </h3>

                {/* Desc */}
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'rgba(224,242,254,0.5)', fontFamily: 'Rajdhani', lineHeight: '1.6' }}
                >
                  {f.desc}
                </p>

                {/* Hover arrow */}
                <div
                  className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="font-mono-tech text-xs" style={{ color: 'var(--neon-cyan)' }}>LEARN MORE</span>
                  <ChevronRight size={12} style={{ color: 'var(--neon-cyan)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
