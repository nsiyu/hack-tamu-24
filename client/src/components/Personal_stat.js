import React from "react";
import { Button, Flex, Radio } from "antd";
import { Card, Avatar, Statistic, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

const PersonalStat = () => {
  return (
    <Content >
      <Flex vertical justify="center" style={{paddingTop:'22px' ,margin: "0px" ,}}>
        <Flex style={{ flexGrow: 1 }}>
          <Button
            type="primary"
            shape="round"
            size="small"
            
          >
            All-Flights
          </Button>
          <Button
            type="primary"
            shape="round"
            size="small"
            style={{  marginLeft: "4px" }}
          >
            2024
          </Button>
          <Button
            type="primary"
            shape="round"
            size="small"
            style={{  marginLeft: "4px" }}
          >
            2023
          </Button>
        </Flex>

        <Flex
          vertical={"horizontal"}
          style={{ flexGrow: 1, marginTop: "22px" }}
        >
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
              <Flex justify="space-between" style={{ fontSize: "22px" }}>
                <Content>Your Flight Status</Content>
                <Button
                  type="primary"
                  icon={<UploadOutlined />}
                  style={{ alignSelf: "left" }}
                ></Button>
              </Flex>
              <Flex vertical >
                <Statistic
                  title={<span style={{ fontSize: "40px" }}>FLIGHTS</span>}
                  value={67}
                  valueStyle={{ fontSize: "30px" }}
                />

                <Statistic title="DISTANCE" value={54380} suffix="mi" />
                <Statistic title="Around the World" value={2.18} suffix="x" />
                <Button type="primary">View More</Button>
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
              <Statistic title="FLIGHTS" value={0} />
              <Statistic title="Long Haul" value={0} />
              <Button type="primary">View More</Button>
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
              <Statistic title="FLIGHTS" value={0} />

              <Button type="primary">View More</Button>
            </Card>
          </Content>
        </Flex>
      </Flex>
    </Content>
  );
};

export default PersonalStat;
