import { Divider, Flex } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { SiAmericanairlines } from "react-icons/si";
import { LuArrowUpRight, LuArrowDownRight } from "react-icons/lu";

const convertDateFormat = (inputDate) => {
  // Parse the input date string
  const date = new Date(inputDate);

  // Create a date formatter with options to format the time
  const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // Format the time using the formatter
  const timeString = timeFormatter.format(date);

  return timeString;
};

const FlightList = ({ onClick, flights }) => {
  return (
    <Flex vertical style={{ marginTop: "20px" }}>
      {flights.map((flight) => (
        <Flex
          style={{
            padding: "10px 10px",
            color: "white",
          }}
          gap={15}
          className="flight-card-hover"
          onClick={() => onClick(flight)}
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
  );
};

export default FlightList;
