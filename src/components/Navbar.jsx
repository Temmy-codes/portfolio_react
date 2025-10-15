import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent page scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">TEMMY</h2>

          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") setIsOpen(!isOpen); }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* overlay */}
      <div
        className={`overlay ${isOpen ? "visible" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* side nav */}
      <aside className={`side-nav ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <ul>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#portfolio" onClick={handleLinkClick}>Portfolio</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#testimonials" onClick={handleLinkClick}>Testimonials</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </aside>
    </>
  );
}
