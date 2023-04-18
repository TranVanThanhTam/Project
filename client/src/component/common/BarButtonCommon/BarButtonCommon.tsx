import React from "react";
import Styles from "./BarButtonCommon.module.css";
import clsx from "clsx";

const BarButtonCommon: React.FC<IBarButtonCommon> = (props) => {
  const { link, title, background } = props;

  return (
    <div>
      <a href={link}>
      <button className={clsx(Styles.bot_btn, {
        [Styles.background] : background
      })}>
        {title ?? <span className={Styles.bot_textbtn}>{title}</span>}
      </button>
      </a>
    </div>
  );
};

export default BarButtonCommon;
