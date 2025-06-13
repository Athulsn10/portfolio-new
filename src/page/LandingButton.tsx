import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingButton.css';

interface MousePosition {
  x: number;
  y: number;
}

function LandingButton() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState<boolean>(true);
  const [cursorColor, setCursorColor] = useState<string>('#ffffff80');
  const [cursorSize, setCursorSize] = useState<number>(100);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      navigator.vibrate?.(200);
      navigate('/home');
    }, 400);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
      );

      // Define proximity range (150px = far, 0px = close)
      const maxDistance = 700;
      const t = Math.max(0, Math.min(1.9, distance / maxDistance)); // Interpolation factor (0 = close, 1 = far)

      // Interpolate color between #f93d09 (close) and #ffffff80 (far)
      const startColor = { r: 251, g: 208, b: 197, a: 0.5 };
      const endColor = { r: 249, g: 61, b: 9, a: 1 };
      const r = Math.round(startColor.r + (endColor.r - startColor.r) * (1 - t));
      const g = Math.round(startColor.g + (endColor.g - startColor.g) * (1 - t));
      const b = Math.round(startColor.b + (endColor.b - startColor.b) * (1 - t));
      const a = startColor.a + (endColor.a - startColor.a) * (1 - t);
      setCursorColor(`rgba(${r}, ${g}, ${b}, ${a})`);

      // Interpolate size between 100px (far) and 30px (close)
      const maxSize = 90;
      const minSize = 10;
      const size = Math.round(maxSize - (maxSize - minSize) * (1 - t));
      setCursorSize(size);
    }
  };

  return (
    <div className="d-flex w-100 vh-100 landing-btn-bg" onMouseMove={handleMouseMove}>
      <div className="m-3 circle-container w-100 rounded d-flex align-items-center justify-content-center">
        <button
          ref={buttonRef}
          onClick={handleClick}
          className="landing-button"
          style={{ cursor: 'none' }}
        >
          <span>Click Me</span>
        </button>
        {animate && <div className="circle"></div>}
        {showCircle && (
          <div
            className="torch"
            style={{
              position: 'absolute',
              top: `${mousePosition.y - cursorSize }px`,
              left: `${mousePosition.x - cursorSize }px`,
              backgroundColor: cursorColor,
              width: `${cursorSize}px`,
              height: `${cursorSize}px`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default LandingButton;