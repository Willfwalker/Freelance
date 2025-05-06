import React, { useEffect, useState } from 'react';
import './TextAnimation.css';

const TypewriterAnimation = ({ text, startDelay = 1500, typingSpeed = 50 }) => {
  // Instead of using a typewriter effect that builds the text character by character,
  // let's use a simpler fade-in animation for the entire text
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  return (
    <div className="typewriter-container">
      <span
        className="typewriter-text"
        style={{
          opacity: isVisible ? 0.9 : 0,
          transition: `opacity ${text.length * typingSpeed / 1000}s ease-in`,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default TypewriterAnimation;
