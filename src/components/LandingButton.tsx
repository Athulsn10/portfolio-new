import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingButton.css';

function LandingButton() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState(true)
  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      navigator.vibrate(200);
      navigate('/home');
    }, 400);
  };
  const handleShow = () => {
    setShowCircle(!showCircle)
  }
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {

  })
  return (
    <div className="d-flex w-100 vh-100  landing-btn-bg" onMouseMove={handleMouseMove}>
      <div className='m-3 circle-container w-100 rounded d-flex align-items-center justify-content-center '>
        <button onMouseEnter={handleShow} onMouseLeave={handleShow} onClick={handleClick} className="landing-button">
          <span>Click Me</span>
        </button>
        {animate && (
          <>
            <div className="circle"></div>
          </>
        )}
        {showCircle && (<div className='torch' style={{
          top: mousePosition.y - 50,
          left: mousePosition.x - 50
        }}>
        </div>)}
      </div>
    </div>
  );
}

export default LandingButton;
