import React from "react";
import SelectDate from "./SelectDate";
import SelectInterest from "./SelectInterest";
import { Layout, Flex } from "antd";

const InterestPage = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Layout
        style={{
          background: "transparent",
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "12px",
          marginTop:"12px"
        }}
      >
        Interest
      </Layout>

      <SelectInterest />
      <SelectDate
        style={{ marginTop: "auto", position: "sticky", bottom: 0 }}
      />
    </div>
  );
};

export default InterestPage;
