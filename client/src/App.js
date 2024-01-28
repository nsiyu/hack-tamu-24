import { ConfigProvider, theme, Flex } from "antd";
import "./App.css";
import FlightGlobe from "./components/FlightGlobe";
import MyFlightsPage from "./components/MyFlightsPage";
import { useState } from "react";

function App() {
  const { darkAlgorithm } = theme;

  const [globeMarkers, setGlobeMarkers] = useState([]);
  const [globeAnimations, setGlobeAnimations] = useState([]);

  const handleFlightClick = (flight) => {
    setGlobeMarkers([
      {
        id: 1,
        airport: flight.departure_iata,
        coordinates: [flight.longitude_start, flight.latitude_start],
        value: 30,
      },
      {
        id: 2,
        airport: flight.arrival_iata,
        coordinates: [flight.longitude_end, flight.latitude_end],
        value: 30,
      },
    ]);
    setGlobeAnimations([
      {
        animationDuration: 3000,
        coordinates: [flight.longitude_start, flight.latitude_start],
        distanceRadiusScale: 2,
        easingFunction: ["Linear", "None"],
      },
    ]);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
        }}
      >
        <FlightGlobe markers={globeMarkers} animations={globeAnimations} />
        <Flex
          style={{
            backgroundColor: "#232323",
            position: "absolute",
            top: "50%",
            height: "calc(100% - 50%)",
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          <MyFlightsPage onFlightClick={handleFlightClick} />
        </Flex>
      </ConfigProvider>
    </>
  );
}

export default App;