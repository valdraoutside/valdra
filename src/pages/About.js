import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content fade-in">
            <h1>Welcome to VALDRA Outside</h1>
            <p className="hero-subtitle">
              Building gear and community for adventurers who go for it
            </p>
          </div>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text fade-in">
              <h2>Our Story</h2>
              <p>
                Hi! We're Lilla & Katie, best buds who started VALDRA after too many hikes 
                with busted gear and not enough products that could actually keep up.
              </p>
              <p>
                The idea first sparked while trekking through the Himalayas last April. 
                Carrying everything we needed on our backs, we realized just how much gear 
                fails when you actually need it. We wanted something better.
              </p>
              <p>
                So we made it.
              </p>
            </div>
            <div className="story-image fade-in">
              <img src="/assets/extra5.jpeg" alt="Lilla and Katie" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-vision section section-dark">
        <div className="container">
          <div className="vision-content fade-in">
            <h2>Who We're Building For</h2>
            <p className="vision-intro">
              VALDRA is for people who get outside and go for it—people who move, explore, 
              get a little scraped up, and come back for more. Whether scrambling up peaks 
              or navigating city streets, there's a place for you here.
            </p>
            
            <div className="vision-grid">
              <div className="vision-item">
                <h3>The Adventurer</h3>
                <p>
                  Those who seek the summit, the hidden trail, the next great challenge. 
                  You need gear that performs when everything depends on it.
                </p>
              </div>
              <div className="vision-item">
                <h3>The Explorer</h3>
                <p>
                  Curious souls who find adventure in unexpected places. From urban 
                  exploration to weekend camping trips.
                </p>
              </div>
              <div className="vision-item">
                <h3>The Community</h3>
                <p>
                  People who believe that the best adventures are shared. Building 
                  connections through outdoor experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-progress section">
        <div className="container">
          <div className="progress-content fade-in">
            <h2>Where We Are Now</h2>
            <div className="progress-grid">
              <div className="progress-item">
                <h3>Prototyping</h3>
                <p>
                  Currently deep in the prototyping phase, testing and refining our 
                  first product to ensure it meets our high standards.
                </p>
              </div>
              <div className="progress-item">
                <h3>Manufacturing</h3>
                <p>
                  In active conversations with manufacturers to bring our vision to life 
                  with quality and sustainability in mind.
                </p>
              </div>
              <div className="progress-item">
                <h3>Community</h3>
                <p>
                  Building a brand that grows with our community. If you're reading this, 
                  you're already part of it.
                </p>
              </div>
            </div>
            
            <div className="launch-info">
              <h3>Launch Timeline</h3>
              <p>
                Our first product is expected to launch in <strong>mid-2026</strong>. 
                We're taking the time to get it right rather than rushing to market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section section-dark">
        <div className="container">
          <div className="values-content fade-in">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h4>Quality First</h4>
                <p>We won't release anything until it meets our rigorous standards for durability and performance.</p>
              </div>
              <div className="value-item">
                <h4>Community Driven</h4>
                <p>Every decision we make considers our community of adventurers and their real-world needs.</p>
              </div>
              <div className="value-item">
                <h4>Environmental Responsibility</h4>
                <p>Planning to pursue B Corp certification to hold ourselves accountable to environmental and social standards.</p>
              </div>
              <div className="value-item">
                <h4>Authentic Innovation</h4>
                <p>We innovate to solve real problems, not just to be different. Function drives form.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container text-center">
          <div className="cta-content fade-in">
            <h2>Get Involved</h2>
            <p>
              Much love to our Western Slope peeps. Reach out if you want to get involved. ♥
            </p>
            <p className="cta-signature">
              <em>Let's get out there,</em><br />
              <strong>Lilla & Katie</strong>
            </p>
            <a href="/contact" className="btn btn-primary">Connect With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

