import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({ onLogin }) {  // Accept onLogin prop
  const [usernameLogin, setUsernameLogIn] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsers = [
      { username: 'Akanksha', password: 'abcd' },
      { username: 'JohnDoe', password: '1234' }  // New user added
    ];
    const user = validUsers.find(user => user.username === usernameLogin && user.password === password);

    if (user) {
      onLogin(user.username);  // Pass the username to onLogin
      navigate('/dashboard'); // Navigate to the dashboard after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <input 
        type="text"
        placeholder="Username" 
        value={usernameLogin} 
        onChange={(e) => setUsernameLogIn(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
