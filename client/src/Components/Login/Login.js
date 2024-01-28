// Login.js

import React from 'react';
import { Button, Input } from 'antd';
import './Login.css';

const LoginPage = () => {
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
        />
        <Input.Password
          placeholder="Password"
          className="input-field"
        />
        <p className="forgot-password-link">Forgot Password?</p>
        <Button type="primary" shape="round" className="sign-in-btn" style={{ width: '350px' }}>
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
