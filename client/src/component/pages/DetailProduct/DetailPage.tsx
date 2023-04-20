import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Style from "./DetailPage.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import FooterLayout from "../../layout/FooterLayout/FooterLayout";
import DetailTask from "./DetailTask";
import axios from "axios";
import numeral from "numeral";
import "numeral/locales/en-gb";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
numeral.locale("en-gb");

const ProductDetail: React.FC = () => {

  const {productId} = useParams()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowLike, setIsShowLike] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState<ICardCommon>({
    _id: "",
    discount: 0,
    price: 0,
    total: 0,
    selling: false,
    imgHover: "",
    imgLeave: "",
    branchId: undefined,
    title: "",
    carousels: [],
    thumbnails: [],
    sizes: [],
  });
  
  React.useEffect(() => {
    axios.get("http://localhost:9000/products/" + productId).then((response) => {
      setProduct(response.data);
      // console.log(response.data.title);
    });
  }, [productId]);
  

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    if (currentIndex === product.thumbnails.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(product.carousels.length - 1);
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
 
  const handleAddToCart = (product: ICardCommon) => {
    dispatch(addToCart(product));
  };
  //FORMAT PRICE
  
  const formattedDiscount = product.discount
    ? numeral(- product.discount / parseFloat("100") ).format("%")
    : null;

    const formattedoldPrice = product.price
    ? numeral(product.price).format("$0,0")
    : null;

    const formattednewPrice = product.total
    ? numeral(product.total).format("$0,0")
    : null;

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
                  src={product.carousels[currentIndex]}
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
            <div>{product.title}</div>
            </div>
            <div className={Style.price_top}>
              <span>Now</span> {product.discount ? <span>{formattednewPrice}</span> : <span>{formattednewPrice}</span>}
            </div>
            <div className={Style.discount_top}>
              <span>Was</span> {formattedoldPrice ?? <span>{formattednewPrice}</span>} {formattedDiscount ?? <span>{formattedDiscount}</span>}
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
              {product.sizes.map((sizes: any, index: any) => (
                <option key={index} value={sizes}>
                  {sizes}
                </option>
              ))}
            </Form.Select>

            <div className={Style.tym}>
              <button className={Style.btn_add} onClick={() => handleAddToCart(product)}>ADD TO BAG</button>
              <button className={Style.btn_like} onClick={handleClick}>
                {isShowLike ? (
                  <AiOutlineHeart className={Style.heart} />
                ) : (
                  <AiFillHeart className={Style.heart} />
                )}
              </button>
            </div>
            <DetailTask />
          </div>
        </div>
        </div>
      <FooterLayout />
    </div>
  );
};

export default ProductDetail;
