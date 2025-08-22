import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: [
        '/assets/hero1.jpeg',
        '/assets/hero2.jpeg',
        '/assets/hero3.jpeg'
      ],
      title: 'VALDRA OUTSIDE.',
      subtitle: '',
      button: null
    },
    {
      id: 2,
      images: [
        '/assets/hero4.jpeg',
        '/assets/hero5.jpeg',
        '/assets/hero6.jpeg'
      ],
      title: 'valdrá: it will be worth it',
      subtitle: '',
      button: {
        text: 'About Us',
        link: '/about'
      }
    },
    {
      id: 3,
      images: [
        '/assets/hero7.jpeg',
        '/assets/hero8.jpeg',
        '/assets/hero9.jpeg'
      ],
      title: 'Recover faster. Live wilder.',
      subtitle: 'First product coming mid-2026',
      button: {
        text: 'Shop the Drop',
        link: '/shop'
      }
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-images">
              {slide.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="slide-image"
                  style={{
                    backgroundImage: `url(${image})`,
                    animationDelay: `${imgIndex * 0.2}s`
                  }}
                />
              ))}
            </div>
            
            <div className="slide-overlay">
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                {slide.subtitle && (
                  <p className="slide-subtitle">{slide.subtitle}</p>
                )}
                {slide.button && (
                  <Link to={slide.button.link} className="btn btn-primary slide-btn">
                    {slide.button.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow carousel-arrow-prev" onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>
      <button className="carousel-arrow carousel-arrow-next" onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
