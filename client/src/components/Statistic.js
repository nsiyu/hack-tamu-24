import React from "react";
import { Button, Statistic, Card, Flex, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
const { Countdown } = Statistic;
const onChange = (val) => {
  if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log("changed!");
  }
};

const Statistics = () => {
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
              <Content style={{ fontSize: "24px" }}>
                Boeing 777-300
              </Content>
            </Flex>
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
            <Statistic value={1342} />
            <Content style={{ fontSize: "30px" }}>Minutes Lost</Content>
            <Content style={{ fontSize: "22px" }}>From Delay</Content>
            <Button type="primary">View More</Button>
          </Flex>
        </Card>
      </Content>
    </Flex>
  );
};

export default Statistics;
