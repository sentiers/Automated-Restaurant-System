import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import OrderRegistration from "../components/home/OrderRegistration";
import OrderRegistration2 from "../components/home/OrderRegistration2";
import OrderPrice from "../components/home/OrderPrice";
import OrderList from "../components/home/OrderList";

const Home = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
      <Button size="sm" theme="primary" className="mb-2 mr-1">
        admin
      </Button>
      <Button theme="primary" className="mb-2 mr-1">
        출퇴근
      </Button>
    
    <Row>
      {/* Sidebar Widgets */}
      <Col lg="6" md="12">
        <OrderRegistration2 />
        <OrderPrice />
      </Col>

      {/* Editor */}
      <Col lg="6" md="12">
        <OrderList />
      </Col>
    </Row>
  </Container>
);

export default Home;
