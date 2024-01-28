

import React from 'react';
import { Button, Input } from 'antd';
import './SignUp.css';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="welcome-message">
        <h1>Let's Get Started!</h1>
        <p>Create an Account</p>
      </div>
      <div className="input-container">
          <Input
          placeholder="Email"
          className="input-field"
        />
          <Input
          placeholder="Email"
          className="input-field"
        />
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

export default SignUpPage;
