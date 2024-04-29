'use client';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Definiowanie animacji dla przesuwania ekranu
  const slideAnimation = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  });

  return (
    <div>
      {/* Ikona otwierająca menu */}
      <button onClick={() => setIsOpen(!isOpen)}>Open Menu</button>
      
      {/* Animowany kontener menu */}
      <animated.div style={slideAnimation}>
        {/* Zawartość menu */}
        <div style={{ backgroundColor: 'lightgray', width: '200px', height: '100vh' }}>
          {/* Treść menu */}
        </div>
      </animated.div>
    </div>
  );
};

export default page;
