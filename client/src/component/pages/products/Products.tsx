import React from "react";
import { Col, Row } from "react-bootstrap";
import CardShopCommon from "../../common/WEB/CardCommon/CardShopCommon";
import Productitem from '../../common/WEB/data/Productitem.json'
import Styles from './Products.module.css'

const Products: React.FC = () => {
    return (
        <>
        <div className={Styles.bg_product}>
        <div className={Styles.product}>
          {Productitem.map((item) => (
            <Row key={item.id}>
              <Col key={item.id}>
              <CardShopCommon {...item} />
              </Col>
            </Row>
          ))}
        </div>
      </div>
      </>
    )
}
export default Products;
