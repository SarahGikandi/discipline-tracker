import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

const HeartsBackground = () => {
  // Generate random hearts only once on component mount
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 7 + 8}s`, // Between 8s and 15s
      animationDelay: `${Math.random() * 10}s`,
      size: Math.random() * 15 + 10 // Size between 10px and 25px
    }));
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </div>
      ))}
    </div>
  );
};

export default HeartsBackground;
