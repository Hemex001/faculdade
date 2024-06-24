import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Header from '../components/Header';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    if (email && password.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogin();
      navigate('/digimon');
    }
  };

  return (
    <div>
      <Header title="Digimon Platform" />
      <div className="login-container">
        <h2>Login:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" disabled={!isValid}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
