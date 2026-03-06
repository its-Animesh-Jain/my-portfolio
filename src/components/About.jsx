import React from 'react';

const EDUCATION = [
  {
    degree: 'MCA — Master of Computer Applications',
    school: 'G.H. Raisoni College, Pune',
    period: '2024 – Present',
    detail: 'CGPA: 8.04 · Focusing on Advanced Software Engineering',
  },
  {
    degree: 'BCA — Bachelor of Computer Applications',
    school: 'Vivekananda Mahavidyalaya, Raipur',
    period: '2020 – 2023',
    detail: 'Graduated with 72.77%',
  },
];

const CERTS = [
  {
    icon:  '☁',
    title: 'Oracle Cloud Infrastructure 2025',
    sub:   'Certified Generative AI Professional',
  },
  {
    icon:  '🐍',
    title: 'Python & Flask Framework',
    sub:   'Udemy Comprehensive Course',
  },
  {
    icon:  '🏐',
    title: 'Volleyball — Inter-Department',
    sub:   '2nd Place · Awarded Best Front-Zone Player',
  },
];

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">

        <div className="tag">Background</div>
        <h2 className="section-title">
          Education &amp;<br />Achievements
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
        }}>

          {/* ── Education timeline ── */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              letterSpacing: '2px', color: 'var(--green)',
              textTransform: 'uppercase', marginBottom: '2rem',
            }}>
              // Education
            </p>

            {EDUCATION.map((e, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: '1.8rem', marginBottom: '2.5rem' }}>

                {/* Dot */}
                <div style={{
                  position: 'absolute', left: 0, top: 6,
                  width: 8, height: 8,
                  background: 'var(--gold)', borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(201,168,76,0.5)',
                }} />

                {/* Vertical line between dots */}
                {i < EDUCATION.length - 1 && (
                  <div style={{
                    position: 'absolute', left: 3.5, top: 14,
                    width: 1, height: 'calc(100% + 1.5rem)',
                    background: 'rgba(201,168,76,0.18)',
                  }} />
                )}

                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>
                  {e.degree}
                </h4>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  color: 'var(--gold)', marginBottom: 5,
                }}>
                  {e.school}
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  color: 'var(--muted)', marginBottom: 6,
                }}>
                  {e.period}
                </p>
                <p style={{ fontSize: '0.88rem', color: 'rgba(232,234,208,0.55)' }}>
                  {e.detail}
                </p>
              </div>
            ))}
          </div>

          {/* ── Certifications ── */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
              letterSpacing: '2px', color: 'var(--green)',
              textTransform: 'uppercase', marginBottom: '2rem',
            }}>
              // Certifications &amp; Achievements
            </p>

            {CERTS.map((c, i) => (
              <div key={i} className="glass-card" style={{
                padding: '1.2rem 1.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
              }}>
                <span style={{ fontSize: '1.5rem', marginTop: 2, lineHeight: 1 }}>
                  {c.icon}
                </span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 5 }}>
                    {c.title}
                  </h4>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: 'rgba(232,234,208,0.45)',
                  }}>
                    {c.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;