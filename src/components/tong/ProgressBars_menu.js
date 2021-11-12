import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, ListGroupItem, Progress } from "shards-react";

const ProgressBars = () => (
  <Container fluid className="main-content-container px-4">

  {/* 통계 그래프 */}
  <Row>
    <Col>
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">통계 그래프</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3">
          <ListGroupItem className="px-3">
            <div className="mb-2">
              <strong className="text-muted d-block mb-3">메뉴별 통계 그래프</strong>
                <Progress style={{ height: "10px" }} value={50} className="mb-3" />
                  메뉴 1<Progress
                    theme="success"
                    style={{ height: "10px" }}
                    className="mb-3"
                    value={40}
                  />메뉴 2
                <Progress
                  theme="info"
                  style={{ height: "10px" }}
                  className="mb-3"
                  value={60}
                />메뉴 3
                <Progress
                  theme="danger"
                  style={{ height: "10px" }}
                  className="mb-3"
                  value={80}
                />메뉴 4
              </div>
            </ListGroupItem>
          </CardBody>
        </Card>
      </Col> 
    </Row>
  </Container>
);

export default ProgressBars;
