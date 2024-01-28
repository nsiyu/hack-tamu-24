import { Flex } from "antd";
import PageTitle from "./PageTitle";
import RouterButton from "./RouterButton";

const ItineraryPage = () => {
  const itinerary = [
    {
      itinerary:
        "food:\n- Bob's Donuts ($)\n   Address: 1621 Polk St, San Francisco, CA 94109\n   Rating: 4.7/5\n- The House ($$)\n   Address: 1230 Grant Ave, San Francisco, CA 94133\n   Rating: 4.6/5\n- Tartine Bakery & Cafe ($$)\n   Address: 600 Guerrero St, San Francisco, CA 94110\n   Rating: 4.5/5\n- State Bird Provisions ($$$)\n   Address: 1529 Fillmore St, San Francisco, CA 94115\n   Rating: 4.4/5",
    },
  ];
  return (
    <Flex vertical style={{ padding: "20px" }}>
      <Flex align="center" gap={10}>
        <PageTitle title="Itinerary" />
        <RouterButton />
      </Flex>
      <Flex style={{ color: "white" }}>{itinerary[0].itinerary}</Flex>
    </Flex>
  );
};

export default ItineraryPage;
