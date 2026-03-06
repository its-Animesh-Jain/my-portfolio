import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    icon: '⌨',
    label: 'Core & Languages',
    items: [
      { name: 'C++ / DSA / OOP',    pct: 88 },
      { name: 'Python',              pct: 82 },
      { name: 'JavaScript ES6+',     pct: 85 },
      { name: 'SQL',                 pct: 80 },
    ],
  },
  {
    icon: '⚡',
    label: 'Full Stack Web',
    items: [
      { name: 'React.js',            pct: 85 },
      { name: 'Node.js / Express',   pct: 78 },
      { name: 'MongoDB',             pct: 75 },
      { name: 'REST APIs',           pct: 83 },
    ],
  },
  {
    icon: '☁',
    label: 'Tools & Cloud',
    items: [
      { name: 'Git & GitHub',        pct: 90 },
      { name: 'Oracle Cloud Gen AI', pct: 72 },
      { name: 'JWT Auth',            pct: 78 },
      { name: 'MySQL',               pct: 76 },
    ],
  },
];

/* ── Animated skill bar ──────────────────────────────────────── */
function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar__label">
        <span>{name}</span>
        <span className="skill-bar__pct">{pct}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: visible ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

/* ── Skills section ─────────────────────────────────────────── */
const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        <div className="tag">Technical Arsenal</div>
        <h2 className="section-title">
          Skills &amp;<br />Expertise
        </h2>

        {/* Skill cards grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={ci} className="glass-card skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon">{cat.icon}</span>
                <h3 className="skill-card__title">{cat.label}</h3>
              </div>
              {cat.items.map((item, ii) => (
                <SkillBar key={ii} name={item.name} pct={item.pct} />
              ))}
            </div>
          ))}
        </div>

        {/* Data science teaser banner */}
        <div className="ds-banner">
          <span className="ds-banner__icon">🔐</span>
          <div>
            <p className="ds-banner__label">CLASSIFIED // DATA SCIENCE MODULE</p>
            <p className="ds-banner__text">
              SQL (Advanced) · Power BI · R Language · Machine Learning · Statistics
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;