import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import this

const RegiPopup = ({ onClose }) => {
  const navigate = useNavigate(); // ✅ initialize navigate

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
        onClose(); // Close popup
        setTimeout(() => {
          navigate('/LoginPopup'); // ✅ give slight delay after close
        }, 100); 
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
        <h3 className="mb-3">Register</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
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

export default RegiPopup;
