const TIMELINE_EVENTS = [
  {
    year: '2025',
    title: 'Neural Interface Genesis',
    desc: 'First commercially viable brain-computer interfaces emerge, enabling direct neural communication with digital systems. 1,000 early adopters experience seamless human-AI collaboration.',
    tag: 'CURRENT ERA',
    color: '#00d4ff',
    items: ['BCI consumer launch', 'Neural OS v1.0', '1000+ users'],
  },
  {
    year: '2030',
    title: 'The Augmented Decade',
    desc: 'Mass adoption of exoskeletal enhancements and neural augments. Cognitive bandwidth expands 10x. The first cyborg Olympic games. Neural mesh networks span 50 cities worldwide.',
    tag: 'NEAR FUTURE',
    color: '#00e5ff',
    items: ['Exo-suits mainstream', 'Neural Olympics', '50 city mesh'],
  },
  {
    year: '2040',
    title: 'Consciousness Convergence',
    desc: 'Quantum neural processors blur the line between biological and digital thought. Collective intelligence networks emerge. The first fully synthetic consciousness passes the Turing Evolution Test.',
    tag: 'CONVERGENCE',
    color: '#26c6da',
    items: ['Synthetic consciousness', 'Quantum minds', 'Hive networks'],
  },
  {
    year: '2050',
    title: 'Cyborg Future: Realized',
    desc: 'Humanity transcends biological limitations entirely. Post-human civilization spans solar system. Neural uploads achieve true immortality. The Cyborg Age is complete — the Techfest vision fulfilled.',
    tag: 'FUTURE VISION',
    color: '#4dd0e1',
    items: ['Post-human era', 'Solar civilization', 'Digital immortality'],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-surface) 100%)' }}
      />
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">04 // TIMELINE</div>
          <h2
            className="font-orbitron font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            EVOLUTION TIMELINE
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central spine */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-line hidden md:block"
          />

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={event.year} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center reveal">
                  {/* Left content (even) or spacer (odd) */}
                  <div className={isLeft ? 'md:text-right' : 'hidden md:block'}>
                    {isLeft && (
                      <div className="glass-card rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(180deg, ${event.color}, transparent)` }} />
                        <div className="cyber-badge mb-2 inline-block" style={{ color: event.color, borderColor: `${event.color}40` }}>{event.tag}</div>
                        <h3 className="font-orbitron font-bold text-sm mb-2" style={{ color: event.color }}>{event.title}</h3>
                        <p className="text-sm mb-3 leading-relaxed" style={{ color: 'rgba(224,242,254,0.6)', fontFamily: 'Rajdhani' }}>{event.desc}</p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {event.items.map(item => (
                            <span key={item} className="font-mono-tech text-xs px-2 py-0.5" style={{ background: `${event.color}10`, border: `1px solid ${event.color}30`, color: event.color }}>{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center year marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-10">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-orbitron text-xs font-black"
                      style={{
                        background: `radial-gradient(circle, ${event.color}30, ${event.color}10)`,
                        border: `2px solid ${event.color}`,
                        boxShadow: `0 0 15px ${event.color}60`,
                        color: event.color,
                      }}
                    >
                      {event.year.slice(2)}
                    </div>
                  </div>

                  {/* Mobile year badge */}
                  <div className="md:hidden flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-orbitron text-xs font-black flex-shrink-0"
                      style={{
                        background: `${event.color}20`,
                        border: `2px solid ${event.color}`,
                        color: event.color,
                      }}
                    >
                      {event.year.slice(2)}
                    </div>
                    <div className="font-orbitron text-lg font-black" style={{ color: event.color }}>{event.year}</div>
                  </div>

                  {/* Right content (odd) or spacer (even) */}
                  <div className={!isLeft ? '' : 'hidden md:block'}>
                    {/* Right year label */}
                    {!isLeft && (
                      <div>
                        <div
                          className="font-orbitron text-4xl font-black mb-4 hidden md:block"
                          style={{ color: event.color, textShadow: `0 0 20px ${event.color}60`, opacity: 0.4 }}
                        >
                          {event.year}
                        </div>
                        <div className="glass-card rounded-xl p-6 relative overflow-hidden group">
                          <div className="absolute top-0 left-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(180deg, ${event.color}, transparent)` }} />
                          <div className="cyber-badge mb-2 inline-block" style={{ color: event.color, borderColor: `${event.color}40` }}>{event.tag}</div>
                          <h3 className="font-orbitron font-bold text-sm mb-2" style={{ color: event.color }}>{event.title}</h3>
                          <p className="text-sm mb-3 leading-relaxed" style={{ color: 'rgba(224,242,254,0.6)', fontFamily: 'Rajdhani' }}>{event.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {event.items.map(item => (
                              <span key={item} className="font-mono-tech text-xs px-2 py-0.5" style={{ background: `${event.color}10`, border: `1px solid ${event.color}30`, color: event.color }}>{item}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {isLeft && (
                      <div
                        className="font-orbitron text-4xl font-black hidden md:block text-left"
                        style={{ color: event.color, textShadow: `0 0 20px ${event.color}60`, opacity: 0.4 }}
                      >
                        {event.year}
                      </div>
                    )}
                  </div>

                  {/* Mobile card (all items) */}
                  {!isLeft && (
                    <div className="md:hidden glass-card rounded-xl p-6">
                      <div className="cyber-badge mb-2 inline-block" style={{ color: event.color, borderColor: `${event.color}40` }}>{event.tag}</div>
                      <h3 className="font-orbitron font-bold text-sm mb-2" style={{ color: event.color }}>{event.title}</h3>
                      <p className="text-sm mb-3" style={{ color: 'rgba(224,242,254,0.6)', fontFamily: 'Rajdhani' }}>{event.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
