import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is VALDRA?",
      answer: "At the moment, we're a budding outdoor community rooted in Telluride, Colorado, working to connect adventurers globally. We're prototyping rugged, semi-reusable \"second skin\" patches: a preventative, low-profile silicone layer designed to protect skin from friction and hotspots before they disrupt movement in real-world conditions. Currently, we're deep in manufacturing and prototyping."
    },
    {
      id: 2,
      question: "Why are you being secretive about the product?",
      answer: "Honestly? We've poured a lot of late nights (and money) into this, and we want to get it right before we show it off. Some of it is still being tested in our kitchen. Subscribe to the Substack and you'll be the first to see it."
    },
    {
      id: 3,
      question: "Can I get involved?",
      answer: "Absolutely. Right now, involvement looks like joining our community, showing up to events, and connecting with others who love the outdoors. As launch approaches, we'll seek testers, early adopters, and advocates. Stay close, stay curious, and raise your hand when opportunities pop up."
    },
    {
      id: 4,
      question: "Does VALDRA have a mission beyond this product?",
      answer: "Yes. We want to make affordable, tough gear that keeps people out longer, and build a crew of people who love being outside as much as we do. We're also working toward B Corp certification, because the mountains we play in deserve it."
    },
    {
      id: 5,
      question: "When will your first product be available?",
      answer: "We're currently in active prototyping and will share specific launch timing as we get closer. Subscribe to our Substack to be the first to hear when it drops. We're taking the time necessary to ensure it meets our high standards for quality, durability, and functionality."
    },
    {
      id: 6,
      question: "Where are you based?",
      answer: "Telluride, Colorado. Best backyard on the planet, and the Western Slope crew that got us here."
    },
    {
      id: 7,
      question: "How can I stay updated on your progress?",
      answer: "Subscribe to our Substack at valdraoutside.substack.com for the latest updates, behind-the-scenes looks at our development process, gear recommendations, and our favorite hikes. You can also follow us on Instagram @valdraoutside, TikTok @valdraoutside, or reach out via email at hi@valdraoutside.com."
    },
    {
      id: 8,
      question: "Will you ship internationally?",
      answer: "We're still finalizing our distribution strategy, but our goal is to make our products accessible to adventurers worldwide. More details on shipping will be available as we approach our launch date."
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="faq">
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content fade-in">
            <h1>Frequently Asked Questions</h1>
            <p className="hero-subtitle">
              Everything you need to know about VALDRA and our mission
            </p>
          </div>
        </div>
      </section>

      <section className="faq-content section">
        <div className="container">
          <div className="faq-wrapper fade-in">
            <div className="faq-list">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`faq-item ${openQuestion === faq.id ? 'open' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleQuestion(faq.id)}
                    aria-expanded={openQuestion === faq.id}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {openQuestion === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-sidebar">
              <div className="faq-contact">
                <h3>Still have questions?</h3>
                <p>
                  We're here to help. Reach out and we'll get back to you as soon as possible.
                </p>
                <a href="/contact" className="btn btn-primary">Contact Us</a>
              </div>

              <div className="faq-community">
                <h3>Join the Community</h3>
                <p>
                  Connect with other adventurers and stay updated on our journey.
                </p>
                <div className="community-links">
                  <a href="https://instagram.com/valdraoutside" target="_blank" rel="noopener noreferrer" className="community-link">
                    <span>Instagram</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@valdraoutside" target="_blank" rel="noopener noreferrer" className="community-link">
                    <span>TikTok</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </a>
                  <a href="mailto:hi@valdraoutside.com" className="community-link">
                    <span>Email</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-cta section section-dark">
        <div className="container text-center">
          <div className="cta-content fade-in">
            <h2>Still Curious?</h2>
            <p>
              Come hang. We post the real updates on Substack, and the fun stuff on
              Instagram and TikTok. If you're in Telluride, let's get after it.
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

export default FAQ;

