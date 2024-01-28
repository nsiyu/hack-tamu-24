import { ConfigProvider, theme, Flex, Card } from "antd";
import "./App.css";
import FlightGlobe from "./components/FlightGlobe";
import MyFlightsPage from "./components/MyFlightsPage";
import { useState } from "react";
import Profile from  "./components/Profile";
import Statistics from "./components/Statistic";
<<<<<<< HEAD
=======
import SelectInterest from "./components/SelectInterest";
import InterestPage from "./components/InterestPage";

>>>>>>> 73274b7 (p)
function App() {


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
<<<<<<< HEAD
          algorithm: darkAlgorithm,
        }}
      >
        <Card>
          <Statistics/>
        </Card>
=======
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <Card>
          <InterestPage/>
          </Card>
>>>>>>> 73274b7 (p)
      </ConfigProvider>
    </>
  );
}

export default App;