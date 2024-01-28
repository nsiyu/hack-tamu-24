import React, { useState } from "react";
import { DatePicker, Flex, Layout, Icon, Card, Button } from "antd";
import { Content } from "antd/es/layout/layout";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const SelectDate = () => {
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);

    navigate("/app/travel-plan");
  };

  return (
    <Card bordered={true}>
      <Flex justify="space-between">
        <Flex justify="space-between">
          <DatePicker
            placeholder="Start Date"
            style={{ marginRight: "10px" }}
            onChange={onChange}
          />
          <ArrowRightOutlined style={{ marginRight: "10px" }} />
          <DatePicker
            placeholder="End Date"
            onChange={onChange}
            style={{ marginRight: "10px" }}
          />
        </Flex>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Next
        </Button>
      </Flex>
    </Card>
  );
};

export default SelectDate;
