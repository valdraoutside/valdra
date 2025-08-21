import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <HeroCarousel />
      
      <section className="landing-intro section">
        <div className="container">
          <div className="intro-content fade-in">
            <h2>Building gear for the bold</h2>
            <p>
              We're creating products that keep up with your adventures. 
              From hiking the Himalayas to navigating city streets, VALDRA is for people 
              who get outside and go for it.
            </p>
            <div className="intro-grid">
              <div className="intro-item">
                <img src="/valdra/assets/extra1.jpeg" alt="Adventure" className="intro-image" />
                <h3>Adventure Ready</h3>
                <p>Gear designed for real-world exploration</p>
              </div>
              <div className="intro-item">
                <img src="/valdra/assets/extra2.jpeg" alt="Community" className="intro-image" />
                <h3>Community Driven</h3>
                <p>Built by adventurers, for adventurers</p>
              </div>
              <div className="intro-item">
                <img src="/valdra/assets/extra3.jpeg" alt="Innovation" className="intro-image" />
                <h3>Innovation First</h3>
                <p>Rethinking outdoor essentials from the ground up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-mission section section-dark">
        <div className="container">
          <div className="mission-content fade-in">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                VALDRA is more than equipment—it's about inspiring people to share in the adventure. 
                We're building a lasting outdoor community rooted in connection, resilience, and innovation.
              </p>
              <p>
                Our first product launches mid-2026, and we're committed to pursuing B Corp certification, 
                holding ourselves to high environmental and social standards.
              </p>
            </div>
            <div className="mission-image">
              <img src="/valdra/assets/extra4.jpeg" alt="Mission" />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-cta section">
        <div className="container text-center">
          <div className="cta-content fade-in">
            <h2>Join the Community</h2>
            <p>
              Stay connected as we build something incredible together. 
              Be the first to know when our products launch.
            </p>
            <div className="cta-buttons">
              <a href="/about" className="btn btn-primary">Learn More</a>
              <a href="/contact" className="btn">Get Updates</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

