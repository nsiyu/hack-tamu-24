import { Flex } from "antd";
import moment from "moment";

const FlightDetailCard = ({ flight, type = "departure" }) => {
  return (
    <Flex vertical gap={7}>
      <Flex align="center" justify="space-between">
        <Flex style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
          {type === "departure" ? flight.departure_iata : flight.arrival_iata}
        </Flex>
        <Flex
          style={{ color: "#2ed159", fontWeight: "bold", fontSize: "24px" }}
        >
          {moment(
            type === "departure"
              ? flight.estimated_departure
              : flight.estimated_arrival
          ).format("LT")}
        </Flex>
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex style={{ color: "#9e9e9e" }}>
          {type === "departure"
            ? flight.departure_airport
            : flight.arrival_airport}
        </Flex>
        <Flex style={{ color: "#2ed159" }}>
          {moment(
            type === "departure"
              ? flight.estimated_departure
              : flight.estimated_arrival
          )
            .fromNow()
            .includes("ago")
            ? "Landed"
            : "On Time"}
        </Flex>
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex>
          <Flex style={{ color: "#9e9e9e" }}>
            Terminal{" "}
            {type === "departure"
              ? flight.departure_terminal
              : flight.arrival_terminal}{" "}
            • Gate{" "}
            {type === "departure" ? flight.departure_gate : flight.arrival_gate}
          </Flex>
        </Flex>
        <Flex style={{ color: "#9e9e9e" }}>
          {moment(
            type === "departure"
              ? flight.estimated_departure
              : flight.estimated_arrival
          ).fromNow()}
        </Flex>
      </Flex>
      {type === "arrival" ? (
        <Flex style={{ color: "#9e9e9e" }}>
          Baggage Belt {flight.arrival_baggage}
        </Flex>
      ) : undefined}
    </Flex>
  );
};

export default FlightDetailCard;
