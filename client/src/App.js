import { Flex } from "antd";
import "./App.css";
import FlightGlobe from "./components/FlightGlobe";
import Title from "antd/es/typography/Title";
import Recommendation from "./components/Recommendation";

function App() {
  return (
    <>
      <FlightGlobe />
      <Recommendation/>
    </>
  );
}

export default App;