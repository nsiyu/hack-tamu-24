import React from "react";
import { Avatar, Space } from "antd";
import { useState, useEffect } from "react";
import { Button, Flex, Segmented } from "antd";
import {
  UsergroupDeleteOutlined,
  CloseOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

const url = "https://www.svgrepo.com/show/140005/dog.svg";
const boxStyle = {
  width: "100%",
  borderRadius: 6,
};

const Profile = () => {
  const [name, setName] = useState("Licker Dog");

  return (
    <Content style={{border: 'none', outline: 'none'}}>
     
      <Content  style={{ paddingTop: "28px" }}>
        <Flex style={boxStyle} justify="space-between" align="flex-start, ">
          <Flex style={{ width: "100%", display: "flex" }}>
            <Avatar
              src={url}
              style={{
                backgroundColor: "#fde3cf",
                width: "60px",
                height: "50px",
              }}
            />
            <Content
              style={{
                width: "100%",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                fontSize: "24px",
                marginLeft: "8px",
              }}
            >
              <Flex justify="space-between">
                <Content style={{ display: "flex", alignItems: "left" }}>
                  {name}
                </Content>

                <Button shape="circle" icon={<CloseOutlined />} />
              </Flex>
              <Content
                style={{
                  display: "flex",
                  alignItems: "left",
                  fontSize: "12px",
                }}
              >
                My Flight log
              </Content>
            </Content>
          </Flex>
        </Flex>

        <Content style={{ marginTop: "12px", paddingBottom: "12px" ,}}>
          <Flex justify="space-start" align="flex-start">
            <Button
              type="default"
              shape="round"
              icon={<UsergroupDeleteOutlined />}
              size={"small"}
            >
              Flight Connect
            </Button>
            <Button
              type="default"
              shape="round"
              icon={<SettingOutlined />}
              size={"small"}
              style={{ marginLeft: "4px" }}
            >
              Settings
            </Button>
          </Flex>
        </Content>
      </Content>
    </Content>
  );
};

export default Profile;
