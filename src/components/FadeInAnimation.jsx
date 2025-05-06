import React, { useEffect, useState } from 'react';
import './TextAnimation.css';

const FadeInAnimation = ({ text, startDelay = 1500, duration = 1000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  return (
    <div 
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {text}
    </div>
  );
};

export default FadeInAnimation;
