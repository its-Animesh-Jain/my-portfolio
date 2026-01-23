import React, { useEffect, useRef } from 'react';
// Import your video file
import matrixVideo from '../assets/mylivewallpapers-com-Matrix-EDIT.mp4';

const DataSecret = ({ goBack }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  const skills = [
    { name: "SQL (Advanced)", level: "Query Optimization, CTEs, Windows Functions" },
    { name: "Power BI", level: "DAX, Dashboarding, Data Visualization" },
    { name: "R Language", level: "Statistical Analysis, ggplot2" },
    { name: "Machine Learning", level: "Scikit-Learn, Pandas, Predictive Models" },
    { name: "Statistics", level: "Hypothesis Testing, Regression Analysis" }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#0F0', fontFamily: 'Courier New, monospace' }}>
      
      {/* BACKGROUND VIDEO */}
      <video 
        ref={videoRef}
        loop 
        muted 
        playsInline
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          top: 0,
          left: 0,
          opacity: 0.8
        }}
      >
        <source src={matrixVideo} type="video/mp4" />
      </video>
      
      {/* CONTENT OVERLAY */}
      <div className="container" style={{ padding: '5rem 2rem', position: 'relative', zIndex: 10 }}>
        
        {/* HEADER - NEW GLOWING STYLE */}
        <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ 
                fontSize: '3rem', 
                color: '#fff', 
                textShadow: '0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0', 
                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                border: '2px solid #0f0', 
                display: 'inline-block', 
                padding: '1rem 2rem',
                letterSpacing: '2px'
            }}>
            SYSTEM_ROOT: DATA_ACCESS
            </h1>
            
            <br />
            
            <p style={{ 
                marginTop: '1rem', 
                color: '#0f0', 
                fontWeight: 'bold', 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                display: 'inline-block', 
                padding: '0.5rem 1rem',
                borderLeft: '4px solid #0f0' 
            }}>
            {/* FIX: Used &gt; instead of > to prevent JSX error */}
            &gt; User: Animesh_Jain // Access_Level: ADMIN
            </p>
        </div>

        {/* The Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ 
              border: '1px solid #0F0', 
              padding: '1.5rem', 
              background: 'rgba(0, 0, 0, 0.9)', 
              boxShadow: '0 0 15px rgba(0, 255, 0, 0.2)',
              backdropFilter: 'blur(3px)',
              transition: 'transform 0.3s',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.6)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.2)';
            }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff', textShadow: '0 0 5px #0f0' }}>
                 {/* FIX: Used &gt; here as well for safety */}
                {`> ${skill.name}`}
              </h3>
              <p style={{ color: '#0f0', opacity: 0.9 }}>{`// ${skill.level}`}</p>
            </div>
          ))}
        </div>

        {/* Exit Button */}
        <button 
          onClick={goBack}
          style={{
            marginTop: '4rem',
            background: 'black',
            border: '2px solid #0F0',
            color: '#0F0',
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            cursor: 'pointer',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            boxShadow: '0 0 15px #0F0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
          onMouseOver={(e) => { 
              e.target.style.background = '#0F0'; 
              e.target.style.color = '#000'; 
              e.target.style.boxShadow = '0 0 30px #0F0';
          }}
          onMouseOut={(e) => { 
              e.target.style.background = 'black'; 
              e.target.style.color = '#0F0'; 
              e.target.style.boxShadow = '0 0 15px #0F0';
          }}
        >
          [ EXIT SYSTEM ]
        </button>
      </div>
    </div>
  );
};

export default DataSecret;