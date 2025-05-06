import React, { useEffect, useState } from 'react';
import './TextAnimation.css';

const CleanTextAnimation = ({ text, duration = 1200 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded immediately
    setIsLoaded(true);

    // Small delay before starting animation to ensure component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Use a more natural easing curve
  const easingCurve = "cubic-bezier(0.19, 1, 0.22, 1)"; // Exponential ease out

  return (
    <div className="clean-animation-container">
      <div
        className="clean-animation-text"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
          transition: isLoaded ?
            `opacity ${duration}ms ${easingCurve}, transform ${duration}ms ${easingCurve}` :
            'none'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default CleanTextAnimation;
