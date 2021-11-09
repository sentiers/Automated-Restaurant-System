import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Col } from "shards-react";

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { label, image, price } = this.props;
    return (
      <Col lg="3" className="mb-4">
      <Card>
           <CardBody>
           <div>
             <h4>{label}</h4>
           </div>
           <div>{image}</div> 
           <div>{price}</div>
           </CardBody>
         </Card>
       </Col>
    );
  }
}

MenuCard.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
};

MenuCard.defaultProps = {
  label: "메뉴",
  image: "사진",
  price: "가격?"
}

export default MenuCard;
