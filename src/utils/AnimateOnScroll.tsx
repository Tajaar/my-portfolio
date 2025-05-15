import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation: string;
  threshold?: number;
  delay?: number;
  className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation,
  threshold = 0.2,
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
      style={{ 
        transitionProperty: 'opacity, transform', 
        transitionDuration: '0.8s', 
        transitionTimingFunction: 'ease-out',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;