import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // ✅ For navigation

  // Show popup after 5 seconds
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('popupShown');

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Freeze background scroll
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showPopup]);


  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closePopup();
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);


  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div style={overlayStyle} onClick={closePopup}>
      <div style={popupStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginBottom: '10px' }}>Welcome to Urban Feet!</h2>
        <p>Please login or register to explore more.</p>

        <div style={{ marginTop: '15px' }}>
          <p style={{ marginBottom: '10px' }}>Login or Register to continue</p>
          <p style={{ marginBottom: '20px' }}>We are excited to have you here!</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p style={{ marginBottom: '10px' }}>Choose an option:</p>
          <p style={{ marginBottom: '20px' }}>Login to your account or register a new one.</p>

          <button onClick={() => { navigate('/LogInPopup'); closePopup(); }} style={btnStyle}>Login</button>
          <button onClick={() => { navigate('/RegiPopup'); closePopup(); }} style={btnStyle}>Register</button>        </div>

        <button onClick={closePopup} style={closeBtn}>×</button>
      </div>
    </div>
  );
};

// Styles
const overlayStyle = {
  backdropFilter: 'blur(5px)',
  position: 'fixed',
  inset: '0px',
  backgroundColor: 'rgba(0, 0, 0, 0.81)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

const popupStyle = {
  background: '#fff',
  padding: '30px',
  borderRadius: '12px',
  width: '450px',
  textAlign: 'center',
  position: 'relative',
  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
};

const btnStyle = {
  margin: '8px',
  padding: '10px 20px',
  cursor: 'pointer',
  background: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
};

const closeBtn = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'red',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Popup;
