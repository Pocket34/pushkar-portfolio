import { Activity, Wifi, Battery, Cpu, Eye, Brain } from 'lucide-react';

const WAVEFORM_HEIGHTS = [4, 8, 12, 20, 16, 20, 14, 10, 18, 22, 16, 12, 8, 14, 20, 16, 10, 14, 18, 12, 8, 16, 20, 14];

const SYSTEM_STATS = [
  { label: 'Problem Solving', value: 90, color: '#00d4ff' },
  { label: 'Web Development', value: 85, color: '#00e5ff' },
  { label: 'Teamwork', value: 88, color: '#26c6da' },
  { label: 'Learning', value: 95, color: '#4dd0e1' },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--dark-bg) 0%, rgba(0,15,30,1) 100%)' }} />
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="cyber-badge inline-block mb-4">06 // CONTROL CENTER</div>
          <h2
            className="font-orbitron font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            MY DASHBOARD
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'rgba(224,242,254,0.55)' }}>
            Overview of my skills, learning journey and development progress
            </p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </div>

        {/* Dashboard mockup */}
        <div className="reveal">
          <div
            className="dashboard-screen rounded-2xl p-6 md:p-8 relative overflow-hidden"
            style={{ maxWidth: '1000px', margin: '0 auto' }}
          >
            {/* Scan line */}
            <div className="scanline absolute inset-0 pointer-events-none" />

            {/* Top nav bar */}
            <div
              className="flex items-center justify-between mb-6 pb-4"
              style={{ borderBottom: '1px solid rgba(0,212,255,0.15)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ background: 'var(--neon-cyan)', boxShadow: '0 0 8px var(--neon-cyan)' }}
                />
                <span className="font-orbitron text-xs" style={{ color: 'var(--neon-cyan)' }}>
                  PUSHKAR PORTFOLIO v1.0
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Wifi size={14} style={{ color: 'rgba(0,212,255,0.6)' }} />
                <Battery size={14} style={{ color: 'rgba(0,212,255,0.6)' }} />
                <div className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.5)' }}>
                  [CSE-STUDENT]
                </div>
              </div>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left panel */}
              <div className="md:col-span-2 space-y-4">
                {/* Vitals panel */}
                <div
                  className="rounded-xl p-4 relative"
                  style={{ background: 'rgba(0,15,30,0.8)', border: '1px solid rgba(0,212,255,0.12)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Activity size={14} style={{ color: 'var(--neon-cyan)' }} />
                      <span className="font-orbitron text-xs" style={{ color: 'rgba(224,242,254,0.7)' }}>
                        CODING ACTIVITY
                      </span>
                    </div>
                    <div className="font-mono-tech text-xs" style={{ color: 'var(--neon-cyan)' }}>LIVE</div>
                  </div>

                  {/* Waveform */}
                  <div className="flex items-end gap-1 h-12">
                    {WAVEFORM_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm waveform-bar"
                        style={{
                          height: `${h}px`,
                          background: `linear-gradient(180deg, var(--neon-cyan), var(--neon-blue))`,
                          boxShadow: '0 0 4px var(--neon-blue)',
                          animationDelay: `${i * 0.05}s`,
                          animationDuration: `${1 + (i % 5) * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* System metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {SYSTEM_STATS.map(s => (
                    <div
                      key={s.label}
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(0,15,30,0.8)', border: '1px solid rgba(0,212,255,0.12)' }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.6)' }}>{s.label}</span>
                        <span className="font-orbitron text-xs font-bold" style={{ color: s.color }}>{s.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: 'rgba(0,212,255,0.1)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${s.value}%`,
                            background: `linear-gradient(90deg, ${s.color}, var(--neon-cyan))`,
                            boxShadow: `0 0 6px ${s.color}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data log */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(0,10,20,0.9)', border: '1px solid rgba(0,212,255,0.1)', fontFamily: 'Share Tech Mono' }}
                >
                  {[
                     { time:'20:41:03', msg:'Completed portfolio website project', ok:true },
                     { time:'20:41:07', msg:'Participated in Smart India Hackathon 2025', ok:true },
                     { time:'20:41:12', msg:'Learning React and TypeScript', ok:true },
                     { time:'20:41:19', msg:'Building modern web applications', ok:true }
                  ].map((log, i) => (
                    <div key={i} className="flex gap-3 mb-1">
                      <span className="text-xs" style={{ color: 'rgba(0,212,255,0.4)', flexShrink: 0 }}>[{log.time}]</span>
                      <span className="text-xs" style={{ color: log.ok ? 'rgba(0,255,200,0.6)' : 'rgba(255,80,80,0.7)' }}>
                        {log.ok ? '✓' : '✗'} {log.msg}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="space-y-4">
                {/* Radar */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(0,15,30,0.8)', border: '1px solid rgba(0,212,255,0.12)' }}
                >
                  <div className="font-orbitron text-xs mb-3" style={{ color: 'rgba(224,242,254,0.7)' }}>PROFILE STATUS</div>
                  <div className="relative w-32 h-32 mx-auto">
                    {[1, 2, 3].map(i => (
                      <div
                        key={i}
                        className="absolute inset-0 rounded-full"
                        style={{
                          border: `1px solid rgba(0,212,255,${0.25 - i * 0.06})`,
                          top: `${(i - 1) * 20}%`,
                          left: `${(i - 1) * 20}%`,
                          right: `${(i - 1) * 20}%`,
                          bottom: `${(i - 1) * 20}%`,
                        }}
                      />
                    ))}
                    {/* Cross lines */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-px" style={{ background: 'rgba(0,212,255,0.2)' }} />
                    </div>
                    <div className="absolute inset-0 flex justify-center">
                      <div className="h-full w-px" style={{ background: 'rgba(0,212,255,0.2)' }} />
                    </div>
                    {/* Rotating scan */}
                    <div className="absolute inset-0 radar-scan" style={{ transformOrigin: '50% 50%' }}>
                      <div
                        className="absolute w-1/2 h-px origin-right"
                        style={{
                          top: '50%',
                          right: '50%',
                          background: 'linear-gradient(90deg, transparent, var(--neon-cyan))',
                          boxShadow: '0 0 8px var(--neon-cyan)',
                        }}
                      />
                    </div>
                    {/* Blip */}
                    <div
                      className="absolute w-2 h-2 rounded-full animate-pulse"
                      style={{ top: '28%', left: '62%', background: 'var(--neon-cyan)', boxShadow: '0 0 6px var(--neon-cyan)' }}
                    />
                    <div
                      className="absolute w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ top: '65%', left: '35%', background: '#00e5ff', boxShadow: '0 0 4px #00e5ff', animationDelay: '0.5s' }}
                    />
                  </div>
                </div>

                {/* Module list */}
                <div
                  className="rounded-xl p-4 space-y-3"
                  style={{ background: 'rgba(0,15,30,0.8)', border: '1px solid rgba(0,212,255,0.12)' }}
                >
                  <div className="font-orbitron text-xs mb-2" style={{ color: 'rgba(224,242,254,0.7)' }}>SKILLS</div>
                  {[
                    { label:'Frontend', icon:<Brain size={12} />, status:'ACTIVE' },
                    { label:'React JS', icon:<Eye size={12} />, status:'LEARNING' },
                    { label:'Problem Solving', icon:<Cpu size={12} />, status:'ACTIVE' }
                  ].map(m => (
                    <div key={m.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2" style={{ color: 'rgba(0,212,255,0.7)' }}>
                        {m.icon}
                        <span className="font-mono-tech text-xs" style={{ color: 'rgba(224,242,254,0.6)' }}>{m.label}</span>
                      </div>
                      <div className="cyber-badge" style={{ fontSize: '0.5rem', color: 'rgba(0,255,200,0.8)', borderColor: 'rgba(0,255,200,0.2)' }}>
                        {m.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
