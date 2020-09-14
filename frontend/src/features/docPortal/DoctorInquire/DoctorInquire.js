import React, { useState } from "react";
import "./docInquire.css";
import { NavLink, Link } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import docInquire from "../../../assets/img/docInquire.png";
import logo from "../../../assets/img/logo.png";

const DoctorInquire = (props) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="doctorRegistrationContainer2">
      <div className="zoovioMain4img3">
        <img alt="" src={logo} />
      </div>
      <div className="docSignupFormMain2">
        <form className="docSignupForm">
          ​
          <div className="formContainer2">
            <div className="loginImgCont2">
              <img
                src={docInquire}
                className="ls-is-cached lazyloaded"
                alt=""
              />
            </div>
            <form>
              <FormGroup
                style={{ height: "25vh" }}
                className="primaryForm"
                // onSubmit={userLogin}
              >
                <FormControl
                  className="inquire_input"
                  placeholder="Full Name"
                  // onChange={(e) => setCompany(e.target.value)}
                  // value={company}
                  autoComplete="on"
                />
                ​
                <FormControl
                  placeholder="Business Name"
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  // value={phoneNumber}
                  autoComplete="on"
                />
                ​
                <FormControl
                  // className="inquire_input"

                  placeholder="Email"
                  // onChange={(e) => setEmail(e.target.value)}
                  // value={email}
                  autoComplete="on"
                />
                ​
                <FormControl
                  placeholder="Hi, I'd love to know more about ZooVio"
                  // onChange={(e) => setEmail(e.target.value)}
                  // value={email}
                  autoComplete="on"
                />
                <Button
                  style={{ borderRadius: "1vh" }}
                  className="docLoginBtn"
                  controlid="primary"
                  type="submit"
                >
                  Inquire
                </Button>
              </FormGroup>
            </form>
            <nav className="midNav2">
              Already have an account?{" "}
              <NavLink className="login" exact to={"/doctor/login"}>
                Login!
              </NavLink>
            </nav>
          </div>
        </form>
        <div>
          <div>
            <p>Already a user?</p>
          </div>
          <div>
            <a href="/doctor/login">Login</a>
          </div>
        </div>
      </div>

      <div className="bottomCont3">
        <div className="splashButtonsCont2">
          <div className="footerDiv2">
            <Link to="/about">About</Link>
            <Link to="/">Pet Owners</Link>
            <Link to="/other">Other</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInquire;
