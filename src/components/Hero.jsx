import React from 'react';

const Hero = () => {
  const styles = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left'
  };

  return (
    <section id="home" style={styles}>
      <div className="container fade-in">
        <p style={{ color: 'var(--accent-gold)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Hello, I am
        </p>
        <h1 style={{ fontSize: '5rem', margin: '1rem 0', lineHeight: 1.1 }}>
          Animesh Jain
        </h1>
        <h3 style={{ fontSize: '2rem', color: 'var(--text-secondary)', fontWeight: 300 }}>
          Software Engineer & MCA Scholar
        </h3>
        <p style={{ maxWidth: '600px', marginTop: '1.5rem', fontSize: '1.1rem' }}>
          Final-year student at G.H. Raisoni, Pune. Specializing in C++, Data Structures, and building modern digital experiences.
        </p>
        <div style={{ marginTop: '3rem' }}>
           {/* Simple elegant button */}
           <a href="#contact" style={{ 
             padding: '1rem 2.5rem', 
             backgroundColor: 'var(--text-primary)', 
             color: '#fff', 
             textDecoration: 'none',
             borderRadius: '50px',
             fontWeight: 'bold'
           }}>
             Get in Touch
           </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;