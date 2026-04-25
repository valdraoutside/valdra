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

          <div className="shop-lineup fade-in">
            <div className="shop-lineup-item">
              <span className="lineup-badge">Coming Soon</span>
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
        </div>
      </section>

      <section className="shop-product section">
        <div className="container">
          <ShopifyBuyButton productId="9079168172206" />
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

