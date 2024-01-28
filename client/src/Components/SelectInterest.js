import React from "react";
import { Checkbox, Layout, Row, Col, Button, Image, Flex, Card } from "antd";
import Interest from "./Interest";

const style = {
  background: "#0092ff",
  padding: "8px 0",
};

const SelectInterest = () => {
  const data = [
    {
      interest: "Hiking",
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlraW5nfGVufDB8fDB8fHww",
    },
    {
      interest: "Exhibition",
      url: "https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-1604991.jpg&fm=jpg",
    },
    {
      interest: "Aquatic",
      url: "https://covenantwildlife.com/wp-content/uploads/2022/07/Aquatic-Habitats-of-the-World-Hero-image.jpg",
    },
    {
      interest: "Shopping",
      url: "https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg",
    },
    {
      interest: "Arts",
      url: "https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg",
    },
    {
      interest: "Photography",
      url: "hhttps://res.cloudinary.com/jerrick/image/upload/v1691497122/64d232a1e4ee2e001d9d81e3.jpg",
    },
    {
      interest: "History",
      url: "https://alameda.edu/wp-content/uploads/2021/07/History.png",
    },
    {
      interest: "Food",
      url: "https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0=",
    },
  ];
  return (
    <Row gutter={[16, 16]}>
      {data.map((i) => (
        <Col span={12}>
          <Interest imgSource={i.url} interest={i.interest} />
        </Col>
      ))}
    </Row>
  );
};

export default SelectInterest;
