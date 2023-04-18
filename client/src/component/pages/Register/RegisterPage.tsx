import React from "react";
import InputCommon from "../../common/InputCommon/InputCommon";
import Styles from "./RegisterPage.module.css";
import logo from "../../../images/logo_asos.png";
import facebook from "../../../images/facebook.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";
import { useLocation } from "react-router-dom";
import moment from "moment";

const SignUp: React.FC = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/register";
  const isSigninPage = location.pathname === "/login";
  const dateOfBirth = new Date(); // replace with the actual date of birth

  // create a moment object from the date of birth and set the locale to 'fr'
  const momentDateOfBirth = moment(dateOfBirth).locale("fr");

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
          {/* SOCIAL OPTION */}
          <div className={Styles.info}>
            <div
              style={{
                textAlign: "center",
                margin: "135px 0 40px 0",
                letterSpacing: "3px",
                fontSize: "15px",
                color: "#222222",
              }}
            >
              <h3>SIGN UP WITH ...</h3>
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
            <div className={Styles.text}>
              Signing up with social is super quick. No extra passwords to
              remember - no brain fail. Don't worry, we'd never share any of
              your data or post anything on your behalf #notevil
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "40px auto 40px",
                letterSpacing: "3px",
                fontSize: "15px",
                color: "#222222",
              }}
            >
              <h3>OR SIGN UP WITH EMAIL</h3>
            </div>
          </div>

          {/* INPUT */}
          <div className={Styles.form}>
            <div className={Styles.field}>
              <InputCommon label="EMAIL ADDRESS" isInputPassword={false} />
              <div className={Styles.input_note}>
                We'll send your order confirmation here
              </div>

              <InputCommon label="FIRST NAME" isInputPassword={false} />
              <InputCommon label="LAST NAME" isInputPassword={false} />
              <InputCommon label="PASSWORD" isInputPassword={true} />
              <InputCommon
                type="datetime-local"
                label="DATE OF BIRTH"
                isInputPassword={false}
                value={momentDateOfBirth.format("YYYY MM DD")}
              />
              <div className={Styles.input_note}>
                You need to be 16 or over to use ASOS
              </div>
            </div>

            {/* INTEREST */}
            <div className={Styles.interest_container}>
              <div className={Styles.interest_label}>
                <p className={Styles.label_text}>MOSTLY INTERESTED IN:</p>
                <div className={Styles.radios}>
                  <div className={Styles.form_check}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className={Styles.form_check_label}
                      htmlFor="flexRadioDefault1"
                    >
                      Womenswear
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className={Styles.form_check_label}
                      htmlFor="flexRadioDefault2"
                    >
                      Menswear
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={Styles.submit}>
              <div className={Styles.sign_up}>Join ASOS</div>
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

export default SignUp;
