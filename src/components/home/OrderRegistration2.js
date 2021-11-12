/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody, Row, Col, Container,
} from "shards-react";
import MenuCard from "./../../components/common/MenuCard";

const OrderRegistration2 = ({menus}) => (
  <Card small className="mb-3">
    <CardHeader>
      <h4 className="m-0">주문등록</h4>
    </CardHeader>

    <CardBody className="p-0">
    <Container fluid className="main-content-container px-4 pb-4">
        <Row className="mb-2">
          {menus.map(() => (
            <MenuCard
            label={menus.label}
            image={menus.image}
            price={menus.price}
            />
          ))}
          </Row>
      </Container>
    </CardBody>
  </Card>
);

OrderRegistration2.propTypes = {
  menus: PropTypes.array
};

OrderRegistration2.defaultProps = {
  menus: [
    {
      label: "메뉴1",
      image: "사진",
      price: "가격?"
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    },
    {
      label: "메뉴2",
      image: " ",
      price: " "
    }
  ]
}

export default OrderRegistration2;
