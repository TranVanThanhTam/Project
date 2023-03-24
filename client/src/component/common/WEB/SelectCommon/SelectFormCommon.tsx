import clsx from "clsx";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Styles from "./SelectCommon.module.css";

const SelectCommon: React.FC<IPSelectCommon> = (props) => {
  const { title, list } = props;
  return (
    <div>
      <Form.Select
        className={clsx(Styles.bot_btn)}
        style={{
          fontSize: "12px",
          fontFamily: "inherit",
          letterSpacing: "1px",
          paddingRight: "3px",
          marginRight: "7px",
        }}
      >
        {/* <option disabled selected>
          {title}
        </option> */}
        {list.map((item) => (
          <option className={Styles.text} key={item.id} value={item.value}>
            {item.text}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default SelectCommon;