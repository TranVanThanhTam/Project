import React, { useMemo } from "react";
import numeral from "numeral";
import "numeral/locales/en-gb";
import Styles from "./ItemSavedCommon.module.css";

numeral.locale("en-gb");

const ItemSavedCommon: React.FC<IPropsItemBagCommon> = (props) => {
  const { title, imgLeave, normalPrice, price, total, discount } = props;

  const formattedoldPrice = price ? numeral(price).format("$0,0") : null;

  const formattednewPrice = total ? numeral(total).format("$0,0") : null;

  const listSelect = [
    { id: 1, text: "SIZE", value: "1" },
    { id: 2, text: "XS", value: "2" },
    { id: 3, text: "S", value: "3" },
    { id: 4, text: "M", value: "4" },
    { id: 5, text: "L", value: "5" },
    { id: 6, text: "XL", value: "6" },
  ];

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.top}>
          <div className={Styles.image}>
            {/* style={{ backgroundImage: `url(${imgLeave})` }} */}
            <img src={imgLeave} alt="" />
          </div>

          <div className={Styles.title}>
            {title ?? <div className="input-group-text">{title}</div>}
          </div>
        </div>

        <div className={Styles.mid}>
          <div className={Styles.price}>
            {/* <span className={Styles.normal_price}>
                            {price ? (
                                <span>{numeral(price).format("$0,0.00")}</span>
                            ) : null}
                        </span> */}
            <span className={Styles.new_price}>
              {formattednewPrice ?? <span>{formattednewPrice}</span>}
            </span>
          </div>

          {/* SELECT GROUP */}
          <div className={Styles.select_group}>
            <section className={Styles.form}>
              <option value="">MALLARD GREEN</option>
            </section>
            <select
              className={Styles.form_select}
              aria-label=".form-select-sm example"
            >
              <option selected>Size</option>
              <option value="1">XS</option>
              <option value="2">XL</option>
            </select>
          </div>
        </div>
        <button className={Styles.button}>MOVE TO BAG</button>
      </div>
    </div>
  );
};

export default ItemSavedCommon;
