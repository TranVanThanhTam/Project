import React, { useState } from "react";
import Styles from "./InputCommon.module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

interface IStateInputCommon {
  isShowPassword: boolean;
  isForcus: boolean;
}

const defaultValueState: IStateInputCommon = {
  isForcus: false,
  isShowPassword: false,
};

const InputCommon: React.FC<IPropsInputCommon> = (props) => {
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

  const handleShowPassword = () => {
    setState((prev) => {
      return {
        ...prev,
        isShowPassword: !prev.isShowPassword,
      };
    });
  };

  return (
    <>
      <div className={Styles.input_group}>
        {label && <span className="input-group-text">{label}:</span>}
        <div className={Styles.input}>
          <input
            type={isInputPassword && !isShowPassword ? "password" : type}
            aria-label="Input field"
            className={`form-control ${Styles.input_text} ${className ?? ""}`}
            style={{
              color: color,
            }}
            placeholder={placeholder ?? ""}
          />
          {isInputPassword && (
            <span
              onClick={handleShowPassword}
              style={{
                // color: isShowPassword ? "red" : "blue",
                fontSize: "19px",
                marginLeft: "3px",
              }}
            >
              {isShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default InputCommon;
