import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Flag to prevent initial scroll detection from changing the active section
    let isInitialLoad = true;

    const handleScroll = () => {
      // Check if scrolled past initial threshold
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Skip section detection on initial load to prevent unwanted scrolling
      if (isInitialLoad) {
        isInitialLoad = false;
        return;
      }

      // Determine which section is currently in view
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];

      // Find the section that is currently most visible in the viewport
      let currentSection = 'home';
      let maxVisibility = 0;

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Calculate how much of the section is visible in the viewport
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight > 0 ? visibleHeight / element.offsetHeight : 0;

          if (visiblePercentage > maxVisibility) {
            maxVisibility = visiblePercentage;
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Add a small delay before attaching the scroll listener
    // This prevents the initial scroll detection from triggering unwanted scrolling
    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
      // Initial check after delay
      handleScroll();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle smooth scrolling for anchor links
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      // Ensure smooth scrolling is enabled
      document.documentElement.style.scrollBehavior = 'smooth';

      // Scroll to the element
      element.scrollIntoView();

      // Update active section
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''} section-${activeSection}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">William Walker</a>

        <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#services" onClick={() => setMobileMenuOpen(false)} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
