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
              Started by best friends on a trail in Nepal. Built in Telluride.
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
                VALDRA started with two best friends, Katie and Lilla, on the Manaslu Circuit
                in Nepal in April 2025. Carrying everything on their backs, they watched their
                gear fall apart right when they needed it most. Someone had to build better
                stuff. So why not them?
              </p>
              <p>
                Back home in Telluride, they got to work. The name came out of nowhere because
                they just liked how it sounded. Then a friend told them <em>valdrá</em> is
                Spanish for "it will be worth it." That felt like a sign.
              </p>
              <p>
                VALDRA has always been built by friends, for friends. It's in every hat
                colorway inspired by someone we love, every shoot with our crew on the
                Western Slope, and every person who's helped us get here.
              </p>
              <p>
                It will be worth it.
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
              VALDRA is for people who get outside and go for it: people who move, explore, 
              get a little scraped up, and come back for more. Whether scrambling up peaks 
              or navigating city streets, there's a place for you here.
            </p>
            
            <div className="vision-grid">
              <div className="vision-item">
                <h3>The Send-It Crew</h3>
                <p>
                  Skiing 100 days a season, linking climbs, chasing the next big trip.
                  You need gear that doesn't quit before you do.
                </p>
              </div>
              <div className="vision-item">
                <h3>The Wanderer</h3>
                <p>
                  The ones who pull over at the random roadside orchard. Weekend camping,
                  the long way home, whatever looks fun.
                </p>
              </div>
              <div className="vision-item">
                <h3>The Crew</h3>
                <p>
                  The friends who belay you, film you, and won't let you quit halfway up
                  the wall.
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
                wherever skin starts to get pushed. It's built for multiple uses and isn't
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
              Iterations one and two are behind us, and round three is where it's finally
              clicking. Here's where everything stands (wallets are hurting, spirits are high).
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

      <section className="about-philosophy section">
        <div className="container">
          <div className="philosophy-content fade-in">
            <span className="section-eyebrow">Our Approach</span>
            <h2>Why We're Taking Our Time</h2>
            <div className="approach-grid">
              <div className="approach-item">
                <h4>Go Slow to Go Fast</h4>
                <p>
                  We'd rather get it right than get it out. Rushing a patch that peels
                  off mid-climb helps nobody.
                </p>
              </div>
              <div className="approach-item">
                <h4>Tested on Us First</h4>
                <p>
                  Every prototype goes skiing, hiking, and climbing with us. If it can't
                  handle sweat and friction, it doesn't make the cut.
                </p>
              </div>
              <div className="approach-item">
                <h4>Partners We Trust</h4>
                <p>
                  We work with US partners we actually know by name (shoutout Steve).
                </p>
              </div>
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
                <h4>Worth It</h4>
                <p>It's in the name. If it isn't worth it, we won't sell it.</p>
              </div>
              <div className="value-item">
                <h4>Our People First</h4>
                <p>The Western Slope crew got us here. We build with them in mind.</p>
              </div>
              <div className="value-item">
                <h4>Protect the Playground</h4>
                <p>We're working toward B Corp certification to keep ourselves honest about our impact.</p>
              </div>
              <div className="value-item">
                <h4>Solve Real Problems</h4>
                <p>We started this because our own gear failed us. Every design starts from a real blister, not a mood board.</p>
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
              <em>See you out there,</em><br />
              <strong>Katie & the VALDRA crew</strong>
            </p>
            <a href="/contact" className="btn btn-primary">Connect With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

