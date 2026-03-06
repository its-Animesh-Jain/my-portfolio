import React, { useState } from 'react';

const PROJECTS = [
  {
    num:      '01',
    category: 'Freelance & Live Deployments',
    title:    'Commercial Web Solutions',
    tech:     ['React', 'Hosting', 'DNS'],
    desc:     'Designed and deployed production websites for Riaan Furnitures, Bastario, and Rizvix — end-to-end from UI design to domain management.',
    link:     'https://riaanfurnitures.in',
    live:     true,
  },
  {
    num:      '02',
    category: 'Full Stack Application',
    title:    'URL Shortener Service',
    tech:     ['MERN', 'JWT', 'REST API'],
    desc:     'Scalable URL shortener with analytics, user authentication, and role-based access. Efficient click-tracking via MongoDB schemas.',
    link:     '#',
    live:     false,
  },
  {
    num:      '03',
    category: 'Health Tech',
    title:    'Diet & Health Tracker',
    tech:     ['MERN', 'Analytics', 'Auth'],
    desc:     'Calorie-tracking app with user-specific dashboards, secured API endpoints, and continuous deployment.',
    link:     '#',
    live:     false,
  },
  {
    num:      '04',
    category: 'Computer Vision',
    title:    'Object Detection System',
    tech:     ['Python', 'OpenCV', 'AI/ML'],
    desc:     'Real-time object detection system built with Python and computer vision libraries.',
    link:     '#',
    live:     false,
  },
];

/* ── Single project card ────────────────────────────────────── */
function ProjectCard({ p, index }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '2rem',
        border: `1px solid ${hover ? 'rgba(0,255,65,0.45)' : 'rgba(0,255,65,0.12)'}`,
        borderRadius: 4,
        background: hover ? 'rgba(0,255,65,0.04)' : 'rgba(255,255,255,0.02)',
        transition: 'all 0.35s ease',
        transform: hover ? 'translateY(-6px)' : 'none',
        boxShadow: hover ? '0 24px 60px rgba(0,255,65,0.08)' : 'none',
        animation: `fadeUp 0.6s ease ${index * 0.1}s both`,
        cursor: 'default',
      }}
    >
      {/* Number + Live badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '2.5rem',
          color: 'rgba(0,255,65,0.12)',
          fontWeight: 700,
          lineHeight: 1,
        }}>
          {p.num}
        </span>

        {p.live && (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '2px',
            color: 'var(--green)', border: '1px solid var(--border)',
            padding: '3px 8px', borderRadius: 2,
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--green)',
              boxShadow: '0 0 6px var(--green)',
              display: 'inline-block',
              animation: 'blink 1.5s ease infinite',
            }} />
            LIVE
          </span>
        )}
      </div>

      {/* Category */}
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
        letterSpacing: '1.5px', color: 'var(--muted)',
        textTransform: 'uppercase', marginBottom: 8,
      }}>
        {p.category}
      </p>

      {/* Title */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 12 }}>
        {p.title}
      </h3>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1rem' }}>
        {p.tech.map((t, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            padding: '3px 10px',
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.22)',
            color: 'var(--gold)', borderRadius: 2,
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.88rem', lineHeight: 1.75,
        color: 'rgba(232,234,208,0.5)', marginBottom: '1.5rem',
      }}>
        {p.desc}
      </p>

      {/* Link */}
      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
          color: 'var(--green)', letterSpacing: '1px',
          display: 'flex', alignItems: 'center', gap: 6,
          opacity: hover ? 1 : 0.4,
          transition: 'opacity 0.3s',
        }}
      >
        VIEW PROJECT <span style={{ fontSize: '1rem' }}>→</span>
      </a>
    </div>
  );
}

/* ── Work section ───────────────────────────────────────────── */
const Work = () => {
  return (
    <section id="projects" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">

        <div className="tag">Portfolio</div>
        <h2 className="section-title">
          Featured<br />Projects
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} p={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;