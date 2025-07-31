import React, { useEffect, useState } from 'react';
import LoginPopup from './LoginPopup';
import RegiPopup from './RegiPopup';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeForm, setActiveForm] = useState(null); // 'login' | 'register' | null

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
    document.body.style.overflow = showPopup ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
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
    setActiveForm(null); // reset form
  };

  if (!showPopup) return null;

  return (
    <div style={overlayStyle} onClick={closePopup}>
      <div style={popupStyle} onClick={(e) => e.stopPropagation()}>

        {activeForm === null && (
          <>
            <h2 style={{ marginBottom: '10px' }}>Welcome to Urban Feet!</h2>
            <p>Please login or register to explore more.</p>
            <div style={{ marginTop: '20px' }}>
              <button onClick={() => setActiveForm('login')} style={btnStyle}>Login</button>
              <button onClick={() => setActiveForm('register')} style={btnStyle}>Register</button>
            </div>
          </>
        )}

        {activeForm === 'login' && <LoginPopup onClose={closePopup} />}
        {activeForm === 'register' && <RegiPopup onClose={closePopup} />}

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
