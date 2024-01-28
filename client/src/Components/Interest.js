import React from 'react'
import { Checkbox, Layout, Row, Col, Button, Image, Flex, Card } from "antd";


const Interest = ({imgSource  , interest}) =>{
 return (
   <Flex  vertical align="center">
   <Card
  
     hoverable
     style={{
       width: 100,
       height: 100,
     }}
     cover={
       <img
         alt="example"
         src= {imgSource}
         style={{ width: '100%', height:101}}
        
       />
     }
   ></Card>


   <Layout justify="center"  style={{ backgroundColor: "transparent", textAlign:'center' }}>
     {interest}
   </Layout>
 </Flex>
 );
}


export default Interest

