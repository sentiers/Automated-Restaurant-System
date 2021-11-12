import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

const Tables = () => (
  <Container fluid className="main-content-container px-4">

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">전체 주문 내역</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    주문 번호
                  </th>
                  <th scope="col" className="border-0">
                    주문 메뉴
                  </th>
                 <th scope="col" className="border-0">
                    금액
                  </th>
                  <th scope="col" className="border-0">
                    주문 시간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123456789</td>
                  <td>음료 2</td>
                  <td>4,000</td>
                  <td>2021-10-29 10:00:00</td>
                </tr>
                <tr>
                  <td>123456789</td>
                  <td>음료 2</td>
                  <td>4,000</td>
                  <td>2021-10-29 10:00:00</td>
                </tr>
                <tr>
                  <td>123456789</td>
                  <td>음료 2</td>
                  <td>4,000</td>
                  <td>2021-10-29 10:00:00</td>
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
