import React from "react";
import ItemBagCommon from "../../common/ItemBagCommon/ItemBagCommon";
import Styles from "./Bag.module.css";
import { Col, Row } from "react-bootstrap";
import { RiErrorWarningLine } from "react-icons/ri";
// import productItems from "../../../data/productItems.json";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import FooterLayout from "../../layout/FooterLayout/FooterLayout";
import axios from "axios";

const Bag: React.FC = () => {
  const [products, setProducts] = React.useState<Array<IProduct>>([]);

  React.useEffect(() => {
    axios.get("http://localhost:9000/products").then((response) => {
      setProducts(response.data);
      // console.log(response.data);
    });
  }, []);
  return (
    <>
      <NavBarLayout />

      <div className={Styles.wrap_container}>
        <div className={Styles.container}>
          {/* CONFIRM LIST PRODUCTS */}
          <div className={Styles.bag_content_wrapper}>
            <div className={Styles.bag_content}>
              <div className={Styles.bag_name}>
                <h1 className={Styles.name}>MY BAG</h1>
                <p className={Styles.warning}>
                  Items are reserved for 60 minutes
                </p>
              </div>
              {/* PRODUCT LIST */}
              <div className={Styles.productList}>
                {products.map((item) => (
                  <Row key={item._id}>
                    <Col key={item._id}>
                      <ItemBagCommon {...item} />
                    </Col>
                  </Row>
                ))}
                {/* SUB-TOTAL */}
                <div className={Styles.total}>
                  <div className={Styles.subtotal}>
                    <span className={Styles.sub_text}>SUB-TOTAL</span>
                    <span className={Styles.total_price}>£138.50</span>
                  </div>
                </div>

                {/* BAG-BOTTOM */}
              </div>
            </div>

            {/* SUB-TOTAL FORM */}
            <div className={Styles.total_form}>
              <div className={Styles.total_wrapper}>
                <div className={Styles.total_top}>
                  <h1 className={Styles.name}>TOTAL</h1>
                </div>
                <div className={Styles.total_mid}>
                  <div className={Styles.mid_content}>
                    <span>Sub-total</span>
                    <span>£138.50</span>
                  </div>
                  <div className={Styles.mid_content}>
                    <span>Delivery</span>
                    <div className={Styles.deli_icon}>
                      <RiErrorWarningLine
                        style={{ height: "17px", width: "20px", color: "gray" }}
                      />
                    </div>
                  </div>
                  {/* SELECT DELIVERY */}
                  <select className={Styles.select}
                  >
                    <option selected>Standard Delivery (£10.00)</option>
                    <option value="1">Express Delivery (£20.00)</option>
                    <option value="2">...</option>
                  </select>
                  <hr/>
                  <button className={Styles.btn}>CHECKOUT</button>
                </div>
                <div className={Styles.bot}>
                  <span>WE ACCEPT :</span>

                  {/* PAYMENT ICON */}
                  <ul className={Styles.payment}>
                    <li>
                      <img
                        className={Styles.payment_icon}
                        src="https://images.asos-media.com/navigation/visa-png"
                        alt="VISA"
                      />
                    </li>
                    <li>
                      <img
                        className={Styles.payment_icon}
                        src="https://images.asos-media.com/navigation/mastercard-png"
                        alt="Mastercard"
                      />
                    </li>
                    <li>
                      <img
                        className={Styles.payment_icon}
                        src="https://images.asos-media.com/navigation/pay-pal-png"
                        alt="PayPal"
                      />
                    </li>
                    <li>
                      <img
                        className={Styles.payment_icon}
                        src="https://images.asos-media.com/navigation/american-express-png"
                        alt="American Express"
                      />
                    </li>
                    <li>
                      <img
                        className={Styles.payment_icon}
                        src="https://images.asos-media.com/navigation/visa-electron-png"
                        alt="VISA Electron"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterLayout />
    </>
  );
};

export default Bag;
