import React, { useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation.jsx'
import Header from './components/Header.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import usePreventInitialScroll from './hooks/usePreventInitialScroll.js'

function App() {
  // Use the custom hook to prevent automatic scrolling on page load
  usePreventInitialScroll();

  // Disable smooth scrolling initially and enable it after the page loads
  useEffect(() => {
    // Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';

    // Re-enable smooth scrolling after the page has loaded
    const enableSmoothScroll = () => {
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
    };

    // Add event listener for when the page is fully loaded
    window.addEventListener('load', enableSmoothScroll);

    // Also set a timeout as a fallback
    const timeoutId = setTimeout(enableSmoothScroll, 1000);

    return () => {
      window.removeEventListener('load', enableSmoothScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="app">
      <Navigation />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
