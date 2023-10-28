import React, { useState, useEffect, useRef } from 'react';
import './YourComponent.css'; // Import your CSS file

function PercentCounter() {
  const [percentageHtml, setPercentageHtml] = useState(0);
  const animationStartedHtml = useRef(false);

  const [percentageJavascript, setPercentageJavascript] = useState(0);
  const animationStartedJavascript = useRef(false);

  // HTML ANIMATION
  const startAnimationHtml = () => {
    if (!animationStartedHtml.current) {
      animationStartedHtml.current = true;
      const duration = 2000; // 2 seconds
      const frames = 100; // Number of frames

      for (let i = 0; i <= frames; i++) {
        setTimeout(() => {
          const newValue = (i / frames) * 100;
          setPercentageHtml(newValue);
        }, (i / frames) * duration);
      }
    }
  };
   // HTML ANIMATION

  // JAVASCRIPT ANIMATION
  const startAnimationJavascript = () => {
    if (!animationStartedJavascript.current) {
      animationStartedJavascript.current = true;
      const duration = 2000; // 2 seconds
      const frames = 100; // Number of frames

      for (let i = 0; i <= frames; i++) {
        setTimeout(() => {
          const newValue = (i / frames) * 80;
          setPercentageJavascript(newValue);
        }, (i / frames) * duration);
      }
    }
  };
  // JAVASCRIPT ANIMATION

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        startAnimationHtml();
        startAnimationJavascript();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="coding__skillbarscore_1">
      <span>{percentageHtml.toFixed(0)}%</span>
      <span>{percentageJavascript.toFixed(0)}%</span>
    </div>
  );
}

export default PercentCounter;
