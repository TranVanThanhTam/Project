import React from "react";
import Styles from "./HeroButtonCommon.module.css";
import clsx from "clsx";

const HeroButtonCommon: React.FC<IHeroButtonCommon> = (props) => {
  const { title, hideboder, height, background } = props;

  return (
    <div>
      <button 
      className={clsx(Styles.hero_button, {
        [Styles.hideboder] : hideboder
      })}
      style={{height: height, backgroundColor: background}}
      >
        {title ?? <span className={Styles.bot_textbtn}>{title}</span>}
      </button>
    </div>
  );
};

export default HeroButtonCommon;
