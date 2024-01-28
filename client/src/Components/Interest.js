import React from "react";
import { Checkbox, Layout, Row, Col, Button, Image, Flex, Card } from "antd";


const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
const Interest = ({ imgSource, interest }) => {
  return (

    <Flex vertical align="center">
    
      <Card
        hoverable
        style={{
          width: 150,
          height: 150,
        }}
        cover={
          <img
            alt="example"
            src={imgSource}
            style={{ width: 150, height: 150 }}
          />
        }
      ></Card>

      <Layout
        justify="center"
        
        style={{ backgroundColor: "transparent", textAlign: "center" , fontSize:'24px'}}
      >
        {interest}
      </Layout>
      <Checkbox onChange={onChange} style={{position:"absolute", top:'12px', right:'48px', }}/>
    </Flex>
  );
};

export default Interest;
