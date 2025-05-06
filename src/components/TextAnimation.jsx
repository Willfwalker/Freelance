import React, { useEffect, useState } from 'react';
import './TextAnimation.css';

const TextAnimation = ({ text, delay = 50 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Split the text into individual characters
  const characters = text.split('');

  return (
    <span className="animated-text">
      {characters.map((char, index) => {
        // Calculate the delay for each character
        const charDelay = `${index * delay}ms`;

        // For regular spaces, use a special class
        if (char === ' ') {
          return <span key={index} className="animated-char-space"></span>;
        }

        // For non-breaking spaces (\u00A0), preserve them but still animate
        if (char === '\u00A0') {
          return (
            <span
              key={index}
              className="animated-char animated-char-nbsp"
              style={{
                animationDelay: mounted ? charDelay : '0ms',
              }}
            >
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={index}
            className="animated-char"
            style={{
              animationDelay: mounted ? charDelay : '0ms',
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default TextAnimation;
