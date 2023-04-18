import React, { useState, useMemo } from "react";
import numeral from "numeral";
import "numeral/locales/en-gb";
import Styles from "./ItemBagCommon.module.css";
import SelectCommon from "../SelectCommon/SelectCommon";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

numeral.locale("en-gb");

const ItemBagCommon: React.FC<IPropsItemBagCommon> = (props) => {
  const { title, imgLeave, normalPrice, price, total, discount } = props;

  const formattedoldPrice = price ? numeral(price).format("$0,0") : null;

  const formattednewPrice = total ? numeral(total).format("$0,0") : null;

  const [isShowLike, setIsShowLike] = useState(true);

  const handleClick = () => {
    setIsShowLike(!isShowLike);
  };
  const listSelect = useMemo(
    () => [
      {
        id: 1,
        // title: "SIZE",
        list: [
          { id: 1, text: "S", value: "1" },
          { id: 2, text: "2", value: "2" },
          { id: 3, text: "3", value: "3" },
          { id: 4, text: "4", value: "4" },
        ],
      },
      {
        id: 2,
        // title: "Qty",
        list: [
          { id: 1, text: "Qty", value: "1" },
          { id: 2, text: "2", value: "2" },
          { id: 3, text: "3", value: "3" },
          { id: 4, text: "4", value: "4" },
        ],
      },
    ],
    []
  );
  return (
    <>
      <div className={Styles.surrounding}>
        <div className={Styles.container}>
          <div className={Styles.left}>
            <div>
              {/* LEFT*/}
              <div
                className={Styles.image}
                style={{ backgroundImage: `url(${imgLeave})` }}
              ></div>
            </div>
          </div>

          <div className={Styles.right}>
            <div className={Styles.price}>
              <span className={Styles.normal_price}>
                {normalPrice ? (
                  <span>{numeral(normalPrice).format("$0,0.00")}</span>
                ) : null}
              </span>
              <span className={Styles.new_price}>
                {formattednewPrice ?? <span>{formattednewPrice}</span>}
              </span>
              <span className={Styles.old_price}>
                {discount ? <span>{formattedoldPrice}</span> : null}
              </span>
            </div>

            {/* PRODUCT_NAME */}
            <div className={Styles.title}>
              {title ?? <div className="input-group-text">{title}</div>}
            </div>

            {/* SELECT GROUP */}
            <div className={Styles.select_group}>
              <span className={Styles.select_size}>SILVER</span>
              <span className={Styles.type}>
                {listSelect?.map((item) => {
                  return (
                    <SelectCommon
                      list={item.list}
                      key={`item__nav__${item.id.toString()}`}
                    />
                  );
                })}
              </span>
              {/* <span className={Styles.select_size}>SIZE</span>
              <span className={Styles.quantity}>Qty</span> */}
            </div>

            <div className={Styles.like}>
              <button className={Styles.btn_like} onClick={handleClick}>
                {isShowLike ? (
                  <AiOutlineHeart className={Styles.heart} />
                ) : (
                  <AiFillHeart className={Styles.heart} />
                )}
              </button>
              <span className={Styles.btn_text}>Save for later</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemBagCommon;
