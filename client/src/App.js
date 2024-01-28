import { ConfigProvider, theme, Flex } from "antd";
import "./App.css";
import FlightGlobe from "./components/FlightGlobe";
import MyFlightsPage from "./components/MyFlightsPage";

function App() {
  const { darkAlgorithm } = theme;
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
        }}
      >
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
          <MyFlightsPage />
        </Flex>
      </ConfigProvider>
    </>
  );
}

export default App;
