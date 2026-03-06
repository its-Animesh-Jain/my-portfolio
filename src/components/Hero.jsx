import React, { useState, useEffect } from 'react';

const TYPEWRITER_TEXT = 'Software Engineer & MCA Scholar';

const Hero = ({ onShowResume }) => {
  const [inputVal,  setInputVal]  = useState('');
  const [message,   setMessage]   = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [typed,     setTyped]     = useState('');

  /* Typewriter effect */
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(TYPEWRITER_TEXT.slice(0, i + 1));
      i++;
      if (i === TYPEWRITER_TEXT.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, []);

  /* Terminal command handler */
  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = inputVal.trim().toLowerCase();

    if (cmd === 'resume') {
      setIsSuccess(true);
      setMessage('> ACCESS GRANTED. INITIALISING VIEWER...');
      setTimeout(() => {
        onShowResume();
        setInputVal('');
        setMessage('');
        setIsSuccess(false);
      }, 1000);
    } else {
      setIsSuccess(false);
      setMessage(`> ERROR: '${inputVal}' is not a recognised command.`);
    }
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    }}>

      {/* ── Decorative corner brackets ── */}
      <div style={{
        position: 'absolute', top: '12%', right: '8%',
        width: 100, height: 100,
        borderTop:   '1px solid rgba(0,255,65,0.2)',
        borderRight: '1px solid rgba(0,255,65,0.2)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '18%', left: '5%',
        width: 70, height: 70,
        borderBottom: '1px solid rgba(201,168,76,0.25)',
        borderLeft:   '1px solid rgba(201,168,76,0.25)',
        pointerEvents: 'none',
      }} />

      <div className="container fade-in">

        {/* Tag */}
        <div className="tag">System Online // Ready</div>

        {/* ── Glitch Name ── */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: 800,
            lineHeight: 1.0,
            position: 'relative',
            zIndex: 1,
          }}>
            Animesh Jain
          </h1>
          {/* Glitch layer 1 */}
          <h1 aria-hidden="true" style={{
            position: 'absolute', top: 0, left: 0,
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: 800, lineHeight: 1.0,
            color: 'var(--green)', opacity: 0.6,
            animation: 'glitch1 3.5s infinite linear',
            pointerEvents: 'none',
          }}>
            Animesh Jain
          </h1>
          {/* Glitch layer 2 */}
          <h1 aria-hidden="true" style={{
            position: 'absolute', top: 0, left: 0,
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: 800, lineHeight: 1.0,
            color: 'var(--gold)', opacity: 0.5,
            animation: 'glitch2 2.8s infinite linear',
            pointerEvents: 'none',
          }}>
            Animesh Jain
          </h1>
        </div>

        {/* ── Typewriter subtitle ── */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
          color: 'var(--gold)',
          marginBottom: '1.5rem',
          minHeight: '2rem',
        }}>
          {typed}
          <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
        </div>

        {/* ── Description ── */}
        <p style={{
          maxWidth: 560,
          fontSize: '1.05rem',
          lineHeight: 1.8,
          color: 'rgba(232,234,208,0.6)',
          marginBottom: '2.5rem',
        }}>
          Final-year MCA student at G.H. Raisoni, Pune. I build full-stack systems,
          compress ideas into elegant algorithms, and ship real products people use.
        </p>

        {/* ── Terminal Input ── */}
        <div style={{ maxWidth: 420 }}>

          {/* Terminal window chrome */}
          <div style={{
            background: 'rgba(0,0,0,0.65)',
            border: `1px solid ${isSuccess ? 'var(--green)' : 'rgba(0,255,65,0.25)'}`,
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: isSuccess ? '0 0 24px rgba(0,255,65,0.25)' : 'none',
            transition: 'all 0.3s ease',
          }}>
            {/* Traffic lights */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '0.55rem 1rem',
              borderBottom: '1px solid rgba(0,255,65,0.08)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              {['#e74c3c', '#f1c40f', '#2ecc71'].map((c, i) => (
                <span key={i} style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: c, opacity: 0.75,
                }} />
              ))}
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                color: 'rgba(0,255,65,0.35)', marginLeft: 6,
              }}>
                terminal — animesh@portfolio
              </span>
            </div>

            {/* Input row */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '0.85rem 1rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--green)', marginRight: 10, opacity: 0.8,
                fontSize: '1rem',
              }}>❯</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'resume' and press Enter"
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--white)',
                  width: '100%',
                  caretColor: 'var(--green)',
                }}
              />
            </div>
          </div>

          {/* Status message */}
          {message && (
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              marginTop: 8,
              color: isSuccess ? 'var(--green)' : '#e74c3c',
            }}>
              {message}
            </p>
          )}

          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            marginTop: 12, color: 'rgba(0,255,65,0.3)',
          }}>
            // Hint: try typing 'resume'
          </p>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <div style={{
        position: 'absolute', bottom: '3rem', left: '50%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
        color: 'rgba(0,255,65,0.35)',
        animation: 'float 2.5s ease-in-out infinite',
      }}>
        <span>SCROLL</span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(var(--green), transparent)',
        }} />
      </div>

    </section>
  );
};

export default Hero;