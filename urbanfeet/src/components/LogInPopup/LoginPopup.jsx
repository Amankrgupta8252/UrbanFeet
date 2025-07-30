
import React from 'react';

const LoginPopup = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3 className="mb-3">Login</h3>
        <form>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <button onClick={onClose} style={closeBtn}>×</button>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  backdropFilter: 'blur(3px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

const modalStyle = {
  background: '#fff',
  padding: '30px',
  borderRadius: '10px',
  width: '400px',
  position: 'relative',
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  animation: 'popUp 0.3s ease',
};


const closeBtn = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
};

export default LoginPopup;  