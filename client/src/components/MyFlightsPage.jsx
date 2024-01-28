import { Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddFlightModal from "./AddFlightModal";
import { useState } from "react";

const MyFlightsPage = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [flightNumber, setFlightNumber] = useState("");

  const handleAddFlight = () => {
    setFlightNumber("");
    console.log(flightNumber);
  };

  return (
    <>
      <AddFlightModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setModalIsOpen}
        handleOk={handleAddFlight}
        flightNumber={flightNumber}
        setFlightNumber={setFlightNumber}
      />
      <Flex
        style={{ maxHeight: "50px", width: "100%", padding: "10px 20px" }}
        align="center"
        justify="space-between"
      >
        <div style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
          My Flights
        </div>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={() => setModalIsOpen(true)}
        />
      </Flex>
    </>
  );
};

export default MyFlightsPage;
