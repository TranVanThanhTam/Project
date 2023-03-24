import React from "react";
import { Col, Image, Button, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import SelectFormCommon from "../SelectCommon/SelectFormCommon";
import Style from './CartShop.module.css'


const CartShop: React.FC<IPCartCommon> = (props) => {

    return (
        <Container className={Style.full}>
            <Row className={Style.tong}>
                <Col className={Style.left}>
                    <div className={Style.header}>
                        <h1>MY BAG</h1>
                        <p>Items are reserved for 60 minutes</p>
                    </div >
                    <div className={Style.mid}>
                        <img src={props.img} alt="" className={Style.img} />
                        <div className={Style.noidung}>
                            <p>{props.price}</p>
                            <a href="https://www.asos.com/asos-design/asos-design-smart-tapered-shorts-in-green-scuba/prd/204625602">{props.title}</a>

                            <div className={Style.noidung2}>
                                <p>{props.color}</p>
                                <div className={Style.Select1}>
                                    {/* <SelectFormCommon background={""} title={""} boder={false} color={""} /> */}
                                    <Form.Select className={Style.forms} >
                                        {props.size.map((item, index) => (
                                            <option
                                                key={index}
                                                className='select-item'
                                                placeholder='Please select the sport'>
                                                <span className='select-title' placeholder='Please select the sport'>{item}</span>
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className={Style.Select2}>
                                    {/* <SelectFormCommon background={""} title={""} boder={false} color={""} /> */}
                                    <Form.Select className={Style.forms} >
                                        {props.quantity.map((item, index) => (
                                            <option
                                                key={index}
                                                className='select-item'
                                                placeholder='Please select the sport'
                                            >
                                                <span className='select-title' placeholder='Please select the sport'>{item}</span>
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.total}>
                        <p>SUB-TOTAL:</p>
                        <p>{props.price}</p>
                    </div>
                </Col>

                <Col className={Style.right}>1</Col>
            </Row>
        </Container>
    )
};

export default CartShop;