import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Header() {
  return (
    <header className="header">
      <h2>Tianchi Huang</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/background">Background</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
