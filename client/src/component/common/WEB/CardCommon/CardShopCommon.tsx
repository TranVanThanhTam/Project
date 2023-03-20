import React, { useState } from "react";
import "numeral/locales/en-gb";
import numeral from "numeral";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Styles from './CardShopCommon.module.css'

numeral.locale("en-gb");

const CardShopCommon: React.FC<IPropsCardCommon> = (props) => {
    const { title, label, normalPrice, oldPrice, newPrice, discount, selling , defaultImageSrc, hoverImageSrc,} = props;
    
    const [imgUrl, setImageUrl] = useState(true);

    const tradeImgUrl = () => {
        setImageUrl(!imgUrl)
    }

    const [isShowLike, setIsShowLike] = useState(true);

    const handleClick = () => {
        setIsShowLike(!isShowLike)
    }

    const formattedDiscount = discount
    ? numeral(parseFloat(discount) / -100).format("0%")
    : null;

    const formattedoldPrice = oldPrice
    ? numeral(parseFloat(oldPrice)).format("$0,0")
    : null;

    const formattednewPrice = newPrice
    ? numeral(parseFloat(newPrice)).format("$0,0")
    : null;
  
    return (
        <div className={Styles.product}>
            <div className={Styles.image}
                    style={{ backgroundImage: `url(${imgUrl ? defaultImageSrc : hoverImageSrc})`}}
                    onMouseOver={tradeImgUrl}
                    onMouseLeave={tradeImgUrl}
                >
                    <div className={Styles.discount}>
                        {formattedDiscount ?? <span>{formattedDiscount}</span>}
                    </div>
                    <div>
                        {selling ? <div className={Styles.selling}>selling fast</div> : null}
                    </div>
                    <div className={Styles.like}>
                    <button className={Styles.btn_like} onClick={handleClick}>
                    {isShowLike ? <AiOutlineHeart className={Styles.heart}/> 
                    : <AiFillHeart className={Styles.heart}/>}
                    </button>
                    </div>
            </div>
            <div className={Styles.title}>
                {title ?? <div>{title}</div>}
            </div>
            <span className={Styles.old_price}>
                {formattedoldPrice ?? <span>{formattedoldPrice}</span>}
            </span>
            <span className={Styles.new_price}>
                {formattednewPrice ?? <span>{formattednewPrice}</span>}
            </span>

        </div>
        
    )
 
}



export default CardShopCommon;
