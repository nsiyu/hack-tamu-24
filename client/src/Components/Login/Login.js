// Login.js

import React, {useState} from 'react';
import { Button, Input } from 'antd';
import './Login.css';
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    axios.post('http://127.0.0.1:5000/users/login', { email, password })
      .then(response => {
        console.log('Login Success:', response.data);
      })
      .catch(error => {
        console.error('Login Error:', error);
      });
  };

  return (
    <div className="login-page">
      <div className="welcome-message">
        <h1>Welcome back!</h1>
        <p>Please sign into your account</p>
      </div>
      <div className="input-container">
        <Input
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input.Password
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="forgot-password-link">Forgot Password?</p>
        <Button onClick={handleLogin} type="primary" shape="round" className="sign-in-btn" style={{ width: '350px' }}>
          Sign in
        </Button>
      </div>
      <div className="sign-up-link">
        <p>Don't have an account? <a href="/signup" style={{ color: '#aaa' }}>Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;