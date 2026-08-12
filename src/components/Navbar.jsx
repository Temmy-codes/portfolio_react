import { useState } from 'react';

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-logo">Mary Esso</div>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#dev" onClick={e => { e.preventDefault(); scrollTo('dev'); }}>Dev</a>
        <a href="#content" onClick={e => { e.preventDefault(); scrollTo('content'); }}>Content</a>
        <a href="#yoga" onClick={e => { e.preventDefault(); scrollTo('yoga'); }}>Yoga</a>
        <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? ' Light' : ' Dark'}
        </button>
      </div>
    
