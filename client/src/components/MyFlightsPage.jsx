import { Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddFlightModal from "./AddFlightModal";
import { useEffect, useState } from "react";
import axios from "axios";
import FlightList from "./FlightList";

const MyFlightsPage = ({ onFlightClick }) => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [flightNumber, setFlightNumber] = useState("");
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    getFlights();
  }, []);

  const getFlights = () => {
    axios
      .get("http://127.0.0.1:5000/flights/get-flights", {
        params: {
          user_id: "joe",
        },
      })
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddFlight = () => {
    axios
      .post("http://127.0.0.1:5000/flights/add-flight", {
        flight_id: flightNumber,
        user_id: "joe",
      })
      .then((res) => {
        console.log(res.data);
        getFlights();
      })
      .catch((err) => {
        console.log(err);
      });
    setFlightNumber("");
  };

  return (
    <Flex vertical style={{ width: "100%", padding: "20px" }}>
      <AddFlightModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setModalIsOpen}
        handleOk={handleAddFlight}
        flightNumber={flightNumber}
        setFlightNumber={setFlightNumber}
      />
      <Flex
        //style={{ maxHeight: "50px", width: "100%", padding: "10px 20px" }}
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
      <FlightList onClick={onFlightClick} />
    </Flex>
  );
};

export default MyFlightsPage;
