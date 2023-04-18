import React from "react";
import Styles from "./LikeCardCommon.module.css"

const LikeCardCommon: React.FC = () => {
    return(
        <div className={Styles.main}>
            <div className={Styles.img}>
                <div  className={Styles.discount}></div>
                <div className={Styles.delete}></div>
            </div>
            <div className={Styles.title}></div>
            <div className={Styles.price}></div>
            <div className={Styles.color}></div>
            <div className={Styles.size}></div>
            <div className={Styles.btn_move}></div>
        </div>
    );
};

export default LikeCardCommon