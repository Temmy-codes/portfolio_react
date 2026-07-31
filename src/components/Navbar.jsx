import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="nav-logo">Mary Esso</Link>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/dev" onClick={() => setMenuOpen(false)}>Dev</Link>
        <Link to="/content" onClick={() => setMenuOpen(false)}>Content</Link>
        <Link to="/yoga" onClick={() => setMenuOpen(false)}>Yoga with Temmy</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;