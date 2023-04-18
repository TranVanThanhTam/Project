import React, { useState } from "react";
import Styles from "./NavBarLayout.module.css";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBox2, BsPerson, BsQuestionCircle } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";
import BarButtonCommon from "../../common/BarButtonCommon/BarButtonCommon";
import InputSearchCommon from "../../common/InputSearchCommon/InputSearchCommon";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";

const TaskBar: React.FC = () => {
  const location = useLocation();
  const isWomenPage = location.pathname === "/women";
  const isMenPage = location.pathname === "/men";
  const [showTable, setShowTable] = useState(false);

  const handleHover = () => {
    setShowTable(true);
  };
  const handleCloseTable = () => {
    setShowTable(false);
  };

  const [buttons, setButtons] = React.useState<Array<IBarButtonCommon>>([]);

  React.useEffect(() => {
    axios.get("http://localhost:9000/barbuttons").then((response) => {
      setButtons(response.data);
      // console.log(response.data);
    });
  }, []);
  return (
    <div>
      <div className={Styles.top_bar}>
        <ul className={Styles.lang_group}>
          <li className={Styles.lang}>
            <span>Marketplace</span>
          </li>
          <li className={Styles.lang}>
            <span>Help & FAQs</span>
          </li>
          <li className={Styles.lang} style={{ borderRight: "1px solid #ddd" }}>
            <img
              src="https://assets.asosservices.com/storesa/images/flags/vn.png"
              alt="Vietnam"
              className={Styles.img}
            />
          </li>
        </ul>
      </div>
      <div className={Styles.mid_bar}>
        <div className={Styles.mid_main}>
          <a className={Styles.mid_linklogo} href="http://localhost:3000/men">
            <img
              className={Styles.mid_logo}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN5bWJvbCBpZD0iYSIgdmlld0JveD0iMCAwIDIzIDI0Ij48cGF0aCBkPSJNNS4wNzYgMTIuMDE3YzAtMy44MTQgMi4zMjgtNy41MDkgNi41MjEtNy41MDkgNC4xOTQgMCA2LjUyMiAzLjY5NSA2LjUyMiA3LjUxIDAgMTAuMDk4LTEzLjA0MyAxMC4wOTUtMTMuMDQzIDBabTE3LjkxOC03LjUyMVYuNjAzaC00Ljg3NXYxLjUxNEMxNi4xMjcuNjgzIDEzLjk2Ny4wMTMgMTEuNjMgMGgtLjAzM0wxMS41NjQgMEM4Ljc0Mi4wMTYgNi4xNzguOTg4IDMuODU3IDMuMTEgMi41OCA0LjI5MSAxLjYwNyA1LjYzNS45NjQgNy4xMTQuMzI3IDguNTg4IDAgMTAuMjM5IDAgMTIuMDE1YzAgMS42NTguMjg4IDMuMjExLjg1MyA0LjYxNi41NjYgMS40MDUgMS40MjYgMi43MDUgMi41NiAzLjg2MyAxLjEzNCAxLjE2IDIuNDAxIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N2guMDVsLjA0OS4wMDFjMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY5LS44NzEuNzMtLjMxIDEuNDMzLS43MDcgMi4xMDMtMS4xODd2MS40NTVoNC44NzVWNC40OTZaIi8+PC9zeW1ib2w+PHN5bWJvbCBpZD0iYiIgdmlld0JveD0iMCAwIDU3IDI0Ij48cGF0aCBkPSJNNTAuOTY0IDE5LjMxNmMtMS4wMTggMS4wMDktMy40OTUgMS40MDUtNS4yODIuMjUxLTEuMDYtLjY4NC0xLjgwMS0xLjkxMy0xLjc5OC0zLjE5OGwtNC41NTktLjAwMmMuNDk4LTEuMzM1Ljc1LTIuNzk4Ljc1LTQuMzUyIDAtLjM0OC0uMDEyLS42OS0uMDM3LTEuMDI4LjMuMzc2LjY1MS43MjEgMS4wNTggMS4wMjIgMi40OTUgMS44MzMgNS42NSAxLjcyNiA4LjQwNSAyLjg2Ny42NDQuMjY3IDEuMjgzLjYxOSAxLjcwNSAxLjE4Ni44NiAxLjE1OS44MDYgMi4yMTUtLjI0MiAzLjI1NFptLTI5LjAwNy03LjI5OWMwLTMuODE0IDIuMzI4LTcuNTEgNi41MjEtNy41MVMzNSA4LjIwNCAzNSAxMi4wMThjMCAxMC4xLTEzLjA0MiAxMC4wOTYtMTMuMDQyIDBabS02LjEzNi0uMDAzYy0yLjQ5NS0xLjgzMy01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjItMS43MDUtMS4xODctLjcwMy0uOTQ2LS41OTMtMi40MjcuMjQxLTMuMjUzIDEuMDE1LTEuMDA2IDMuNDkyLTEuNDA4IDUuMjgyLS4yNTIgMS4wNi42ODUgMS44MDIgMS45MTQgMS43OTggMy4xOThsNC41OTYuMDAyYy0uNDk0IDEuMzMzLS43NDcgMi43OTgtLjc0NyA0LjM1OSAwIC4zNjMuMDE1LjcyMi4wNDIgMS4wNzVhNS42OTIgNS42OTIgMCAwIDAtMS4xMDItMS4wNzZaTS4xOTQgOS41NDhhNS43MzMgNS43MzMgMCAwIDAgMS45IDIuNDY2YzIuNDk1IDEuODMzIDUuNjUgMS43MjUgOC40MDUgMi44NjcuNjQ1LjI2NyAxLjI4NC42MTggMS43MDUgMS4xODYuNzAzLjk0Ni41OTMgMi40MjctLjI0MiAzLjI1My0xLjAxNyAxLjAxLTMuNDk1IDEuNDA2LTUuMjgxLjI1Mi0xLjA2LS42ODUtMS44MDItMS45MTMtMS43OTgtMy4xOThsLTQuNjg5LS4wMDJtMCAyLjI3OGMuNDk0IDEuMzkxIDEuMzc1IDIuNjQgMi41MzIgMy41MjYgMi4xNDkgMS42NDcgNS4wMDggMS45OCA3LjY4MyAxLjc2NSAxLjY0OC0uMTMyIDMuMzE3LS40NjQgNC43NDUtMS4zMTcgMS43ODUtMS4wNjcgMi44MzYtMy4wMiAzLjAxNi01LjA0M2ExMi4xMiAxMi4xMiAwIDAgMCAyLjEyNCAyLjkxM2MxLjEzNCAxLjE2IDIuNDAyIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N3YuMDAxaC4wOTljMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY4LS44NzEgMS4zNjUtLjU3OCAyLjYzMy0xLjQ2IDMuNzY2LTIuNjJhMTIuMDc4IDEyLjA3OCAwIDAgMCAyLjIwNy0zLjA3NWMuMzM3IDEuODcyIDEuMzcgMy42MTIgMi44NTggNC43NTMgMi4xNSAxLjY0NyA1LjAwOCAxLjk4IDcuNjgzIDEuNzY1IDIuMDc4LS4xNjggMy4yNi0uNDMgNC43NDYtMS4zMTggMy42Mi0yLjE2MyA0LjIyLTcuOTc1LjY2Ni0xMC42MS0yLjQ5NS0xLjgzMi01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjE5LTEuNzA1LTEuMTg2LS43MDItLjk0Ny0uNTkyLTIuNDI3LjI0Mi0zLjI1NCAxLjAxNS0xLjAwNiAzLjQ5Mi0xLjQwOCA1LjI4Mi0uMjUyIDEuMDYuNjg1IDEuODAxIDEuOTE0IDEuNzk4IDMuMTk4bDUuMTMuMDAzYy0uMDg1LTIuMjU4LTEuMjA4LTQuNDUyLTIuOTczLTUuODA1QzUyLjA0LjIgNDkuMTgyLS4xMzMgNDYuNTA4LjA4MiA0NC44Ni4yMTUgNDMuMTkuNTQ3IDQxLjc2MiAxLjRjLTEuNzc4IDEuMDYyLTIuODE1IDIuOTgtMy4wMSA0Ljk3LS42MjUtMS4xODgtMS40NzMtMi4yOC0yLjUzMy0zLjI2QzMzLjg5OC45ODcgMzEuMzM0LjAxNSAyOC41MSAwaC0uMDY2Yy0yLjgyMi4wMTYtNS4zODYuOTg4LTcuNzA3IDMuMTEtMS4xNDYgMS4wNi0yLjA0NCAyLjI0OS0yLjY4MSAzLjU1LS4zMjctMS44OTMtMS4zNjUtMy42NTYtMi44NjgtNC44MDhDMTMuMDQuMjA1IDEwLjE4MS0uMTI4IDcuNTA2LjA4NyA1Ljg1OC4yMiA0LjE5LjU1IDIuNzYgMS40MDUgMS41NTIgMi4xMjcuNjg2IDMuMjQ0LjE5NCA0LjUxIi8+PC9zeW1ib2w+PHVzZSBocmVmPSIjYSIgd2lkdGg9IjIzIi8+PHVzZSBocmVmPSIjYiIgeD0iMjIuOCIgd2lkdGg9IjU3Ii8+PC9zdmc+"
              alt="logo"
            />
          </a>
          <div className={Styles.mid_btn}>
            <a href="http://localhost:3000/women">
              <button
                className={`${Styles.mid_btnwomen} ${
                  isWomenPage ? Styles.mid_btnwomen_active : ""
                }`}
              >
                WOMEN
              </button>
            </a>
            <a href="http://localhost:3000/men">
              <button
                className={`${Styles.mid_btnwomen} ${
                  isMenPage ? Styles.mid_btnwomen_active : ""
                }`}
              >
                MEN
              </button>
            </a>
          </div>
          <div className={Styles.mid_search}>
            <div className={Styles.mid_bginput}>
              <InputSearchCommon
                label=""
                isInputPassword={false}
                placeholder="Search for itmes and brands"
                className={Styles.mid_input}
              />
            </div>
          </div>
          <div className={Styles.mid_right_group}>
            <div className={Styles.widgets_wrapper}>
              <a
                className={Styles.widgets}
                onMouseEnter={handleHover}
                onMouseLeave={handleCloseTable}
                // onMouseDownCapture={handleLeave}
                // onClick={handleIconClick}
              >
                <BsPerson className={Styles.widgets_icon} />
              </a>
              {showTable && (
                <div
                  className={`animate__animated animate__fadeIn ${Styles.account_table}`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleCloseTable}
                >
                  <div className={Styles.table_container}>
                    <div className={Styles.table_top}>
                      <Link to={ROUTES.REGISTER}>
                        <div className={Styles.titleJ}>Join</div>
                      </Link>
                      <Link to={ROUTES.LOGIN}>
                        <div className={Styles.titleS}>Sign in</div>
                      </Link>
                    </div>
                    <div className={Styles.table_bot}>
                      <ul style={{ padding: "0px", margin: "10px" }}>
                        <li className={Styles.wrap}>
                          <div className={Styles.wrap_icon}>
                            <BsPerson className={Styles.icon} />
                          </div>
                          <Link to={ROUTES.REGISTER}>
                            <div className={Styles.wrap_text}>
                              <span className={Styles.text}>My Account</span>
                            </div>
                          </Link>
                        </li>
                        <li className={Styles.wrap}>
                          <div className={Styles.wrap_icon}>
                            <BsBox2 className={Styles.icon} />
                          </div>
                          <Link to={ROUTES.REGISTER}>
                            <div className={Styles.wrap_text}>
                              <span className={Styles.text}>My Orders</span>
                            </div>
                          </Link>
                        </li>
                        <li className={Styles.wrap}>
                          <div className={Styles.wrap_icon}>
                            <BsQuestionCircle className={Styles.icon} />
                          </div>
                          <Link to={ROUTES.REGISTER}>
                            <div className={Styles.wrap_text}>
                              <span className={Styles.text}>
                                Returns Information
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li className={Styles.wrap}>
                          <div className={Styles.wrap_icon}>
                            <TbMessageDots className={Styles.icon} />
                          </div>
                          <Link to={ROUTES.REGISTER}>
                            <div className={Styles.wrap_text}>
                              <span className={Styles.text}>
                                Contact Preferences
                              </span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a className={Styles.widgets} href="http://localhost:3000/saved">
              <AiOutlineHeart className={Styles.widgets_icon} />
            </a>
            <a className={Styles.widgets}  href="http://localhost:3000/bag">
              <RiShoppingBagLine className={Styles.widgets_icon} />
            </a>
          </div>
        </div>
      </div>
      <nav className={Styles.bot_bar}>
        <div className={Styles.bot_nav}>
          {buttons.map((item) => (
            <Row key={`button_${item._id}`}>
              <Col key={item._id}>
                <BarButtonCommon {...item} />
              </Col>
            </Row>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TaskBar;
