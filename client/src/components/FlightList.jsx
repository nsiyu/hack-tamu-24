import { Alert, Divider, Drawer, Flex } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { SiAmericanairlines } from "react-icons/si";
import { LuArrowUpRight, LuArrowDownRight } from "react-icons/lu";
import { useState } from "react";
import FlightDetailCard from "./FlightDetailCard";
import moment from "moment";

const convertDateFormat = (inputDate) => {
  // Parse the input date string using moment.js
  const momentDate = moment(inputDate);

  // Format the date and time using the user's local time zone
  const timeString = momentDate.format("LT");

  return timeString;
};

const FlightList = ({ onClick, flights }) => {
  const [flightDrawerOpen, setFlightDrawerOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [selectedFlight, setSelectedFlight] = useState({});

  return (
    <>
      <Drawer
        title={drawerTitle}
        placement="bottom"
        closable
        open={flightDrawerOpen}
        onClose={() => setFlightDrawerOpen(false)}
      >
        <Alert
          message={
            moment(selectedFlight.estimated_departure).fromNow().includes("ago")
              ? "Landed"
              : `Departing from Gate ${selectedFlight.departure_gate} ${moment(
                  selectedFlight.estimated_departure
                ).fromNow()}`
          }
          banner
          type="success"
        />
        <Flex vertical gap={10} style={{ marginTop: "10px" }}>
          <FlightDetailCard flight={selectedFlight} type="departure" />
          <FlightDetailCard flight={selectedFlight} type="arrival" />
        </Flex>
      </Drawer>
      <Flex vertical style={{ marginTop: "20px" }}>
        {flights.map((flight) => (
          <Flex
            style={{
              padding: "10px 10px",
              color: "white",
            }}
            gap={15}
            className="flight-card-hover"
            onClick={() => {
              onClick(flight);
              setDrawerTitle(
                `${flight.departure_airport} to ${flight.arrival_airport}`
              );
              setSelectedFlight(flight);
              setFlightDrawerOpen(true);
            }}
          >
            <CheckCircleTwoTone
              twoToneColor="#363636"
              style={{ fontSize: "20px" }}
            />
            <Flex vertical gap={5} style={{ width: "100%" }}>
              <Flex gap={10}>
                <SiAmericanairlines />
                <div style={{ color: "#9e9e9e", fontSize: "12px" }}>
                  {flight.airline_iata} {flight.flight_number}
                </div>
              </Flex>
              <Flex style={{ margin: "5px 0px" }}>
                <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {flight.departure_airport} to {flight.arrival_airport}
                </div>
              </Flex>
              <Flex gap={10}>
                <Flex gap={5}>
                  <LuArrowUpRight />
                  <Flex
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: "#9e9e9e",
                    }}
                  >
                    {flight.departure_iata}
                  </Flex>
                  <Flex style={{ fontSize: "14px" }}>
                    {convertDateFormat(flight.estimated_departure)}
                  </Flex>
                </Flex>
                <Flex gap={5}>
                  <LuArrowDownRight />
                  <Flex
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: "#9e9e9e",
                    }}
                  >
                    {flight.arrival_iata}
                  </Flex>
                  <Flex style={{ fontSize: "14px" }}>
                    {convertDateFormat(flight.estimated_arrival)}
                  </Flex>
                </Flex>
              </Flex>
              <Divider style={{ margin: "5px 0px" }} />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default FlightList;
