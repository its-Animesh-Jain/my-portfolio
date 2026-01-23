import React from 'react';

const Work = () => {
  const projects = [
    {
      category: "Freelance & Live Deployments",
      title: "Commercial Web Solutions",
      tech: "React • Hosting • DNS Management",
      // Mentioning your specific domain names
      desc: "Designed and deployed live production websites for clients including Riaan Furnitures, Bastario, and Rizvix. Managed end-to-end development from UI design to domain setup.",
      link: "https://riaanfurnitures.in" 
    },
    {
      category: "Full Stack Application",
      title: "URL Shortener Service",
      tech: "MERN Stack • JWT • REST API",
      // Details from Resume [cite: 18, 19]
      desc: "Built a scalable URL shortener with analytics, user authentication (JWT), and role-based access. Implemented efficient click-tracking schemas in MongoDB.",
      link: "#"
    },
    {
      category: "Health Tech",
      title: "Diet & Health Tracker",
      tech: "MERN Stack • Analytics",
      // Details from Resume [cite: 22, 23]
      desc: "Developed a calorie-tracking application with user-specific dashboards. Secured API endpoints and deployed for continuous availability.",
      link: "#"
    }
  ];

  return (
    <section id="projects" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Featured Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((p, index) => (
            <div key={index} style={{ 
              padding: '2rem', 
              border: '1px solid #eee', 
              borderRadius: '8px',
              backgroundColor: '#fafafa',
              transition: 'transform 0.3s'
            }}>
              <span style={{ 
                fontSize: '0.8rem', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                color: '#888',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                {p.category}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--accent-gold)', fontWeight: 'bold', marginBottom: '1rem', fontSize: '0.9rem' }}>
                {p.tech}
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer" style={{ 
                textDecoration: 'none', 
                color: 'var(--text-primary)', 
                borderBottom: '1px solid var(--accent-gold)',
                paddingBottom: '2px'
              }}>
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;