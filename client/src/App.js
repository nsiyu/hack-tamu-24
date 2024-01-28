
import Testing from "./components/Testing";
import Profile from "./components/Profile";
import PersonalStat from "./components/Personal_stat";
import { ConfigProvider, theme, Button, Card } from "antd";
import { useState,useEffect } from "react";
import { Content } from "antd/es/layout/layout";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  return (
    <ConfigProvider
   theme={{
    algorithm:  darkAlgorithm ,
   }}>
   <Card style={{ width:'101' }}>
    
    <Content
        className="App"
        style={{ backgroundColor: "white", minHeight: "100vh" }}
      >
        <Profile></Profile>
        <PersonalStat> </PersonalStat>
      </Content>
   </Card>
  </ConfigProvider>
      
    
  );
}

export default App;
