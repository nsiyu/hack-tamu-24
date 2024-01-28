import React from "react";
import SelectDate from "./SelectDate";
import SelectInterest from "./SelectInterest";
import { Layout, Flex } from "antd";
import PageTitle from "./PageTitle";
import RouterButton from "./RouterButton";

const InterestPage = () => {
  return (
    <Flex vertical>
      <Flex
        vertical
        style={{ overflow: "scroll", maxHeight: "100%", padding: "20px" }}
      >
        <Flex align="center" gap={10} style={{ marginBottom: "20px" }}>
          <PageTitle title="Places to visit" />
          <RouterButton />
        </Flex>
        <SelectInterest />
      </Flex>
      <SelectDate
        style={{ marginTop: "auto", position: "sticky", bottom: 0 }}
      />
    </Flex>
  );
};

export default InterestPage;
