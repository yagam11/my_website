import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Link without changing appearance */}
        <h2>Tianchi Huang 黄天驰</h2>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/background">Background</Link>
        <Link to="/projects">Projects</Link> */}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
