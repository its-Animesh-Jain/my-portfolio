import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './index.css';

import MatrixRain     from './components/MatrixRain';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Skills         from './components/Skills';
import Work           from './components/Work';
import About          from './components/About';
import ResumeViewer   from './components/ResumeViewer';
import DataSecret     from './components/DataSecret';

/* ── Custom Cursor ─────────────────────────────────────────── */
function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (dot.current)  { dot.current.style.left  = e.clientX + 'px'; dot.current.style.top  = e.clientY + 'px'; }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px'; }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor"      />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

/* ── App ────────────────────────────────────────────────────── */
function App() {
  const [showResume,     setShowResume]     = useState(false);
  const [showDataSecret, setShowDataSecret] = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');

  /* Active section tracker (for navbar highlight) */
  useEffect(() => {
    const ids = ['home', 'skills', 'projects', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  /* Show DataSecret page */
  if (showDataSecret) {
    return <DataSecret goBack={() => setShowDataSecret(false)} />;
  }

  return (
    <>
      <Cursor />
      <MatrixRain />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero onShowResume={() => setShowResume(true)} />
        <Skills />
        <Work />
        <About />

        {/* ── Contact ─────────────────────────────────────── */}
        <section id="contact" className="section" style={{
          position: 'relative', zIndex: 1,
          borderTop: '1px solid rgba(0,255,65,0.1)',
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="tag">Get In Touch</div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800, lineHeight: 1.05, marginBottom: '1.5rem',
            }}>
              Let's Build<br />
              <span style={{ color: 'var(--green)' }}>Something</span> Great
            </h2>
            <p style={{
              fontSize: '1.05rem', color: 'rgba(232,234,208,0.55)',
              maxWidth: 500, margin: '0 auto 3rem', lineHeight: 1.75,
            }}>
              Open to internship opportunities, freelance projects, and interesting collaborations.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="mailto:itsanimeshjain@gmail.com" className="btn-green">
                Send Message
              </a>

              {/* Secret Data Science portal */}
              <button
                onClick={() => setShowDataSecret(true)}
                className="btn-outline"
              >
                Data Archive
              </button>
            </div>

            <div style={{
              marginTop: '5rem', paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontFamily: 'var(--font-mono)', fontSize: '.7rem',
              color: 'rgba(232,234,208,0.25)', flexWrap: 'wrap', gap: '1rem',
            }}>
              <span>© 2025 Animesh Jain</span>
              <span style={{ color: 'rgba(0,255,65,0.3)' }}>// All systems operational</span>
            </div>
          </div>
        </section>
      </main>

      {showResume && <ResumeViewer onClose={() => setShowResume(false)} />}
    </>
  );
}

export default App;