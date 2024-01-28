import React, {useState} from "react";
import { Avatar } from "antd";
import { Button, Flex, Layout } from "antd";
import {
  UsergroupDeleteOutlined,
  CloseOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import RouterButton from "./RouterButton";

const url = "https://www.svgrepo.com/show/140005/dog.svg";
const boxStyle = {
  width: "100%",
  borderRadius: 6,
};

const Profile = () => {
    const [name, setName] = useState(localStorage.getItem("email"))
  return (
    <div>
      <div style={{ paddingTop: "28px" }}>
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
            <div
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "left",
                    color: "white",
                  }}
                >
                    joe
                </div>
                <RouterButton />
              </Flex>
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  fontSize: "12px",
                  color: "white",
                }}
              >
                My Flight log
              </div>
            </div>
          </Flex>
        </Flex>

        <div style={{ marginTop: "12px", paddingBottom: "12px" }}>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
