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

const FlightList = ({ onClick }) => {
  const flights = [
    {
      flight_date: "2024-01-27",
      flight_status: "landed",
      departure_airport: "Eugene",
      departure_timezone: "America/Los_Angeles",
      longitude_start: 32.898234465487945,
      latitude_end: -97.0338681760307,
      longitude_end: 25.795087918709516,
      latitude_start: -80.27945555905411,
      departure_iata: "EUG",
      departure_icao: "KEUG",
      departure_terminal: null,
      departure_gate: "A2",
      departure_delay: 8,
      scheduled_departure: "2024-01-27T07:15:00+00:00",
      estimated_departure: "2024-01-27T07:15:00+00:00",
      arrival_airport: "San Francisco International",
      arrival_timezone: "America/Los_Angeles",
      arrival_iata: "SFO",
      arrival_icao: "KSFO",
      arrival_terminal: "3",
      arrival_gate: "F2",
      arrival_baggage: "4",
      arrival_delay: null,
      scheduled_arrival: "2024-01-27T09:02:00+00:00",
      estimated_arrival: "2024-01-27T09:02:00+00:00",
      airline_name: "United Airlines",
      airline_iata: "UA",
      airline_icao: "UAL",
      flight_number: "1403",
    },
    {
      flight_date: "2024-01-27",
      flight_status: "scheduled",
      departure_airport: "Dallas/Fort Worth International",
      departure_timezone: "America/Chicago",
      longitude_start: 25.795087918709516,
      latitude_end: -80.27945555905411,
      longitude_end: 32.898234465487945,
      latitude_start: -97.0338681760307,
      departure_iata: "DFW",
      departure_icao: "KDFW",
      departure_terminal: "C",
      departure_gate: "C8",
      departure_delay: null,
      scheduled_departure: "2024-01-27T17:00:00+00:00",
      estimated_departure: "2024-01-27T17:00:00+00:00",
      arrival_airport: "Memphis International",
      arrival_timezone: "America/Chicago",
      arrival_iata: "MEM",
      arrival_icao: "KMEM",
      arrival_terminal: "B",
      arrival_gate: "8",
      arrival_baggage: "3",
      arrival_delay: null,
      scheduled_arrival: "2024-01-27T18:30:00+00:00",
      estimated_arrival: "2024-01-27T18:30:00+00:00",
      airline_name: "American Airlines",
      airline_iata: "AA",
      airline_icao: "AAL",
      flight_number: "2153",
    },
  ];
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
