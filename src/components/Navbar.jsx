import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Create a small css file for nav specific layout if needed, or use inline styles below

const Navbar = () => {
  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'var(--nav-bg)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    padding: '1rem 0'
  };

  const linkStyle = {
    margin: '0 1.5rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'var(--text-primary)'
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>AJ.</h2>
        <div>
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link 
              key={item} 
              to={item.toLowerCase()} 
              smooth={true} 
              duration={500} 
              style={linkStyle}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;