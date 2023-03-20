import React, { useState } from "react";
import Styles from "./InputSearchCommon.module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

interface IStateInputCommon {
  isShowPassword: boolean;
  isForcus: boolean;
}

const defaultValueState: IStateInputCommon = {
  isForcus: false,
  isShowPassword: false,
};

const InputSearchCommon: React.FC<IPropsInputCommon> = (props) => {
  const {
    label,
    color = "gray",
    isInputPassword = true,
    type = "text",
    className,
    placeholder,
  } = props;
  const [state, setState] = useState<IStateInputCommon>(defaultValueState);
  const { isShowPassword, isForcus } = state;

  const handleForcus = () => {
    setState((prev) => {
      return {
        ...prev,
        isForcus: true,
      };
    });
  };

  return (
    <>
      <input
        className={`${Styles.mid_input_text} ${className ?? ""} ${
          isForcus ? Styles.mid_input_text_forcus : ""
        }`}
        type="text"
        placeholder={placeholder ?? ""}
        onFocus={handleForcus}
      />
    </>
  );
};

export default InputSearchCommon;