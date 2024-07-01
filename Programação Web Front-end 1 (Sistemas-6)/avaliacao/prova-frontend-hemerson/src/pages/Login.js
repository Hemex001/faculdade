import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Preencha todos os campos.');
      return;
    }
    if (password.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        navigate('/list');
      }
    } catch (error) {
      console.error(error);
      alert('Credenciais invalidas.');
    }
  };

  return (

    <div>
      <Header title="Receitas da Vovó" />
      <div className="login-container">
        <h2>Entre para acessar as Receitas</h2>
        <form>
          <div>
            <label>Usuário:</label>
            <input type="text" placeholder="User" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </form>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;