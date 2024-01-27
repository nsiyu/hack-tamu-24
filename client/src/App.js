import { Flex } from "antd";
import "./App.css";
import FlightGlobe from "./components/FlightGlobe";
import Title from "antd/es/typography/Title";

function App() {
  return (
    <>
      <FlightGlobe />
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
        <Title level={2} style={{ color: "white", padding: "0px 20px" }}>
          My Flights
        </Title>
      </Flex>
    </>
  );
}

export default App;
