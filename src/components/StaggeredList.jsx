import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css';

const StaggeredList = ({ 
  children, 
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  baseDelay = 0,
  staggerDelay = 100,
  tagName = 'div'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentElement);
        }
      },
      {
        threshold,
        rootMargin,
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
  
  // Clone children and add staggered animation delay
  const staggeredChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000), transform 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transitionDelay: isVisible ? `${baseDelay + (index * staggerDelay)}ms` : '0ms',
          ...(isVisible && { opacity: 1, transform: 'translateY(0)' })
        }
      });
    }
    return child;
  });
  
  const CustomTag = tagName;
  
  return (
    <CustomTag
      ref={elementRef}
      className={`staggered-list ${className}`}
    >
      {staggeredChildren}
    </CustomTag>
  );
};

export default StaggeredList;
