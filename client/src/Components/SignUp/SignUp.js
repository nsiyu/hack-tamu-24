import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './SignUp.css';
import axios from "axios";

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSignUp = () => {
        axios.post('http://127.0.0.1:5000/users/signup', {
            "fname": firstName,
            "lname": lastName,
            "email": email,
            "password": password
        })
        .then(response => {
            console.log('Success:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="signup-page">
            <div className="welcome-message">
                <h1>Let's Get Started!</h1>
                <p>Create an Account</p>
            </div>
            <div className="input-container">
                <Input
                    placeholder="First Name"
                    className="input-field"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    placeholder="Last Name"
                    className="input-field"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
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
                <Button
                    type="primary"
                    shape="round"
                    className="sign-in-btn"
                    style={{ width: '350px' }}
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>
            </div>
            <div className="sign-up-link">
                <p>Already have an account? <a href="/login" style={{ color: '#aaa' }}>Sign in</a></p>
            </div>
        </div>
    );
};

export default SignUpPage;