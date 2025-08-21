import React from 'react';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <section className="shop-hero">
        <div className="container">
          <div className="shop-hero-content fade-in">
            <h1>Shop the Drop</h1>
            <p className="hero-subtitle">
              Our first product launches mid-2026. Be the first to know when it's ready.
            </p>
          </div>
        </div>
      </section>

      <section className="shop-coming-soon section">
        <div className="container">
          <div className="coming-soon-content fade-in">
            <div className="coming-soon-main">
              <h2>Coming Soon</h2>
              <p>
                We're currently deep in prototyping and manufacturing conversations 
                to bring our first product to life. Quality takes time, and we're 
                committed to getting it right.
              </p>
              
              <div className="product-tease">
                <h3>What We're Building</h3>
                <p>
                  A semi-reusable first-aid apparatus that we believe belongs in 
                  every dopp kit—outdoorsperson or not. Designed for durability, 
                  functionality, and ease of use when you need it most.
                </p>
              </div>

              <div className="timeline">
                <h3>Expected Launch</h3>
                <div className="timeline-item">
                  <div className="timeline-date">Mid-2026</div>
                  <div className="timeline-content">
                    <h4>Product Launch</h4>
                    <p>Our first product will be available for purchase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="coming-soon-image">
              <img src="/valdra/assets/extra1.jpeg" alt="Product Development" />
              <div className="image-overlay">
                <span>In Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-process section section-dark">
        <div className="container">
          <div className="process-content fade-in">
            <h2>Our Development Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">01</div>
                <h3>Research & Design</h3>
                <p>
                  Understanding real-world needs through extensive field testing 
                  and community feedback.
                </p>
                <div className="step-status completed">✓ Completed</div>
              </div>
              
              <div className="process-step">
                <div className="step-number">02</div>
                <h3>Prototyping</h3>
                <p>
                  Creating and testing multiple iterations to ensure durability 
                  and functionality in extreme conditions.
                </p>
                <div className="step-status active">⚡ In Progress</div>
              </div>
              
              <div className="process-step">
                <div className="step-number">03</div>
                <h3>Manufacturing</h3>
                <p>
                  Partnering with ethical manufacturers who share our commitment 
                  to quality and sustainability.
                </p>
                <div className="step-status active">⚡ In Progress</div>
              </div>
              
              <div className="process-step">
                <div className="step-number">04</div>
                <h3>Launch</h3>
                <p>
                  Bringing our first product to market with the confidence that 
                  it meets our rigorous standards.
                </p>
                <div className="step-status pending">⏳ Pending</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-philosophy section">
        <div className="container">
          <div className="philosophy-content fade-in">
            <h2>Why We're Taking Our Time</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <h3>Quality Over Speed</h3>
                <p>
                  We'd rather take the time to create something exceptional than 
                  rush a mediocre product to market. Every detail matters.
                </p>
              </div>
              
              <div className="philosophy-item">
                <h3>Real-World Testing</h3>
                <p>
                  Our products need to perform in the most demanding conditions. 
                  We test extensively to ensure reliability when it counts.
                </p>
              </div>
              
              <div className="philosophy-item">
                <h3>Sustainable Production</h3>
                <p>
                  Finding the right manufacturing partners who align with our 
                  values of environmental and social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-newsletter section section-dark">
        <div className="container">
          <div className="newsletter-content fade-in">
            <h2>Stay Updated</h2>
            <p>
              Be the first to know when our products launch, get updates on our 
              development process, and join our community of adventurers.
            </p>
            <div className="newsletter-actions">
              <a href="/contact" className="btn btn-primary">Get Notified</a>
              <a href="/faq" className="btn">Learn More</a>
            </div>
            
            <div className="social-links">
              <h3>Follow Our Journey</h3>
              <div className="social-buttons">
                <a href="https://instagram.com/valdraoutside" target="_blank" rel="noopener noreferrer" className="social-btn">
                  Instagram
                </a>
                <a href="https://tiktok.com/@valdraoutside" target="_blank" rel="noopener noreferrer" className="social-btn">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

