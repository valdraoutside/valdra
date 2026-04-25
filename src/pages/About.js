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

      <section className="about-patch section">
        <div className="container">
          <div className="patch-intro fade-in">
            <span className="section-eyebrow">The Product</span>
            <h2>Meet the Patch</h2>
            <p className="patch-lead">
              VALDRA is building rugged, semi-reusable "second skin" patches designed to
              protect skin from friction and hotspots before they disrupt movement in
              real-world conditions.
            </p>
          </div>

          <div className="patch-detail fade-in">
            <div className="patch-detail-text">
              <h3>How It Works</h3>
              <p>
                It's a preventative, low profile, flexible silicone layer that sits on
                the skin and moves with you, designed to handle friction in high
                movement, real world conditions.
              </p>
              <p>
                Built to hold when you need it, add light support, and stay comfortable
                over time, it's meant to be used across a range of pressure points
                wherever skin starts to get pushed—aiming for multiple uses and not
                intended for open wounds.
              </p>
            </div>
            <div className="patch-detail-image">
              <img src="/assets/extra2.jpeg" alt="VALDRA patch in development" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-progress section">
        <div className="container">
          <div className="progress-content fade-in">
            <span className="section-eyebrow">Where We Are Now</span>
            <h2>Prototype Progress</h2>
            <p className="progress-lead">
              We've pushed through iterations one and two and are now deep in our third,
              where things are finally clicking. Here's where each piece stands today.
            </p>

            <div className="milestone-grid">
              <div className="milestone">
                <div className="milestone-status milestone-done">Complete</div>
                <h4>Iterations 1 & 2</h4>
                <p>
                  Two full prototype rounds in the rear-view, each one teaching us
                  what to keep and what to throw out.
                </p>
              </div>

              <div className="milestone">
                <div className="milestone-status milestone-active">Dialed In</div>
                <h4>Custom Silicone</h4>
                <p>
                  Landed on a bespoke silicone formulation that performs exactly the
                  way we need it to on skin and through movement.
                </p>
              </div>

              <div className="milestone">
                <div className="milestone-status milestone-active">At Manufacturer</div>
                <h4>Injection Molds</h4>
                <p>
                  Patch silhouettes finalized, and the injection molds we invested in
                  now live with our manufacturing partner.
                </p>
              </div>

              <div className="milestone">
                <div className="milestone-status milestone-next">Up Next</div>
                <h4>Adhesives Partnership</h4>
                <p>
                  Teaming up with a leading adhesives company that's taken a real
                  interest in this product and is developing a tailored solution with us.
                </p>
              </div>
            </div>

            <div className="approach-block">
              <h3 className="approach-heading">Why We're Taking Our Time</h3>
              <div className="approach-grid">
                <div className="approach-item">
                  <h4>Quality Over Speed</h4>
                  <p>
                    We'd rather take the time to create something exceptional than rush
                    a mediocre product to market. Every detail matters.
                  </p>
                </div>
                <div className="approach-item">
                  <h4>Real-World Testing</h4>
                  <p>
                    Our products need to perform in the most demanding conditions. We
                    test extensively to ensure reliability when it counts.
                  </p>
                </div>
                <div className="approach-item">
                  <h4>Sustainable Production</h4>
                  <p>
                    Finding the right manufacturing partners who align with our values
                    of environmental and social responsibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="progress-cta">
              <p>
                Want the full behind-the-scenes? Subscribe to our Substack for build
                updates, gear stories, and dispatches from the trail.
              </p>
              <a
                href="https://valdraoutside.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Subscribe on Substack
              </a>
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

