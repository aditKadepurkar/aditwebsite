// MouseTrail.tsx
import React, { useState } from 'react';
import './mousetrail.css';

const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setTrail((prevTrail) => [...prevTrail, { x: clientX, y: clientY }]);
  };

  return (
    <div className="mouse-trail-container" onMouseMove={handleMouseMove}>
      {/* Render the mouse trail */}
      {trail.map((position, index) => (
        <div
          key={index}
          className="mouse-trail-point"
          style={{ left: position.x, top: position.y }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
