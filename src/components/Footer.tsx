import { Zap } from 'lucide-react';

const FOOTER_LINKS = {
  Skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  Education: ['B.Tech CSE', '10th: 74.8%', '12th: 72.4%'],
  Experience: ['SIH 2025', 'Web Development', 'Projects'],
  Connect: ['GitHub', 'LinkedIn', 'Instagram', 'Email'],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--dark-bg) 0%, #010208 100%)' }}
    >
      <div className="absolute inset-0 cyber-grid opacity-15" />

      {/* Top neon line */}
      <div className="absolute top-0 left-0 right-0 neon-line" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', color: 'var(--neon-cyan)' }}
              >
                <Zap size={18} />
              </div>
              <div>
                <div
                  className="font-orbitron font-black text-sm"
                  style={{ color: 'var(--neon-cyan)', textShadow: '0 0 10px var(--neon-cyan)' }}
                >
                  PUSHKAR GUPTA PORTFOLIO
                </div>
                <div className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.4)' }}>
                  BY PUSHKAR GUPTA
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(224,242,254,0.45)', fontFamily: 'Rajdhani' }}
            >
              Computer Science Engineering student passionate about web development, software engineering, and innovative problem solving. Built using React, TypeScript and Tailwind CSS.
            </p>

            {/* Status indicators */}
            <div className="space-y-2">
              {[
                { label: 'Portfolio Status', status: 'ONLINE' },
                { label: 'GitHub Projects', status: 'ACTIVE' },
                { label: 'Learning Progress', status: '100%' },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 4px var(--neon-cyan)' }}
                  />
                  <span className="font-mono-tech text-xs" style={{ color: 'rgba(224,242,254,0.4)' }}>{s.label}</span>
                  <span className="font-mono-tech text-xs ml-auto" style={{ color: 'var(--neon-cyan)' }}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-orbitron text-xs font-bold mb-4" style={{ color: 'var(--neon-blue)' }}>
                  {category.toUpperCase()}
                </h4>
                <ul className="space-y-2">
                  {links.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-mono-tech text-xs transition-colors hover:text-cyan-400"
                        style={{ color: 'rgba(224,242,254,0.4)' }}
                        onClick={e => e.preventDefault()}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="neon-line mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono-tech text-xs" style={{ color: 'rgba(224,242,254,0.3)' }}>
            PUSHKAR GUPTA // PERSONAL PORTFOLIO
          </div>
          <div className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.4)' }}>
            DESIGNED & DEVELOPED BY <span style={{ color: 'var(--neon-cyan)' }}>PUSHKAR GUPTA</span> © 2026
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 4px var(--neon-cyan)' }}
            />
            <span className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.5)' }}>
              ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
