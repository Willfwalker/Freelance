import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="hero" id="home">
      <div className="hero-content">
        <h1>I build websites and automation scripts for small businesses.</h1>
        <p>Need a site or custom tool? Let's talk. I help businesses get online fast with clean, modern code.</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </header>
  );
};

export default Header;
