import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ItemSavedCommon from "../../common/WEB/ItemSaved/ItemSavedCommon";
import Styles from './Saved.module.css'




const Saved: React.FC = () => {

    const [products, setProducts] = React.useState<Array<IProduct>>([]);

    React.useEffect(() => {
        axios.get("http://localhost:9000/products").then((response) => {
            setProducts(response.data);
            // console.log(response.data);
        });
    }, []);

    return (
        <div className={Styles.Container}>
            <div className={Styles.header}>
                <p>Saved Items</p>
            </div>
            <div className={Styles.mid}>
            <div className={Styles.productList}>
                {products.map((item) => (
                  <Row key={item.id}>
                    <Col key={item.id}>
                      <ItemSavedCommon {...item} />
                    </Col>
                  </Row>
                ))}
                </div>
                
            </div>
            
        </div>
    )
};

export default Saved;