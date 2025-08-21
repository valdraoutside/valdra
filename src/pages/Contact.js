import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll create a mailto link since this is a static site
    const subject = encodeURIComponent(formData.subject || 'Contact from VALDRA Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hi@valdraoutside.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content fade-in">
            <h1>Get in Touch</h1>
            <p className="hero-subtitle">
              Ready to join the adventure? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-wrapper fade-in">
            <div className="contact-form-section">
              <h2>Send us a message</h2>
              <p>
                Whether you want to join our community, have questions about our products, 
                or just want to say hello, we're here to connect.
              </p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about yourself, your adventures, or how you'd like to get involved..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="contact-info">
                <h3>Connect with us</h3>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h4>Email</h4>
                      <a href="mailto:hi@valdraoutside.com">hi@valdraoutside.com</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h4>Location</h4>
                      <p>Telluride, Colorado</p>
                    </div>
                  </div>
                </div>

                <div className="social-section">
                  <h3>Follow our journey</h3>
                  <div className="social-links">
                    <a href="https://instagram.com/valdraoutside" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                      <span>Instagram</span>
                    </a>
                    <a href="https://tiktok.com/@valdraoutside" target="_blank" rel="noopener noreferrer" className="social-link">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                      </svg>
                      <span>TikTok</span>
                    </a>
                  </div>
                  <p className="social-note">
                    "This is a necessary evil, don't judge us we beg—we aren't TikTok people." 😄
                  </p>
                </div>

                <div className="newsletter-section">
                  <h3>Newsletter (Coming Soon)</h3>
                  <p>
                    We're planning weekly updates with what we're wearing, hikes we love, 
                    and behind-the-scenes looks at our development process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta section section-dark">
        <div className="container text-center">
          <div className="cta-content fade-in">
            <h2>Western Slope Love</h2>
            <p>
              Much love to our Western Slope peeps. Reach out if you want to get involved. ♥
            </p>
            <p className="community-note">
              We're building a brand that grows with our community. 
              If you're reading this, you're already part of it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

