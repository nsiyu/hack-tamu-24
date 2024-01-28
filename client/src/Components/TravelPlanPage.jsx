import { Flex, Grid, Row } from "antd";
import TravelPlan from "./GeneratePlan/GeneratePlan";
import PageTitle from "./PageTitle";
import RouterButton from "./RouterButton";

const TravelPlanPage = () => {
  const plans = [
    {
      airlineLogo: "./placeholder_airline1.png",
      departureTime: "09:00 AM",
      airline: "XYZ Airways",
      classes: "Economy, Business",
      airportOrder: "DAL → LAX → HNL",
      duration: "5",
    },
    {
      airlineLogo: "./placeholder_airline2.png",
      departureTime: "12:30 PM",
      airline: "ABC Airlines",
      classes: "Economy",
      airportOrder: "DAL → JFK",
      duration: "3",
    },
    // Add more plans as needed
  ];

  return (
    <Flex vertical style={{ padding: "20px" }}>
      <Flex align="center" gap={10}>
        <PageTitle title="Travel plan" />
        <RouterButton />
      </Flex>
      <Flex>
        {plans.map((p) => (
          <TravelPlan plan={p} />
        ))}
      </Flex>
    </Flex>
  );
};

export default TravelPlanPage;
