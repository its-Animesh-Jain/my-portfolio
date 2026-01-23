import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          
          {/* Education Column */}
          <div>
            <h3 style={{ borderLeft: '4px solid var(--accent-gold)', paddingLeft: '1rem', marginBottom: '2rem' }}>
              Education
            </h3>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.2rem' }}>Master of Computer Applications (MCA)</h4>
              <p style={{ fontStyle: 'italic', color: '#666' }}>G.H. Raisoni College, Pune (2024 - Present)</p>
              <p>CGPA: 8.04 • Focusing on Advanced Software Engineering</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem' }}>Bachelor of Computer Applications (BCA)</h4>
              <p style={{ fontStyle: 'italic', color: '#666' }}>Vivekananda Mahavidyalaya, Raipur (2020 - 2023)</p>
              <p>Graduated with 72.77%</p>
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 style={{ borderLeft: '4px solid var(--accent-gold)', paddingLeft: '1rem', marginBottom: '2rem' }}>
              Certifications & Achievements
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Oracle Cloud Infrastructure 2025</strong><br/>
                <span style={{ color: '#666' }}>Certified Generative AI Professional</span>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Python & Flask Framework</strong><br/>
                <span style={{ color: '#666' }}>Udemy Comprehensive Course</span>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Volleyball (Inter-Department)</strong><br/>
                <span style={{ color: '#666' }}>Secured 2nd Place & Awarded Best Front-Zone Player</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;