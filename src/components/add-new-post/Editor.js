import React from "react";
import ReactQuill from "react-quill";
import { Card, CardHeader, CardBody, Form, FormInput, Button, Row, Col, Container } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardHeader>
      <Row>
         <Col md="3">
      <h4 className="m-0"> 주문내역 </h4>
      </Col>
      <Button size="sm" theme="primary" className="mb-2 mr-1">
        대기열
      </Button>
      <Button size="sm" theme="primary" className="mb-2 mr-1">
        완료
      </Button>
      </Row>
    </CardHeader>
    <CardBody>
      
    <Container fluid className="main-content-container px-4 pb-4">
        <Row className="mb-2">
         <Col className="mb-4">
            <Card>
              <CardBody>
              <div>
                <h4>주문 A</h4>
              </div>
              <div>메뉴1 x2</div>
              <div>메뉴2 x1</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          </Row>
          <Row className="mb-2">
         <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          </Row>
          <Row className="mb-2">
         <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>주문 B</h4>
              </div>
              <div>　</div>
              <div>　</div>
              </CardBody>
            </Card>
          </Col>
          </Row>
      </Container>
    </CardBody>
  </Card>
);

export default Editor;
