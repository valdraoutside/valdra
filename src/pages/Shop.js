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
            <p className="shop-hero-tagline">you know you want to</p>
          </div>

          <div className="shop-product-mount fade-in">
            <ShopifyBuyButton productId="9079168172206" />
          </div>

          <div className="shop-product-mount fade-in">
            <ShopifyBuyButton productId="9155548676270" />
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

