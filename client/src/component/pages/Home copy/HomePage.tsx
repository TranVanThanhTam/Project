import React, { useEffect } from "react";
import NavBarLayout from "../../layout/NavBarLayout/NavBarLayout";
import FeatureCommon from "../../common/FeatureCommon/FeatureCommon";
import HeroButtonCommon from "../../common/HeroButtonCommon/HeroButtonCommon";
import LogoCommon from "../../common/LogoCommon/LogoCommon";
import Styles from "./HomePage.module.css";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import heromen from "../../../images/heromen.png";
import heworomen from "../../../images/herowomen.png";
import MomentCommon from "../../common/MomentCommon/MomentCommon";
import momentmen from "../../../images/momentmen.png";
import momentwomen from "../../../images/momentwomen.png";
import momentmen2 from "../../../images/momentmen2.png";
import momentwomen2 from "../../../images/momentwomen2.png";
import FooterLayout from "../../layout/FooterLayout/FooterLayout";

const HomePage: React.FC<IHomePage> = (props) => {
  const { type } = props;

  useEffect(() => console.log(type));

  const [feature, setFeature] = React.useState<Array<IFeatureCommon>>([]);
  const [featurew, setFeaturew] = React.useState<Array<IFeatureCommon>>([]);

  const [logo, setLogo] = React.useState<Array<ILogoCommon>>([]);

  const [logow, setLogow] = React.useState<Array<ILogoCommon>>([]);

  React.useEffect(() => {
    axios.get("http://localhost:9000/featurecommons").then((response) => {
      setFeature(response.data);
      // console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:9000/featurewcommons").then((response) => {
      setFeaturew(response.data);
      // console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:9000/logocommons").then((response) => {
      setLogo(response.data);
      // console.log(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:9000/logowcommons").then((response) => {
      setLogow(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <div>
      <NavBarLayout />
      <div className={Styles.bg_sale}>
        <div className={Styles.bgimg_sale}>
          <img
            className={Styles.img_sale}
            src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2023/feb/2023-spinner/web_spinner_gbl_215x40.gif"
          />
        </div>
        <div className={Styles.bgtext1_sale}>
          <p className={Styles.text1_sale}> UP TO +30% OFF OUTLET! </p>
        </div>
        <div className={Styles.bgtext2_sale}>
          <p className={Styles.text2_sale}> ALREADY UP TO 70% OFF </p>
        </div>
        <div className={Styles.bgtext3_sale}>
          <p className={Styles.text3_sale}> Discount revealed at checkout </p>
        </div>
        <div className={Styles.bgtext4_sale}>
          <span className={Styles.text4_sale}>With code:</span>
          <span className={Styles.textboder_sale}>POTLUCK</span>
        </div>
        <div className={Styles.bgtext5_sale}>
          <p className={Styles.text5_sale}>
            Outlet items only. See website banner for Ts&Cs. Selected marked
            products excluded from promo.
          </p>
        </div>
      </div>
      <div className={Styles.main}>
        <div
          className={Styles.hero_img}
          style={{
            backgroundImage: `url(${type === "men" ? heromen : heworomen})`,
          }}
        >
          <div className={Styles.bghero_holder}>
            <button className={Styles.hero_holder}>
              <h2 className={Styles.hero_title}>
                {type === "men" ? "Spring looks" : "Party vibes"}
              </h2>
            </button>
          </div>
          <div className={Styles.bghero_button}>
            <HeroButtonCommon
              title={type === "men" ? "SHOP NOW" : "SHOP ASOS DESIGN"}
              hideboder={true}
              height="44px"
            />
          </div>
        </div>
        {type === "men" ? (
          <div className={Styles.bgfeature}>
            {feature.map((item) => (
              <Row>
                <Col key={item._id}>
                  <FeatureCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        ) : (
          <div className={Styles.bgfeature}>
            {featurew.map((item) => (
              <Row>
                <Col key={item._id}>
                  <FeatureCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        )}
        <div className={Styles.moment}>
          <MomentCommon
            img={type === "men" ? momentmen : momentwomen}
            title={type === "men" ? "JUST IN: CARGOS" : "ASOS LEXU"}
            paragraph={type === "men" ? "Trending trews" : "Oh, she fancy"}
          />
          <MomentCommon
            img={type === "men" ? momentmen2 : momentwomen2}
            title={type === "men" ? "CASUAL COLLECTION" : "THE HOLIDAY"}
            paragraph={type === "men" ? "Trending trews" : "Pack me, plz"}
          />
        </div>
        <h2 className={Styles.logo_title}>TRENDINGS BRANDS</h2>
        {type === "men" ? (
          <div className={Styles.logo}>
            {logo.map((item) => (
              <Row>
                <Col key={item._id}>
                  <LogoCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        ) : (
          <div className={Styles.logo}>
            {logow.map((item) => (
              <Row>
                <Col key={item._id}>
                  <LogoCommon {...item} />
                </Col>
              </Row>
            ))}
          </div>
        )}
      </div>
      <FooterLayout />
    </div>
  );
};

export default HomePage;
