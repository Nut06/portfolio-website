import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: 'chars' | 'words' | 'lines';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  onAnimationComplete?: () => void;
  className?: string;
  duration?: number;
  staggerDelay?: number;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 0,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className = '',
  duration = 0.8,
  staggerDelay = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (delay > 0) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  // Split text based on animateBy
  const getTextElements = () => {
    switch (animateBy) {
      case 'chars':
        return text.split('').filter(char => char !== ' ');
      case 'words':
        return text.split(' ');
      case 'lines':
        return text.split('\n');
      default:
        return [text];
    }
  };

  // Get initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'top':
        return { y: -30, opacity: 0, filter: 'blur(8px)' };
      case 'bottom':
        return { y: 30, opacity: 0, filter: 'blur(8px)' };
      case 'left':
        return { x: -30, opacity: 0, filter: 'blur(8px)' };
      case 'right':
        return { x: 30, opacity: 0, filter: 'blur(8px)' };
      default:
        return { y: -30, opacity: 0, filter: 'blur(8px)' };
    }
  };

  // Get final position
  const getFinalPosition = () => {
    return { x: 0, y: 0, opacity: 1, filter: 'blur(0px)' };
  };

  const textElements = getTextElements();
  const totalElements = textElements.length;

  const handleAnimationComplete = () => {
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <div className={`blur-text-container ${className}`}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center items-center"
          >
            {textElements.map((element, index) => (
              <motion.span
                key={index}
                initial={getInitialPosition()}
                animate={getFinalPosition()}
                transition={{
                  duration,
                  delay: index * staggerDelay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onAnimationComplete={() => {
                  if (index === totalElements - 1) {
                    handleAnimationComplete();
                  }
                }}
                className="inline-block"
                style={{
                  marginRight: animateBy === 'words' ? '0.5rem' : '0.1rem',
                  marginBottom: animateBy === 'lines' ? '0.5rem' : '0',
                }}
              >
                {element}
                {animateBy === 'words' && index < textElements.length - 1 && ' '}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlurText; 