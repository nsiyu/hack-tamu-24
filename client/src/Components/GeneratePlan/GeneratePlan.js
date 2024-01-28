import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { SiAmericanairlines } from "react-icons/si";
import { Button } from "antd";

const TravelPlan = ({ plan }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDetails = () => {
    setIsActive((prev) => !prev);
  };

  const planDetailsStyle = {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: "100px",
    //backgroundColor: '#fff',
    borderRadius: "15px",
    marginBottom: "20px",
    overflow: "hidden",
    margin: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
    transition: "height 0.3s ease",
  };

  const airlineImageStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    borderRadius: "8px 8px 0 0",
  };

  const airlineLogoStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const planDetailsContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    alignItems: "center",
  };

  const generateButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const additionalButtonStyle = {
    backgroundColor: "#1890ff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        ...planDetailsStyle,
        height: isActive ? "auto" : "100px",
        color: "white",
      }}
    >
      <div style={airlineImageStyle}>
        <SiAmericanairlines />
        <span className="airport-order">{plan.airportOrder}</span>
      </div>
      <div style={planDetailsContainerStyle}>
        <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
          <li>{`${plan.departureTime} - ${plan.arrivalTime}`}</li>
          <li>{plan.duration} Hour Flight</li>
        </ul>
        {/* <button style={generateButtonStyle} onClick={toggleDetails}>
          <DownOutlined />
        </button> */}
        <Button
          type="primary"
          shape="circle"
          icon={<DownOutlined />}
          onClick={toggleDetails}
        />
      </div>
      {isActive && <Button>Generate Plan</Button>}
    </div>
  );
};

export default TravelPlan;
