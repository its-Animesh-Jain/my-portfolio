import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; // Updated
import Work from './components/Work';     // Updated
import About from './components/About';   // New
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <About />
      
      {/* Contact Section using Resume Email [cite: 4] */}
      <section id="contact" style={{ textAlign: 'center', padding: '4rem 0', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '2rem' }}>Get In Touch</h2>
        <p style={{ margin: '1rem 0', color: '#555' }}>
          Currently available for SDE Internships and Full-time roles.
        </p>
        <a href="mailto:itsanimeshjain@gmail.com" style={{ 
             display: 'inline-block',
             marginTop: '1rem',
             padding: '1rem 2rem',
             backgroundColor: 'var(--text-primary)',
             color: '#fff', 
             textDecoration: 'none',
             fontWeight: 'bold',
             borderRadius: '4px'
        }}>
          Say Hello
        </a>
      </section>
    </div>
  );
}

export default App;   