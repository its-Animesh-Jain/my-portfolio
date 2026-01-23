import React, { useState } from 'react';

// We accept a new prop called 'onShowResume'
const Hero = ({ onShowResume }) => {
  const [inputVal, setInputVal] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const styles = {
    section: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      position: 'relative'
    },
    inputContainer: {
      marginTop: '2.5rem',
      position: 'relative',
      maxWidth: '400px'
    },
    commandInput: {
      width: '100%',
      padding: '1rem 1.5rem',
      fontSize: '1rem',
      fontFamily: '"Courier New", monospace',
      border: '2px solid var(--text-primary)',
      borderRadius: '8px',
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    statusMsg: {
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      fontFamily: '"Courier New", monospace',
      height: '20px',
      color: isSuccess ? '#27ae60' : '#e74c3c',
      fontWeight: 'bold'
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase();
      
      if (cmd === 'resume') {
        // Success Logic
        setIsSuccess(true);
        setMessage('> ACCESS GRANTED. OPENING VIEWER...');
        
        // Wait 1 second for effect, then open viewer
        setTimeout(() => {
          onShowResume(); // Call the function passed from App.jsx
          
          // Reset input logic
          setInputVal('');
          setMessage('');
          setIsSuccess(false);
        }, 1000);

      } else {
        // Error Logic
        setIsSuccess(false);
        setMessage(`> ERROR: Command '${inputVal}' not recognized.`);
      }
    }
  };

  return (
    <section id="home" style={styles.section}>
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
        
        {/* --- THE COMMAND INTERFACE --- */}
        <div style={styles.inputContainer}>
          <input 
            type="text" 
            placeholder="Type 'Resume' & Hit Enter..." 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            style={{
              ...styles.commandInput,
              borderColor: isSuccess ? '#27ae60' : 'var(--text-primary)',
              boxShadow: isSuccess ? '0 0 15px rgba(39, 174, 96, 0.3)' : 'none'
            }}
          />
          <div style={styles.statusMsg}>
            {message}
          </div>
        </div>
        {/* ----------------------------- */}

      </div>
    </section>
  );
};

export default Hero;