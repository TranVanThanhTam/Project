import React from "react";
import Styles from "./InfoFooterCommon.module.css";

const InfoFooterCommon: React.FC<IPropsInfoFooterCommon> = (props) => {
  const { title, list } = props;

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}> {title}</h3>
      <ul className={Styles.list}>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoFooterCommon;