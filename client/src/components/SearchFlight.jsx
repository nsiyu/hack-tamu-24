import React from "react";
import Title from "antd/es/typography/Title";
import { Row, Col, Dropdown, Menu, Space, Flex, Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";

const SearchFlight = () => {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  const menu = <Menu items={items} />;

  return (
    <>
      <div
        style={{
          backgroundColor: "#232323",
          position: "absolute",
          top: "50%",
          height: "calc(100% - 50%)",
          width: "100%",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          padding: "20px",
        }}
      >
        <Flex justify={"flex-start"} align={"center"} gap={5}>
          <Title level={2}>My Flights</Title>
          <Dropdown trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Options
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Flex>
      </div>
    </>
  );
};

export default SearchFlight;
