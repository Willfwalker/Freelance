import React from 'react';
import './Header.css';
import CleanTextAnimation from './CleanTextAnimation';
import FadeInAnimation from './FadeInAnimation';

const Header = () => {
  const mainHeadingText = "I build websites and automation scripts for small businesses.";

  // Use a shorter delay for the second animation since the first one is faster now
  const secondAnimationDelay = 600;

  return (
    <header className="hero" id="home">
      <div className="hero-content">
        <h1>
          <CleanTextAnimation text={mainHeadingText} duration={1000} />
        </h1>
        <p>
          <FadeInAnimation
            text="Need a site or custom tool? Let's talk. I help businesses get online fast with clean, modern code."
            startDelay={secondAnimationDelay}
            duration={1000}
          />
        </p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </header>
  );
};

export default Header;
