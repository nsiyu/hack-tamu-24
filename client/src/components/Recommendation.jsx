import React, { useState } from "react";
import Title from "antd/es/typography/Title";
import { Flex, Button } from "antd";
import DateRangePicker from "./DateRangePicker";

const Recommendation = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const relatedItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const searchFlights = () => {
    console.log("Searching flights from", startDate, "to", endDate);
  };

  return (
    <>
      <Flex
        style={{
          backgroundColor: "#232323",
          position: "absolute",
          top: "50%",
          height: "calc(100% - 50%)",
          width: "100%",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding: "10px 20px",
        }}
      >
        <Title level={2} style={{ color: "white" }}>
          Plan A Trip
        </Title>
      </Flex>
      <div style={{ padding: "0 20px", marginTop: "-20px" }}>
        <DateRangePicker
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
        />
        <Button
          type="primary"
          onClick={searchFlights}
          style={{
            margin: "20px 0",
            display: "block",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Search Flights
        </Button>
      </div>
    </>
  );
};

export default Recommendation;
