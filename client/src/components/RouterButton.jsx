import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const RouterButton = () => {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    navigate(key);
  };

  const items = [
    {
      label: "My Flights",
      key: "/app/my-flights",
    },
    {
      label: "Profile",
      key: "/app/profile",
    },
    {
      label: "Places to visit",
      key: "/app/places-to-visit",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {/* Hover me, Click menu item */}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default RouterButton;
