import React from "react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ITitleTableCommon } from "../../../interface/component/common/TitleTableCommon";
import { ROUTES } from "../../../utils/constants/routes";
import Styles from "./TitleTableCommon.module.css"

const TitleTableCommon: React.FC<ITitleTableCommon> = (props) => {

    const { link, icon, title } =props
  return (
    <li className={Styles.wrap}>
      <div className={Styles.wrap_icon}>
        <BsPerson className={Styles.icon} />
      </div>
      <Link to={ROUTES.REGISTER}>
        <div className={Styles.wrap_text}>
          <span className={Styles.text}>{title}</span>
        </div>
      </Link>
    </li>
  );
};

export default TitleTableCommon;
