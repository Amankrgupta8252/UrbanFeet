import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegiPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registration successful!');
        onClose();
        setTimeout(() => navigate('/'), 100);
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeBtn}>×</button>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>
        <form onSubmit={handleRegister}>
          <div style={formGroup}>
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              required
              style={inputStyle}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div style={formGroup}>
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              required
              style={inputStyle}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div style={formGroup}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              required
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={formGroup}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              required
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" style={submitBtn}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

// 🔹 STYLES

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  background: '#fff',
  padding: '40px 30px',
  borderRadius: '12px',
  width: '90%',
  maxWidth: '400px',
  position: 'relative',
  boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
};

const closeBtn = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: '#ff4d4f',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  fontSize: '18px',
  lineHeight: '30px',
  cursor: 'pointer',
};

const formGroup = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: 'bold',
  fontSize: '14px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '14px',
};

const submitBtn = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default RegiPopup;
