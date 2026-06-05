import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#technologies' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Features', href: '#features' },
  { label: 'Creator', href: '#creator-profile' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(2,4,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(0,212,255,0.12)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? '0 4px 30px rgba(0,0,0,0.5)'
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <button
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span
              className="font-orbitron font-black text-xs tracking-widest"
              style={{
                color: 'var(--neon-cyan)',
                textShadow: '0 0 10px rgba(0,255,240,0.4)',
              }}
            >
              PUSHKAR GUPTA
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className="nav-link"
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              className="btn-neon py-2 px-5 text-xs"
              onClick={() => scrollTo('#contact')}
            >
              JOIN NOW
            </button>
          </div>

          <button
            className="md:hidden"
            style={{ color: 'var(--neon-cyan)' }}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {open && (
        <div
          className="md:hidden px-4 pb-6 pt-2"
          style={{
            background: 'rgba(2,4,8,0.97)',
            borderBottom: '1px solid rgba(0,212,255,0.12)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className="block w-full text-left nav-link py-3"
              style={{
                borderBottom: '1px solid rgba(0,212,255,0.06)',
              }}
              onClick={() => scrollTo(item.href)}
            >
              {item.label}
            </button>
          ))}

          <button
            className="btn-neon mt-4 w-full py-3"
            onClick={() => scrollTo('#contact')}
          >
            JOIN NOW
          </button>
        </div>
      )}
    </nav>
  );
}