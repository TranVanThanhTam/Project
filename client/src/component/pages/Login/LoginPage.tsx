import React from "react";
import InputCommon from "../../common/InputCommon/InputCommon";
import Styles from "./LoginPage.module.css";
import logo from "../../../images/logo_asos.png";
import facebook from "../../../images/facebook.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";
import { useLocation } from "react-router-dom";

const SignIn: React.FC = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/register";
  const isSigninPage = location.pathname === "/login";

  return (
    <div className={Styles.surrounding}>
      <div className={Styles.container}>
        {/* HEADER */}
        <div className={Styles.logo}>
          <Link to={"/"}>
            <img src={logo} alt="logo asos" />
          </Link>
        </div>

        {/* MAIN FORM */}
        {/* HEADER FORM */}
        <div className={Styles.main}>
          <div className={Styles.option}>
            <Link to={ROUTES.REGISTER}>
              <div
                className={`${Styles.titleJ} ${
                  isSignUpPage ? Styles.active : ""
                }`}
              >
                Join
              </div>
            </Link>
            <Link to={ROUTES.LOGIN}>
              <div
                className={`${Styles.titleS} ${
                  isSigninPage ? Styles.active : ""
                }`}
              >
                Sign in
              </div>
            </Link>
          </div>

          {/* INPUT */}
          <div className={Styles.form}>
            <div className={Styles.field}>
              <InputCommon label="EMAIL ADDRESS" isInputPassword={false} />
              <InputCommon label="PASSWORD" />
            </div>

            <div className={Styles.submit}>
              <div className={Styles.sign_in}>Sign in</div>
            </div>
            <div className={Styles.text}>Forgot password?</div>
          </div>

          {/* SOCIAL OPTION */}
          <div className={Styles.info}>
            <div
              style={{
                textAlign: "center",
                margin: "40px auto 40px",
                letterSpacing: "3px",
                fontSize: "15px",
                color: "#222222",
              }}
            >
              <h3>OR SIGN IN WITH ...</h3>
            </div>
            <div className={Styles.options_social}>
              <div className={Styles.social_container}>
                <div className={Styles.btn_social}>
                  <img
                    src="https://my.asos.com/Content/dist/images/d860112c552f4380997e32b29c5a0432.svg"
                    alt="google"
                    className={Styles.social_icon}
                  />
                  <div className={Styles.social_text}>GOOGLE</div>
                </div>
                <div className={Styles.btn_social}>
                  <img
                    src="https://my.asos.com/Content/dist/images/6ec595bf7f84e4933b4c1ab32c21c49a.svg"
                    alt="apple"
                    className={Styles.social_icon}
                  />
                  <div className={Styles.social_text}>APPLE</div>
                </div>
                <div className={Styles.btn_social}>
                  <img
                    src={facebook}
                    alt="facebook"
                    className={Styles.social_icon}
                    style={{ height: "22px", width: "22px", paddingTop: "5%" }}
                  />
                  <div className={Styles.social_text}>FACEBOOK</div>
                </div>
              </div>
            </div>
            <div className={Styles.text}>Where has Twitter Gone?</div>
            <div>
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={Styles.footer}>
        <div className={Styles.label}>
          <a>Privacy Policy</a>
          <a style={{ padding: "5px" }}>|</a>
          <a>Term and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
