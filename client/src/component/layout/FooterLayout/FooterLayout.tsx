import axios from "axios";
import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import InfoFooterCommon from "../../common/InfoFooterCommon/InfoFooterCommon";
import LogoButtonCommon from "../../common/LogoButtonCommon/LogoButtonCommon";
import Styles from "./FooterLayout.module.css";

const FooterLayout: React.FC = () => {
  const [listInfo, setlistInfo] = React.useState<Array<IPropsInfoFooterCommon>>([]);
  const [logoButton, setLogoButton] = React.useState<Array<ILogoButtonCommon>>([]);

  React.useEffect(() => {
    axios.get("http://localhost:9000/infofooters").then((response) => {
      setlistInfo(response.data);
      // console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:9000/logofootercommons").then((response) => {
      setLogoButton(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.foot_top}>
          <div className={Styles.top_social}>
            <ul  className={Styles.social_group}>
            {logoButton?.map((item, _id) => (
                <LogoButtonCommon key={_id} {...item} />
            ))}
            </ul>
          </div>
        </div>
        <div className={Styles.info}>
          <div className={Styles.info_section}>
            {listInfo?.map((item, _id) => (
                <InfoFooterCommon  key={_id} {...item} />
            ))}
          </div>
        </div>
        <div className={Styles.foot_bottom}>
          <div className={Styles.bot_border}>
            <p>© 2023 ASOS</p>
            <ul className={Styles.text_group}>
              <li>
                <a
                  href="https://www.asos.com/privacy-policy/"
                  className={Styles.text}
                >
                  Privacy &amp; Cookies
                </a>
              </li>
              <li>
                <a
                  href="https://www.asos.com/terms-and-conditions/"
                  className={Styles.text}
                >
                  Ts&amp;Cs
                </a>
              </li>
              <li>
                <a
                  href="https://www.asos.com/accessibility/"
                  className={Styles.text}
                  style={{ borderRight: "none" }}
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLayout;