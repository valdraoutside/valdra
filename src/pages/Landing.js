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
            <h2>Gear that keeps up</h2>
            <p>
              We're building gear for the people who go big, get a little scraped up,
              and come back for more. From the Manaslu Circuit to a sunset lap on Mill
              Creek, VALDRA is for anyone who'd rather be outside.
            </p>
            <div className="intro-grid">
              <div className="intro-item">
                <img src="/assets/extra1.jpeg" alt="Adventure" className="intro-image" />
                <h3>Trail Tested</h3>
                <p>Tried on our own skis, bikes, and climbing walls before it's ever sold to you</p>
              </div>
              <div className="intro-item">
                <img src="/assets/extra2.jpeg" alt="Community" className="intro-image" />
                <h3>Built by Friends</h3>
                <p>Every colorway is inspired by someone we love</p>
              </div>
              <div className="intro-item">
                <img src="/assets/extra3.jpeg" alt="Innovation" className="intro-image" />
                <h3>Built from Scratch</h3>
                <p>A lot of trial and error and a kitchen turned into a lab</p>
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
                VALDRA is gear, but it's mostly people. The friends who let us film them, the
                locals who bought out our first drops, the folks who sat down with us when we
                had no idea what we were doing. We want to build something that lasts as long
                as they do. It will be worth it.
              </p>
              <p>
                We're working toward B Corp certification, because the places we play in are
                worth protecting.
              </p>
            </div>
            <div className="mission-image">
              <img src="/assets/extra4.jpeg" alt="Mission" />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-cta section">
        <div className="container text-center">
          <div className="cta-content fade-in">
            <h2>Come Along for the Ride</h2>
            <p>
              We write about the wins, the flops, and everything in between on Substack.
              Subscribe and you'll hear about new drops first.
            </p>
            <div className="cta-buttons">
              <a href="/about" className="btn btn-primary">Learn More</a>
              <a
                href="https://valdraoutside.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Subscribe on Substack
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

