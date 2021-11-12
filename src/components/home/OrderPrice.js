import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
} from "shards-react";

const OrderPrice = ({ title }) => (
  <Card small className="mb-3">
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <div>메뉴1 x2</div>
          <div>메뉴1 x2</div>
          <div>메뉴1 x2</div>
          <div>total</div>
          <div className="float-right">
           <Button theme="primary" className="mb-2 mr-1">
             완료
           </Button>
           </div>
        </ListGroupItem>

      </ListGroup>
    </CardBody>
  </Card>
);

export default OrderPrice;
