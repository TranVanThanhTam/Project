import React from "react"
import Styles from "./LogoCommon.module.css";

const LogoCommon: React.FC<ILogoCommon> = (props) => {

    const { link, img } = props;

    return(
        <div className={Styles.logo}>
            <a href={link}>
                <img  className={Styles.img} src={img} />
            </a>
        </div>
    );
};

export default LogoCommon