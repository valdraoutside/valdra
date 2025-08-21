import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is VALDRA?",
      answer: "At the moment, we're a budding outdoor community rooted in Telluride, Colorado. We aim to connect adventurers globally. In mid-2026, we'll launch a semi-reusable first-aid apparatus we believe belongs in every dopp kit—outdoorsperson or not. Currently, we're deep in manufacturing and prototyping."
    },
    {
      id: 2,
      question: "Why are you being secretive about the product?",
      answer: "We're in an early prototyping stage where every small decision matters. By keeping details quiet, we protect the innovation, ensure proper testing, and give the launch its best chance to succeed. The secrecy isn't hype—it's integrity. You'll be the first to know when it's ready."
    },
    {
      id: 3,
      question: "Can I get involved?",
      answer: "Absolutely. Right now, involvement looks like joining our community, showing up to events, and connecting with others who love the outdoors. As launch approaches, we'll seek testers, early adopters, and advocates. Stay close, stay curious, and raise your hand when opportunities pop up."
    },
    {
      id: 4,
      question: "Does VALDRA have a mission beyond this product?",
      answer: "Yes. Our mission is to build a lasting outdoor community rooted in connection, resilience, and innovation. We aim to design affordable, durable gear that empowers people to stay out longer and access inspiring outdoor spaces. We also plan to pursue B Corp certification, holding ourselves to high environmental and social standards. At its core, VALDRA is about more than equipment—it's about inspiring people to share in the adventure."
    },
    {
      id: 5,
      question: "When will your first product be available?",
      answer: "Our first product is expected to launch in mid-2026. We're taking the time necessary to ensure it meets our high standards for quality, durability, and functionality."
    },
    {
      id: 6,
      question: "Where are you based?",
      answer: "We're rooted in Telluride, Colorado, but we're building a global community of outdoor enthusiasts. Our Western Slope roots keep us grounded in authentic outdoor culture."
    },
    {
      id: 7,
      question: "How can I stay updated on your progress?",
      answer: "Follow us on Instagram @valdraoutside, TikTok @valdraoutside, or reach out via email at hi@valdraoutside.com. We're also planning a newsletter with weekly updates, gear recommendations, and our favorite hikes."
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
            <h2>Ready to Join the Adventure?</h2>
            <p>
              Be part of our community and get early access to updates, 
              events, and product launches.
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

export default FAQ;

