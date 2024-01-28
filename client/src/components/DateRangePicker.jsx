import React, { useState } from "react";
import { DatePicker, Flex, Space } from "antd";

const DateRangePicker = ({ onStartDateChange, onEndDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (onStartDateChange) {
      onStartDateChange(date);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    if (onEndDateChange) {
      onEndDateChange(date);
    }
  };

  return (
    <Flex justify={"center"}>
      <Space direction="horizontal">
        <DatePicker value={startDate} onChange={handleStartDateChange} />
        <DatePicker value={endDate} onChange={handleEndDateChange} />
      </Space>
    </Flex>
  );
};

export default DateRangePicker;
