import React from 'react';
import { Button } from 'antd';
import './welcome.css';
import PlaneVid from "./plan.mp4";

const Welcome = () => {
  return (
    <div className="welcome-page">
      <video autoPlay muted loop id="background-video">
        <source src={PlaneVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="button-container">
        <Button type="primary" shape="round">
          Signup
        </Button>
        <Button type="default" shape="round" style={{ backgroundColor: 'white', color: 'black' }}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
