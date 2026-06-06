import { useState, FormEvent } from 'react';
import { Send, MapPin, Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/pushkaarrrr_lyf', color: '#E4405F' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pushkar-gupta-770875282', color: '#0077B5' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Pocket34', color: '#FFFFFF' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@pushkargupta.dev', color: '#EA4335' },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--dark-surface) 0%, var(--dark-bg) 100%)' }} />
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="cyber-badge inline-block mb-4">09 // CONTACT</div>
          <h2
            className="font-orbitron font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}
          >
            CONNECT WITH PUSHKAR
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: 'rgba(224,242,254,0.55)' }}>
            Reach out through social media or send a message directly
          </p>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6 reveal-left">
            <div>
              <h3 className="font-orbitron font-bold text-lg mb-4" style={{ color: '#e0f2fe' }}>
                Get In Touch
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(224,242,254,0.6)', fontFamily: 'Rajdhani' }}>
                Connect with me on social media or reach out directly. Whether you want to collaborate on projects, discuss ideas, or just say hello!
              </p>
            </div>

            {[
              { icon: <MapPin size={16} />, label: 'Location', value: 'India' },
              { icon: <Mail size={16} />, label: 'Email', value: 'contact@pushkargupta.dev' },
              { icon: <Phone size={16} />, label: 'Comms Link', value: '+91 XXXXXXXXXX' },
            ].map(item => (
              <div key={item.label} className="glass-card rounded-xl p-4 flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: 'var(--neon-cyan)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono-tech text-xs mb-0.5" style={{ color: 'rgba(0,212,255,0.5)' }}>{item.label}</div>
                  <div className="text-sm" style={{ color: 'rgba(224,242,254,0.8)', fontFamily: 'Rajdhani' }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social Media Section */}
            <div className="pt-2">
              <div className="font-mono-tech text-xs mb-4" style={{ color: 'rgba(0,212,255,0.5)' }}>SOCIAL CHANNELS</div>
              <div className="space-y-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-cyan-400 transition-all group hover:shadow-lg"
                      style={{ border: '1px solid rgba(0,212,255,0.2)' }}
                    >
                      <style>{`
                        @keyframes icon-glow-contact-${i} {
                          0%, 100% {
                            box-shadow: 0 0 15px rgba(0,212,255,0.4), inset 0 0 15px rgba(0,212,255,0.1);
                          }
                          50% {
                            box-shadow: 0 0 30px rgba(0,212,255,0.8), inset 0 0 30px rgba(0,212,255,0.2);
                          }
                        }
                        .social-contact-icon-${i}:group-hover {
                          animation: icon-glow-contact-${i} 0.6s ease-in-out infinite;
                        }
                      `}</style>
                      <div
                        className={`social-contact-icon-${i} flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all`}
                        style={{
                          background: 'rgba(0,212,255,0.08)',
                          border: '1px solid rgba(0,212,255,0.3)',
                          color: 'var(--neon-cyan)',
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="font-orbitron text-xs font-bold" style={{ color: '#e0f2fe' }}>
                          {social.label}
                        </div>
                        <div className="font-mono-tech text-xs" style={{ color: 'rgba(0,212,255,0.5)' }}>
                          {social.label === 'Email' ? 'contact@pushkargupta.dev' : `@${social.label.toLowerCase()}`}
                        </div>
                      </div>
                      <div
                        className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--neon-cyan)' }}
                      >
                        →
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 neon-line" />

              {sent ? (
                <div className="h-64 flex flex-col items-center justify-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '2px solid var(--neon-cyan)', color: 'var(--neon-cyan)' }}
                  >
                    <Send size={28} />
                  </div>
                  <div className="font-orbitron text-sm text-center" style={{ color: 'var(--neon-cyan)' }}>
                    TRANSMISSION RECEIVED
                  </div>
                  <div className="font-mono-tech text-xs text-center" style={{ color: 'rgba(0,212,255,0.5)' }}>
                    email recieved established. Response incoming.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono-tech text-xs block mb-1.5" style={{ color: 'rgba(0,212,255,0.6)' }}>
                        DESIGNATION
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        className="cyber-input w-full px-4 py-3 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-mono-tech text-xs block mb-1.5" style={{ color: 'rgba(0,212,255,0.6)' }}>
                        CONTACT EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="cyber-input w-full px-4 py-3 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono-tech text-xs block mb-1.5" style={{ color: 'rgba(0,212,255,0.6)' }}>
                      TRANSMISSION SUBJECT
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      placeholder="Subject"
                      className="cyber-input w-full px-4 py-3 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="font-mono-tech text-xs block mb-1.5" style={{ color: 'rgba(0,212,255,0.6)' }}>
                      MESSAGE PAYLOAD
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Your message..."
                      className="cyber-input w-full px-4 py-3 rounded-lg resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-neon-solid w-full flex items-center justify-center gap-2 py-4"
                  >
                    {sending ? (
                      <>
                        <div
                          className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                          style={{ borderColor: 'rgba(0,10,20,0.5)', borderTopColor: 'transparent' }}
                        />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        SEND TRANSMISSION
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
