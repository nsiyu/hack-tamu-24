import React from "react";
import { Checkbox, Layout, Row, Col, Button, Image, Flex, Card } from "antd";
import Interest from "./Interest";


const style = {
 background: "#0092ff",
 padding: "8px 0",
};


const SelectInterest = () => {
 return (
   <Row gutter={[16, 16]}>
     <Col span={12} >
       <Interest imgSource = "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlraW5nfGVufDB8fDB8fHww" interest = 'Hiking'/>
     </Col>
     <Col span={12} >
       <Interest imgSource = "https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-1604991.jpg&fm=jpg" interest = 'Exhibition'/>
     </Col>
     <Col span={12} >
       <Interest imgSource = "https://covenantwildlife.com/wp-content/uploads/2022/07/Aquatic-Habitats-of-the-World-Hero-image.jpg" interest = 'Aquatic'/>
     </Col>
     
     <Col span={12} >
       <Interest imgSource = "https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg" interest = 'Shopping'/>
     </Col>
     
     
     <Col span={12} >
       <Interest imgSource = "https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg" interest = 'Arts'/>
     </Col>
     <Col span={12} >
       <Interest imgSource = "https://res.cloudinary.com/jerrick/image/upload/v1691497122/64d232a1e4ee2e001d9d81e3.jpg" interest = 'Photography'/>
     </Col>
     <Col span={12} >
       <Interest imgSource = "https://alameda.edu/wp-content/uploads/2021/07/History.png" interest = 'History'/>
     </Col>
     
     
     <Col span={12} >
       <Interest imgSource = "https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0=" interest = 'Food'/>
     </Col>
    
   </Row>
 );
};


export default SelectInterest;



