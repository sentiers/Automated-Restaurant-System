/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody, Row, Col, Container,
  ListGroup,
  ListGroupItem,
  Button
} from "shards-react";

const SidebarActions = () => (
  <Card small className="mb-3">
    <CardHeader>
      <h4 className="m-0">주문등록</h4>
    </CardHeader>

    <CardBody className="p-0">
    <Container fluid className="main-content-container px-4 pb-4">
        <Row className="mb-2">
         <Col className="mb-4">
         <Card>
              <CardBody>
              <div>
                <h4>메뉴1</h4>
              </div>
              <div>사진</div> 
              <div>가격?</div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4">
            <Card>
            <CardBody>
              <div>
                <h4>메뉴2</h4>
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
                <h4>메뉴2</h4>
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
                <h4>메뉴2</h4>
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
                <h4>메뉴2</h4>
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
                <h4>메뉴2</h4>
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
                <h4>메뉴2</h4>
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
                <h4>메뉴2</h4>
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
                <h4>메뉴2</h4>
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
                <h4>메뉴2</h4>
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

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "Actions"
};

export default SidebarActions;
