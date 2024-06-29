import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingButton.css'; 

function LandingButton() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      navigator.vibrate(200);
      navigate('/home');
    }, 400); 
  };

  return (
    <div className="d-flex w-100 vh-100  landing-btn-bg">
      <div className='m-3 circle-container w-100 rounded d-flex align-items-center justify-content-center '>
          <button onClick={handleClick} className="landing-button">
            <span>Click Me</span>
          </button>
          {animate && (
            <>
              <div className="circle"></div>
            </>
          )}
      </div>
    </div>
  );
}

export default LandingButton;
