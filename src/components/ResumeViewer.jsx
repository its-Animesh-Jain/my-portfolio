import React from 'react';
import resumeFile from '../assets/Animesh_Jain_Resume.pdf';

const ResumeViewer = ({ onClose }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', 
      backgroundColor: 'rgba(44, 62, 80, 0.95)', // Dark overlay
      zIndex: 2000, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem'
    }}>
      
      {/* The PDF Viewer (Iframe) */}
      <iframe 
        src={resumeFile} 
        style={{ 
          width: '100%', 
          maxWidth: '900px', 
          height: '75vh', 
          border: 'none', 
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }} 
        title="Resume Viewer"
      />

      {/* Control Buttons */}
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem' }}>
        
        {/* Download Button */}
        <a 
          href={resumeFile} 
          download="Animesh_Jain_Resume.pdf"
          style={{ 
            padding: '12px 30px', 
            backgroundColor: 'var(--accent-gold)', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '50px', 
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(192, 160, 98, 0.4)',
            transition: 'transform 0.2s'
          }}
        >
          Download PDF
        </a>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          style={{ 
            padding: '12px 30px', 
            backgroundColor: 'transparent', 
            border: '2px solid white',
            color: 'white', 
            borderRadius: '50px', 
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Close Viewer
        </button>
      </div>
    </div>
  );
};

export default ResumeViewer;    