import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  threshold = 0.2,
  rootMargin = '0px',
  className = '',
  tagName = 'div'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we don't need to observe it anymore
          observer.unobserve(currentElement);
        }
      },
      {
        threshold, // Percentage of element that needs to be visible
        rootMargin, // Margin around the root (viewport)
      }
    );
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);
  
  // Dynamically create the element based on tagName prop
  const CustomTag = tagName;
  
  return (
    <CustomTag
      ref={elementRef}
      className={`scroll-animation ${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </CustomTag>
  );
};

export default ScrollAnimation;
