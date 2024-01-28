import Profile from "./components/Profile";
import { ConfigProvider, theme, Layout, Card, Flex } from "antd";
import Statistics from "./components/Statistic";


function App() {
  const { darkAlgorithm } = theme;

  return (
    <>
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      <Card>
      <Profile/>
      <Statistics/>
      </Card>
    </ConfigProvider>
    </>
  );
}

export default App;
