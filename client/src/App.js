import "./App.css";
import MyFlightsPage from "./components/MyFlightsPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./Root";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile";
import Statistic from "./components/Statistic";
import { Flex } from "antd";
import InterestPage from "./components/InterestPage";
import TravelPlanPage from "./components/TravelPlanPage";
import ItineraryPage from "./components/ItineraryPage";

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
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/app"
        element={
          <Root globeMarkers={globeMarkers} globeAnimations={globeAnimations} />
        }
      >
        <Route
          path="my-flights"
          element={<MyFlightsPage onFlightClick={handleFlightClick} />}
        />
        <Route
          path="profile"
          element={
            <Flex vertical style={{ width: "100%", padding: "0px 20px" }}>
              <Profile />
              <Statistic />
            </Flex>
          }
        />
        <Route path="places-to-visit" element={<InterestPage />} />
        <Route path="travel-plan" element={<TravelPlanPage />} />
        <Route path="itinerary" element={<ItineraryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
