import React, { useState, useEffect, useRef } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  speed = 50,
  delay = 0,
  tag = 'p',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!visible) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, visible]);

  const TagName = tag as keyof JSX.IntrinsicElements;

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      <TagName className="border-r-2 border-neon-gold animate-typing overflow-hidden whitespace-nowrap">
        {displayedText}
      </TagName>
    </div>
  );
};

export default TextReveal;