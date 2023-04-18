import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Style from "./DetailPage.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import products from "../../../data/detailPage.json";
import DetailProduct from "./DetailProduct";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import FooterLayout from "../../layout/FooterLayout/FooterLayout";

const ProductDetail: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowLike, setIsShowLike] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [product, setProduct] = useState(products[0]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    if (currentIndex === product.images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(product.images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClick = () => {
    setIsShowLike(!isShowLike);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div>
      <NavBarLayout />
      <div className={Style.main}>
        <div className={Style.main_top}>
          <div className={Style.left_top}>
            <div className={Style.productthumbnails}>
              {product.thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(index)}
                  style={{
                    width: "44px",
                    height: "56",
                    padding: "20px 20px 0px",
                  }}
                />
              ))}
            </div>
          </div>
          <div className={Style.mid_top}>
            <div className={Style.image}>
              <div className={Style.bgimg}>
                <Image
                  className={Style.img}
                  src={product.images[currentIndex]}
                  alt="Product Image"
                  fluid
                />
                <div className={Style.imagecontrols}>
                  <div className={Style.arrowButton} onClick={handlePrevClick}>
                    <MdKeyboardArrowLeft size={40} />
                  </div>
                  <div className={Style.arrowButton1} onClick={handleNextClick}>
                    <MdKeyboardArrowRight size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.right_top}>
            <div className={Style.title_top}>
              New Look long sleeve muscle fit poplin shirt in black
            </div>
            <div className={Style.price_top}>
              <span>Now</span> <span>£11.50</span>
            </div>
            <div className={Style.discount_top}>
              <span>Was</span> <span>£16.00</span> <span>(-28%)</span>
            </div>
            <div className={Style.colour_top}>COLOUR:</div>
            <div className={Style.size_top}>SIZE:</div>
            <Form.Select
              aria-label="Default select example"
              className={Style.forms}
              value={selectedSize}
              onChange={handleSizeChange}
              style={{
                marginTop: "8px",
                height: "40px",
                width: "100%",
                outline: "0",
              }}
            >
              <option>Please Select</option>
              {product.select.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </Form.Select>

            <div className={Style.tym}>
              <button className={Style.btn_add}>ADD TO BAG</button>
              <button className={Style.btn_like} onClick={handleClick}>
                {isShowLike ? (
                  <AiOutlineHeart className={Style.heart} />
                ) : (
                  <AiFillHeart className={Style.heart} />
                )}
              </button>
            </div>
            <DetailProduct />
          </div>
        </div>
        {/* <div className={Style.title_mid}>YOU MIGHT ALSO LIKE</div> */}
      </div>
      <FooterLayout />
    </div>
  );
};

export default ProductDetail;
