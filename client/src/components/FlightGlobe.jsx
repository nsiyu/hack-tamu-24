import { Flex } from "antd";
import ReactGlobe from "react-globe";

const FlightGlobe = ({ markers, animations }) => {
  // const markers = [
  //   {
  //     id: 1,
  //     airport: "DFW",
  //     coordinates: [32.89777464575908, -97.03371801889972],
  //     value: 30,
  //   },
  //   {
  //     id: 1,
  //     airport: "MIA",
  //     coordinates: [25.795029621529913, -80.27946633780618],
  //     value: 30,
  //   },
  // ];

  return (
    <Flex style={{ height: 700 }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
          enableMarkerTooltip: true,
          markerEnterAnimationDuration: 3000,
          markerEnterEasingFunction: ["Bounce", "InOut"],
          markerExitAnimationDuration: 3000,
          markerExitEasingFunction: ["Cubic", "Out"],
          getTooltipContent: (marker) => `${marker.airport}`,
          markerRadiusScaleRange: [0.01, 0.05],
        }}
        cameraOptions={{
          enableZoom: true,
          enableAutoRotate: true,
          zoomSpeed: 1,
        }}
        animations={animations}
        initialCoordinates={[32.89781067923191, -97.03369656066126]}
      />
    </Flex>
  );
};

export default FlightGlobe;
