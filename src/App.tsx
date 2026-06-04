import { useEffect, useRef, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Particles from './components/Particles';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Statistics from './components/Statistics';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import CreatorProfile from './components/CreatorProfile';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  // Custom cursor
  useEffect(() => {
    if (!loaded) return;
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    let rafId: number;
    const animate = () => {
      ringX += (dotX - ringX) * 0.15;
      ringY += (dotY - ringY) * 0.15;
      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [loaded]);

  // Mouse glow effect
  useEffect(() => {
    if (!loaded) return;
    const glow = mouseGlowRef.current;
    if (!glow) return;
    const onMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [loaded]);

  // Scroll reveal
  useEffect(() => {
    if (!loaded) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {loaded && (
        <>
          {/* Custom cursor */}
          <div ref={cursorDotRef} className="cursor-dot" />
          <div ref={cursorRingRef} className="cursor-ring" />

          {/* Mouse glow overlay */}
          <div ref={mouseGlowRef} className="mouse-glow" />

          {/* Floating particles */}
          <Particles />

          {/* Navigation */}
          <Navbar />

          {/* Page content */}
          <main>
            <Hero />
            <About />
            <Technologies />
            <Statistics />
            <Timeline />
            <Features />
            <Dashboard />
            <CreatorProfile />
            <Testimonials />
            <Team />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
