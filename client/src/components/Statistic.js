import React, { useEffect, useState } from "react";
import { Button, Statistic, Card, Flex, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
const { Countdown } = Statistic;
const onChange = (val) => {
  if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log("changed!");
  }
};

const Statistics = () => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [delayMinutes, setDelayMinutes] = useState(0);
  const [distance, setDistance] = useState(0);
  const [numFlights, setNumFlights] = useState(0);

  const getFlightDetails = (userId) => {
    axios
      .get(
        `http://127.0.0.1:5000/users/passport-data?user_id=${localStorage.getItem(
          "user"
        )}`
      )
      .then((response) => {
        console.log(response.data);
        setFlightDetails(response.data);
        setNumFlights(response.data.number_of_flights);
        setDistance(Math.trunc(response.data.distance_traveled));
        setDelayMinutes(response.data.time_lost_due_to_delays);
      })
      .catch((error) => {
        console.error("Error fetching flight details:", error);
      });
  };

  useEffect(() => {
    getFlightDetails();
  }, []);

  return (
    <Flex vertical={"horizontal"} style={{ flexGrow: 1, marginTop: "22px" }}>
      <Content>
        <Card
          style={{
            marginBottom: "15px",
            borderRadius: "8px",
            backgroundColor: "#3b5999",
            backgroundColor: "rgb(0, 106, 255)",
            backgroundImage:
              "linear-gradient(0deg, rgb(200, 200, 200), transparent)",
          }}
        >
          <Flex justify="space-between">
            <Content style={{ fontSize: "24px" }}>Your Flight Status</Content>
            <Button
              type="primary"
              icon={<UploadOutlined />}
              style={{ alignSelf: "left" }}
            ></Button>
          </Flex>
          <Flex vertical>
            <Statistic
              title={<span style={{ fontSize: "40px" }}>FLIGHTS</span>}
              value={numFlights}
              valueStyle={{ fontSize: "30px" }}
            />

            <Statistic title="DISTANCE" value={distance} suffix="mi" />
            <Statistic title="Around the World" value={2.18} suffix="x" />
          </Flex>
        </Card>
      </Content>
      <Content>
        <Card
          style={{
            marginBottom: "15px",
            borderRadius: "8px",
            backgroundColor: "#3b5999",
            backgroundColor: "rgb(230, 99, 208)",
            backgroundImage:
              "linear-gradient(0deg, rgb(200, 200, 200), transparent)",
          }}
        >
          <Flex justify="space-between">
            <Content style={{ fontSize: "24px" }}>Your Favorite Plane</Content>
            <Button
              type="primary"
              icon={<UploadOutlined />}
              style={{ alignSelf: "left" }}
            ></Button>
          </Flex>

          <Flex vertical>
            <Image
              width={200}
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/Boeing-777.svg"
            />
            <Flex horizontal justify="center">
              <Content style={{ fontSize: "24px" }}>Boeing 777-300</Content>
            </Flex>
          </Flex>
        </Card>
      </Content>
      <Content>
        <Card
          style={{
            marginBottom: "15px",
            borderRadius: "8px",
            backgroundColor: "#3b5999",
            backgroundColor: "rgb(69, 189, 40)",
            backgroundImage:
              "linear-gradient(0deg, rgb(200, 200, 200), transparent)",
          }}
        >
          <Flex justify="space-between">
            <Content style={{ fontSize: "24px" }}>Delay Information</Content>
            <Button
              type="primary"
              icon={<UploadOutlined />}
              style={{ alignSelf: "left" }}
            ></Button>
          </Flex>
          <Flex vertical>
            <Statistic value={delayMinutes} />
            <Content style={{ fontSize: "30px" }}>Minutes Lost</Content>
            <Content style={{ fontSize: "22px" }}>From Delay</Content>
          </Flex>
        </Card>
      </Content>
    </Flex>
  );
};

export default Statistics;
