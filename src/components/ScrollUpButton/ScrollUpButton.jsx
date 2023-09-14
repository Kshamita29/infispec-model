import React, { useState, useEffect } from 'react';
import './ScrollUpButton.css';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

function ScrollUpButton() {
    const [showButton, setShowButton] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
  
        // Start jumping animation
        setIsJumping(true);
  
        // After 2 seconds, stop jumping
        setTimeout(() => {
          setIsJumping(false);
  
          // After another 2 seconds, start jumping again
          setTimeout(() => {
            setIsJumping(true);
          }, 2000);
        }, 2000);
      } else {
        setShowButton(false);
        setIsJumping(false); // Stop jumping when scrolling up
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      // Use setInterval to control the jumping animation
      const interval = setInterval(() => {
        if (isJumping) {
          setIsJumping(false); // Stop jumping
        } else {
          setIsJumping(true); // Start jumping
        }
      }, 2000); // Toggle every 2 seconds
  
      return () => clearInterval(interval);
    }, [isJumping]);
  

  return (
    <button
      className={`scroll-up-button ${showButton ? 'show' : ''} ${
        isJumping ? 'jumping' : ''
      }`}
      onClick={scrollToTop}
    >
      <ArrowCircleUpOutlinedIcon style={{fontSize:'50px'}}/>
    </button>
  );
}

export default ScrollUpButton;
