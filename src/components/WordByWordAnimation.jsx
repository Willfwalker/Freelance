import React, { useEffect, useState } from 'react';
import './TextAnimation.css';

const WordByWordAnimation = ({ text, delay = 100 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Split the text into words
  const words = text.split(' ');

  // Define words that should be kept together with the previous word
  const keepWithPrevious = ['for', 'and', 'or', 'the', 'to', 'a', 'in', 'on', 'with'];

  // Process words to combine those that should be kept together
  const processedWords = [];
  words.forEach((word, index) => {
    if (index > 0 && keepWithPrevious.includes(word.toLowerCase())) {
      // Combine this word with the previous one
      processedWords[processedWords.length - 1] += ` ${word}`;
    } else {
      processedWords.push(word);
    }
  });

  return (
    <span className="animated-text">
      {processedWords.map((word, index) => {
        // Calculate the delay for each word
        const wordDelay = `${index * delay}ms`;

        return (
          <React.Fragment key={index}>
            <span
              className="animated-word"
              style={{
                animationDelay: mounted ? wordDelay : '0ms',
              }}
            >
              {word}
            </span>
            {/* Add space after each word except the last one */}
            {index < processedWords.length - 1 && (
              <span className="word-space"> </span>
            )}
          </React.Fragment>
        );
      })}
    </span>
  );
};

export default WordByWordAnimation;
