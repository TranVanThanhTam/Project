import React from "react";
import Styles from "./LogoButtonCommon.module.css"

const LogoButtonCommon: React.FC<ILogoButtonCommon> = (props) => {

    const { link, img} = props

    return(
        <div>
            <li className={Styles.icon_social}>
                <a href={link} target={"_blank"}>
                  <img
                    className={Styles.icon}
                    src={img}
                    alt="logo"
                  />
                </a>
              </li>
        </div>
    )
}

export default LogoButtonCommon