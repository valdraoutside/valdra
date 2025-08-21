import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/valdra/logo.png" alt="VALDRA" className="logo" />
          <span className="logo-text">VALDRA</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/shop" 
            className={`nav-link ${isActive('/shop') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            to="/faq" 
            className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

