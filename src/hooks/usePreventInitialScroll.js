import { useEffect } from 'react';

/**
 * Custom hook to prevent automatic scrolling to anchor links on initial page load
 */
const usePreventInitialScroll = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Store the hash
      const hash = window.location.hash;
      
      // Clear the hash without triggering a page reload or adding to history
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
      
      // Wait for the page to fully load before allowing smooth scrolling
      window.addEventListener('load', () => {
        // Restore smooth scrolling behavior after a short delay
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
        }, 500);
      });
      
      // Disable smooth scrolling initially
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);
};

export default usePreventInitialScroll;
