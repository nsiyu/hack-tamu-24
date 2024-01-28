import React from "react";
import { DatePicker, Flex, Layout, Icon ,Card} from "antd";
import { Content } from "antd/es/layout/layout";
import {ArrowRightOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;


const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const SelectDate = () => {
  return (
    < Card bordered={false}>
      <Flex justify="space-between">
        <DatePicker placeholder="Start Date" onChange={onChange} />
        <ArrowRightOutlined /> 
        <DatePicker placeholder="End Date" onChange={onChange} />
      </Flex>
    </Card>
  );
};

export default SelectDate;
