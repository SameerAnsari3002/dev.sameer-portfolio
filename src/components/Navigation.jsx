import React from 'react';
import './Navigation.css';

function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <h2 className="logo">dev.sameer</h2>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;