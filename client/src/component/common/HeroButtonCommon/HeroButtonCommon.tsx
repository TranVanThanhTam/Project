import React from "react";
import Styles from "./HeroButtonCommon.module.css";
import clsx from "clsx";

const HeroButtonCommon: React.FC<IHeroButtonCommon> = (props) => {
  const { title, hideboder, height, background, color, width } = props;

  return (
    <div>
      <button 
      className={clsx(Styles.hero_button, {
        [Styles.hideboder] : hideboder
      })}
      style={{height: height, backgroundColor: background, color: color, width: width}}
      >
        {title ?? <span className={Styles.bot_textbtn}>{title}</span>}
      </button>
    </div>
  );
};

export default HeroButtonCommon;
