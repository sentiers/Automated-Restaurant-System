import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

const Tables = () => (
  <Container fluid className="main-content-container px-4">

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">메뉴별 통계 내역</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    종류
                  </th>
                  <th scope="col" className="border-0">
                    금액
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>메뉴 1</td>
                  <td>100,000</td>
                </tr>
                <tr>
                  <td>메뉴 2</td>
                  <td>100,000</td>
 
                </tr>
                <tr>
                  <td>메뉴 3</td>
                  <td>100,000</td>
                </tr>
                <tr>
                  <td>메뉴 4</td>
                  <td>100,000</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
);


export default Tables;
