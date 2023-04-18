import React from "react";
import HeroButtonCommon from "../HeroButtonCommon/HeroButtonCommon";
import Styles from "./MomentCommon.module.css"

const MomentCommon: React.FC<IMomentCommon> = (props) => {
    
    const { link, img, title, paragraph} = props

    return(
        <div className={Styles.bgmoment}>
            <a href={link}>
              <img className={Styles.moment_img} src={img}/>
            </a>
            <h2 className={Styles.moment_title}>{title}</h2>
            <p className={Styles.moment_paragraph}>{paragraph}</p>
            <div className={Styles.moment_btn}>
              <HeroButtonCommon
                title="SHOP NOW"
                hideboder={false}
                height="60px"
              />
            </div>
        </div>
    )
}

export default MomentCommon