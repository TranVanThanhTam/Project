import React, { useState } from 'react';
import Style from './NextCommon.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { AiOutlineDoubleRight } from "react-icons/ai"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import 'react-bootstrap'
import numeral from "numeral";
import Form from 'react-bootstrap/Form';
import { FiDivideCircle } from 'react-icons/fi';
import { Col, Image, Button, Container, Row } from 'react-bootstrap';


const NextCommon: React.FC<IPNetImgCommon> = (props) => {


  const [currentIndex, setCurrentIndex] = useState(0);


  const [isShowLike, setIsShowLike] = useState(true);

  const handleClick = () => {
    setIsShowLike(!isShowLike)
  }
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    currentIndex < (props.images).length - 1 && setCurrentIndex(currentIndex + 1)
  }
  const handlePrevClick = () => {
    currentIndex > 0 && setCurrentIndex(currentIndex - 1)
  }
  const formattedprice = props.price
    ? numeral(props.price).format("$0,0")
    : null;
  return (


    <Container className={Style.Carousel}>
      <Row className={Style.Carousel}>
        
          <Col className={Style.col1}>
            <div className={Style.productthumbnails}>
              {props.thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
           </div>
          </Col>
        <Col className={Style.nut}>
          <div
            className={Style.img}
            style={{ backgroundImage: `url(${props.images[currentIndex]})` }} >

            <button className={Style.left} onClick={handlePrevClick}>  <AiOutlineDoubleLeft /></button>
            <button className={Style.right} onClick={handleNextClick}> <AiOutlineDoubleRight /> </button>
          </div>
        </Col>
        <Col className={Style.tong}>

          <div className={Style.noidung}>
            <p>{props.description}</p>
            <span>{formattedprice ?? <span>{formattedprice}</span>} </span>
          </div>

          <div className={Style.mau}>
            <h2>COLOUR:</h2>
            <p>{props.Colour}</p>
          </div>

          <Form.Select aria-label="Default select example">
            <option>Please Select</option>
            <option>{props.select}</option>

          </Form.Select>


          <div className={Style.tym}>
            <button className={Style.mua}>ADD TO BAG</button>
            <button className={Style.btn_like} onClick={handleClick}>
              {isShowLike ? <AiOutlineHeart className={Style.heart} />
                : <AiFillHeart className={Style.heart} />}
            </button>
          </div>



        </Col>
      </Row>
    </Container>


  );
};

export default NextCommon;