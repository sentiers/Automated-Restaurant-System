import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";


const MenuManagement = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="메뉴관리" subtitle="test"className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">

          <CardHeader className="border-bottom">
          <Button pill outline size="sm" className="mb-2">메뉴추가</Button>
          </CardHeader>

          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    이름
                  </th>
                  <th scope="col" className="border-0">
                    가격
                  </th>
                  <th scope="col" className="border-0">
                    정보
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>##원</td>
                  <td>####</td>
                  <td>
                  <CardHeader className="border-bottom" className="text-sm-right">
          <Button pill outline size="sm" className="mb-2">상세정보</Button>
          </CardHeader>
                  </td>
                </tr>
                <tr>
                <td>#</td>
                  <td>##원</td>
                  <td>####</td>
                  <td>
                  <CardHeader className="border-bottom" className="text-sm-right">
          <Button pill outline size="sm" className="mb-2">상세정보</Button>
          </CardHeader>
                  </td>
                 
                </tr>
                <tr>
                <td>#</td>
                  <td>##원</td>
                  <td>####</td>
                  <td>
                  <CardHeader className="border-bottom" className="text-sm-right">
          <Button pill outline size="sm" className="mb-2">상세정보</Button>
          </CardHeader>
                  </td>
                </tr>
 
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Container>
);

export default MenuManagement;