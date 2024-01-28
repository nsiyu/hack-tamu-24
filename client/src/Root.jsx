import FlightGlobe from "./components/FlightGlobe";
import { Outlet } from "react-router-dom";
import { Flex } from "antd";

const Root = ({ globeMarkers, globeAnimations }) => {
  return (
    <>
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
        <Outlet />
      </Flex>
    </>
  );
};

export default Root;
