import React from "react";
import CardCommon from "../../common/CardCommon/CardCommon";
// import productItems from "../../../data/productItems.json"
import Styles from "./ProductPage.module.css";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import FooterLayout from "../../layout/FooterLayout/FooterLayout";
import { Link } from "react-router-dom";

const ProductPage: React.FC<IProduct> = (props) => {
  const { type } = props;

  const [products, setProducts] = React.useState<Array<ICardCommon>>([]);

  React.useEffect(() => {
    axios.get("http://localhost:9000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div>
      <NavBarLayout />
      <div className={Styles.bg_product}>
        {/* <div className={Styles.product}>
          {products.map((item) => (
            <Row>
              <Col key={item._id}>
                <CardCommon {...item} />
              </Col>
            </Row>
          ))}
        </div> */}
        {type === "sale" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "6419c30b113cbd4d744ff135").map((item) => (
          <Row>
            <Col key={item._id}>
            <Link className={Styles.link} to={`/products/${item._id}`}>
              <CardCommon {...item} />
              </Link>
            </Col>
          </Row>
        ))}
      </div> : null}
      {type === "new in" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "6419c32f113cbd4d744ff136").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "clothing" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a424b50cc659f07c4a529").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "shoes" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a429750cc659f07c4a52a").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "accessories" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a434450cc659f07c4a52e").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "sportswear" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a439150cc659f07c4a52f").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "jeans" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a43a850cc659f07c4a530").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "brands" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a43b950cc659f07c4a531").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "topman" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a43ce50cc659f07c4a532").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "outlet" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a43f450cc659f07c4a533").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      {type === "marketplace" ?
        <div className={Styles.product}>
        {products.filter(branch => branch.branchId === "641a440550cc659f07c4a534").map((item) => (
          <Row>
          <Col key={item._id}>
          <Link className={Styles.link} to={`/products/${item._id}`}>
            <CardCommon {...item} />
            </Link>
          </Col>
        </Row>
        ))}
      </div> : null}
      </div>
      <FooterLayout/>
    </div>
  );
};
export default ProductPage;
