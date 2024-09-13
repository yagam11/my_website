import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Header() {
  return (
    <header className="header">
      <h2 style={{ marginLeft: '20px', fontFamily: "'Montserrat', sans-serif" }}>Tianchi Huang</h2>
      <nav style={{ marginRight: '20px' }}>
        <Link to="/" style={{ margin: '10px' }}>Home</Link>
        <Link to="/projects" style={{ margin: '10px' }}>Projects</Link>
        <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
