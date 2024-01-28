import "./App.css";
import MyFlightsPage from "./components/MyFlightsPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./Root";
import Login from "./components/Login/Login";

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
      <Route
        path="/"
        element={
        <Login/>
        }
      >
        <Route
          path=""
          element={<MyFlightsPage onFlightClick={handleFlightClick} />}
        />
      </Route>
    </Routes>
  );
}

export default App;