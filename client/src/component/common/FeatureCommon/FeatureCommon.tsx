import React from "react";
import Styles from "./FeatureCommon.module.css"

const FeatureCommon: React.FC<IFeatureCommon> = (props) => {

    const { link, img, title, paragraph } = props

    return (
        <div className={Styles.feature}>
            <a
                className={Styles.feature_img}
                href={link}
            >
                <img
                    className={Styles.feature_img}
                    src={img}
                />
            </a>
            <p className={Styles.feature_title}>{title ?? <span>{title}</span>}</p>
            <p className={Styles.feature_paragraph}>{paragraph}</p>
        </div>
    );
};

export default FeatureCommon