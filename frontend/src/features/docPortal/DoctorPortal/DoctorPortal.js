import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import inquirezoovio from "../../../assets/img/inquirezoovio.png";
import zooviocovoid from "../../../assets/img/zooviocovoid.png";
import zooviosimplicity from "../../../assets/img/zooviosimplicity.png";
import zooviodoctors from "../../../assets/img/zooviodoctors.png";
import logo from "../../../assets/img/logo.png";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../../util/framerStyles";

import "../DoctorPortal/docPortal.css";

const DoctorPortal = () => {
  const history = useHistory();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      // variants={pageVariants}
      // transition={pageTransition}
      // className="calDiv"
    >
      <div className="mainContainer4DocPortal">
        <div className="topDocDiv">
          <div className="logoDiv">
            <img alt="" src={logo} />
          </div>

          <div className="homeBlob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#225095"
                d="M32.9,-67.6C37.5,-54.3,32.5,-35.1,41.8,-22.8C51.2,-10.6,74.8,-5.3,82.3,4.3C89.8,13.9,81.1,27.9,68.4,34.3C55.7,40.7,38.9,39.5,26.8,48.2C14.8,56.9,7.4,75.4,0.1,75.1C-7.1,74.9,-14.2,55.9,-20.6,44C-27.1,32,-32.8,27.1,-41.2,21C-49.7,14.8,-60.9,7.4,-66.6,-3.3C-72.4,-14.1,-72.8,-28.2,-64.2,-34C-55.6,-39.9,-38,-37.6,-25.8,-46.5C-13.6,-55.3,-6.8,-75.4,3.7,-81.7C14.2,-88.1,28.3,-80.8,32.9,-67.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "60vh",
            alignItems: "center",
          }}
        >
          <Carousel style={{ width: "70vw" }}>
            <Carousel.Item>
              <img
                style={{ borderRadius: "1vh" }}
                src={zooviodoctors}
                alt="First slide"
              />
              ​
              <Carousel.Caption>
                <div></div>
              </Carousel.Caption>
            </Carousel.Item>
            ​ ​ ​
            <Carousel.Item>
              <img
                style={{ borderRadius: "1vh" }}
                src={zooviosimplicity}
                alt=""
              />
              <Carousel.Caption>
                <div></div>
              </Carousel.Caption>
            </Carousel.Item>
            ​ ​ ​ ​ ​
            <Carousel.Item>
              <img style={{ borderRadius: "1vh" }} src={zooviocovoid} alt="" />
              <Carousel.Caption>
                <div></div>
              </Carousel.Caption>
            </Carousel.Item>
            ​ ​
            <Carousel.Item>
              <img
                style={{ borderRadius: "1vh" }}
                src={inquirezoovio}
                alt=" "
              />
              ​
              <Carousel.Caption>
                <div>
                  <h3
                    style={{
                      color: "#141827",
                      fontWeight: "700",
                      marginBottom: "1.25rem",
                      marginTop: "1.25rem",
                    }}
                  >
                    {" "}
                    Let's Go
                  </h3>
                  <p
                    style={{
                      color: "#225095",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Reach out to Zoovio to get started.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="bottomCont2">
            <div className="splashButtonsCont2">
              <div className="buttsHolder">
                <div className="splashSignUpCont">
                  <Button
                    className="docInquireButton"
                    onClick={() => history.push("/doctor/inquire")}
                  >
                    {" "}
                    Inquire Here{" "}
                  </Button>
                </div>
                <p style={{ padding: "1px" }}>Already a user?</p>{" "}
                <Link className="zoovioInquiryLink" to="/doctor/login">
                  Login
                </Link>
              </div>
              ​
              <div className="footerDiv2">
                <Link to="/about">About</Link>
                <Link to="/">Pet Owners</Link>
                <Link to="/other">Other</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bottomDivvv">
          <div className="bottomDocHomeBlob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#225095"
                d="M28.4,-50.5C41.1,-41.9,58.7,-42.9,58.6,-36.2C58.6,-29.4,40.9,-14.7,33,-4.6C25.1,5.6,27,11.1,27.5,18.6C28,26.1,27,35.6,22.1,37.6C17.3,39.7,8.7,34.3,2.6,29.9C-3.5,25.4,-7,21.9,-11.9,19.8C-16.8,17.8,-23,17.4,-36.8,14.3C-50.7,11.3,-72,5.6,-80.2,-4.7C-88.4,-15.1,-83.3,-30.1,-69.6,-33.3C-55.8,-36.4,-33.3,-27.6,-20.3,-36C-7.2,-44.4,-3.6,-70,2.1,-73.7C7.8,-77.4,15.7,-59.1,28.4,-50.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorPortal;

{
  /* <div className="navBar4DocPortal">
        <ul className="docPortalNavUl">
          <li className="docPortalNavLiLeft">
            <a className="syleA" href="/doctor/portal">
              ZooVio
            </a>
          </li>
          <li className="docPortalNavLiRight">
            <a className="syleA" href="/doctor/inquire">
              Inquiries
            </a>
          </li>
          <li className="docPortalNavLiRight">
            <a className="syleA" href="/doctor/login">
              Login
            </a>
          </li>
          <li className="docPortalNavLiRight">
            <a className="syleA" href="/about">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="docPortalBox">
        <div className="carousel4DocPortal">
          <Slider className="sliderDesign" slides={images} />
        </div>

        <div className="inquiryForm4DocPortal">
          <h1 className="zoovioHeading">
            {" "}
            <NavLink className="zoovioInquiryLink" path to="/doctor/inquire">
              {" "}
              Inquire Here{" "}
            </NavLink>
          </h1>
          <h3 className="zoovioInfo">
            {" "}
            Reach out to our team for advanced pricing and packaging
          </h3>
        </div>
      </div> */
}
