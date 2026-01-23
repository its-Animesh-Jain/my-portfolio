import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from './components/Work';
import About from './components/About';
import DataSecret from './components/DataSecret';
import ResumeViewer from './components/ResumeViewer'; // Import the new Viewer
import './App.css';

function App() {
  const [isDataMode, setIsDataMode] = useState(false);
  const [isResumeMode, setIsResumeMode] = useState(false); // New State

  // 1. Check for Data Mode (Matrix)
  if (isDataMode) {
    return <DataSecret goBack={() => setIsDataMode(false)} />;
  }

  return (
    <div>
      {/* 2. Check for Resume Mode (Overlay) */}
      {isResumeMode && (
        <ResumeViewer onClose={() => setIsResumeMode(false)} />
      )}

      <Navbar />
      
      {/* Pass the function to open Resume Mode down to Hero */}
      <Hero onShowResume={() => setIsResumeMode(true)} />
      
      <Skills />
      
      {/* THE SECRET SQL TRIGGER */}
      <div style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: '#f9f9f9' }}>
        <div 
          onClick={() => setIsDataMode(true)}
          style={{ 
            fontFamily: '"Courier New", monospace', 
            background: '#2d2d2d', 
            color: '#f8f8f2', 
            padding: '1.5rem', 
            display: 'inline-block', 
            borderRadius: '8px', 
            cursor: 'pointer', 
            border: '1px dashed #666',
            maxWidth: '90%'
          }}
        >
          <span style={{ color: '#ff79c6' }}>SELECT</span> * <span style={{ color: '#ff79c6' }}>FROM</span> Hidden_Talents <br/>
          <span style={{ color: '#ff79c6' }}>WHERE</span> passion = <span style={{ color: '#f1fa8c' }}>'Data Analysis'</span>;
          <br/><br/>
          <span style={{ color: '#6272a4' }}>-- the game is not over yet , im into data analysis too... (Click to Run)</span>
        </div>
      </div>

      <Work />
      <About />
      
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