import clsx from "clsx";
import React from "react";
import Styles from "./ButtonCommon.module.css";
const ButtonShopCommon: React.FC<IPButtonCommon> = (props) => {
    const { title, background } = props;
    return (
        <div>
            <button className={clsx(Styles.bot_btn, { [Styles.background]: background })}>
            {title ?? <span className={Styles.bot_textbtn}>{title}</span>}
        </button>
    </div >
  )
};




export default ButtonShopCommon;