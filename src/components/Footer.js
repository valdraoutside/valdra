import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="VALDRA" className="footer-logo-img" />
              <span className="footer-logo-text">VALDRA</span>
            </div>
            <p className="footer-tagline">Recover faster. Live wilder.</p>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="https://instagram.com/valdraoutside" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://tiktok.com/@valdraoutside" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
              <a href="mailto:hi@valdraoutside.com">
                Email
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Location</h4>
            <p>Telluride, Colorado</p>
            <p className="footer-community">Building a global outdoor community</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 VALDRA Outside. All rights reserved.</p>
          <p className="footer-launch">First product launching mid-2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

