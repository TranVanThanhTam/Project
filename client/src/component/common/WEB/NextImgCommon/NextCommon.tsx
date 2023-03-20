import React, { useState } from 'react';
import Style from './NextCommon.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineDoubleLeft } from "react-icons/ai"
import { AiOutlineDoubleRight } from "react-icons/ai"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import 'react-bootstrap'
import numeral from "numeral";

import NextImgItem from '../data/NextImgItem.json'
import { FiDivideCircle } from 'react-icons/fi';


const NextCommon: React.FC<IPNetImgCommon> = (props) => {


  const [currentIndex, setCurrentIndex] = useState(0);


  const [isShowLike, setIsShowLike] = useState(true);

  const handleClick = () => {
    setIsShowLike(!isShowLike)
  }
  // const handleThumbnailClick = (index: number) => {
  //   setCurrentIndex(index);
  // };

  const handleNextClick = () => {
    currentIndex < (props.images).length - 1 && setCurrentIndex(currentIndex + 1)
  }
  const handlePrevClick = () => {
    currentIndex > 0 && setCurrentIndex(currentIndex - 1)
  }
  // const formattedprice = price
  // ? numeral(parseFloat(price)).format("$0,0")
  // : null;
  return (


    <>
      <div className={Style.Carousel}>
        <div className={Style.nut}>
          <div
            className={Style.img}
            style={{ backgroundImage: `url(${props.images[currentIndex]})` }} >

            <button className={Style.left} onClick={handlePrevClick}>  <AiOutlineDoubleLeft /></button>
            <button className={Style.right} onClick={handleNextClick}> <AiOutlineDoubleRight /> </button>
          </div>
        </div>
        <div className={Style.tong}>
          <div className={Style.noidung}>
          <p>{props.description}</p>
          <h4>{props.price}</h4>
          </div>
          <div className={Style.tym}>
          <button className={Style.mua}>ADD TO BAG</button>
            <button className={Style.btn_like} onClick={handleClick}>
              {isShowLike ? <AiOutlineHeart className={Style.heart} />
                : <AiFillHeart className={Style.heart} />}
            </button>
          </div>
        </div>
      </div>
    </>


  );
};

export default NextCommon;