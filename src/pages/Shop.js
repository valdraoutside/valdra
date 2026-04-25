import React from 'react';
import ShopifyBuyButton from '../components/ShopifyBuyButton';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <section className="shop-hero">
        <div className="container">
          <div className="shop-hero-content fade-in">
            <h1>Shop the Drop</h1>
            <p className="hero-subtitle">
              We're funding our next breakthrough the best way we know how—making gear
              you'll actually want to wear outside, with unique colorways inspired by
              the friends who shape our story.
            </p>
          </div>
        </div>
      </section>

      <section className="shop-product section">
        <div className="container">
          <div className="shop-lineup fade-in">
            <div className="shop-lineup-item">
              <h3>Hoodies</h3>
              <p>
                Our hoodies are thick, 100 percent cotton with a boxy, slightly
                oversized fit that feels just as good on a sunrise mission as it does
                post send—the kind you throw on once and never really take off.
              </p>
            </div>
            <div className="shop-lineup-item">
              <h3>TrailHEAD Hat</h3>
              <p>
                Our TrailHEAD hats are lightweight, durable, breathable, and packable—
                built to sweat in, get wet, fit under helmets, and clip anywhere, with
                a lock brim that holds its shape no matter how hard you push it.
              </p>
            </div>
          </div>
          <ShopifyBuyButton productId="9079168172206" />
        </div>
      </section>

      <section className="shop-coming-soon section">
        <div className="container">
          <div className="coming-soon-content fade-in">
            <div className="coming-soon-main">
              <h2>What We're Developing</h2>
              <p>
                VALDRA is building rugged, semi-reusable "second skin" patches designed
                to protect skin from friction and hotspots before they disrupt movement
                in real-world conditions.
              </p>

              <div className="product-tease">
                <h3>How It Works</h3>
                <p>
                  It's a preventative, low profile, flexible silicone layer that sits
                  on the skin and moves with you, designed to handle friction in high
                  movement, real world conditions. Built to hold when you need it, add
                  light support, and stay comfortable over time, it's meant to be used
                  across a range of pressure points wherever skin starts to get pushed,
                  aiming for multiple uses and not intended for open wounds.
                </p>
              </div>
            </div>

            <div className="coming-soon-image">
              <img src="/assets/extra1.jpeg" alt="Product Development" />
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
            <h2>Get Notified</h2>
            <p>
              Subscribe to our Substack to be the first to know when new drops land.
              Free signup — drop your email on the next page and you're in.
            </p>
            <div className="newsletter-actions">
              <a
                href="https://valdraoutside.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Subscribe on Substack
              </a>
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

