import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { cloudSignin } from "../../../util/loginFunctions";
import { useDispatch, useSelector } from "react-redux";
import { authInfoState } from "../../authInfoSlice/authInfoSlice";
import "./css/docLogin.css";
import logo from "../../../assets/img/logo.png";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import docInquire from "../../../assets/img/docInquire.png";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../../util/framerStyles";

const DoctorLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(authInfoState);

  useEffect(() => {
    if (!auth.authenticated) {
      // dispatch(isLoggedInUser())
    }
  }, [auth]);

  const userLogin = (e) => {
    e.preventDefault();
    dispatch(cloudSignin(e, { email, password }));
  };

  return (
    <motion.div initial="initial" animate="in" exit="out">
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
              <form onSubmit={userLogin}>
                <FormGroup
                  style={{ height: "25vh" }}
                  className="primaryForm"
                  // onSubmit={userLogin}
                >
                  ​
                  <FormControl
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                    autoComplete="on"
                  />
                  ​
                  <FormControl
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    autoComplete="on"
                  />
                  <Button
                    style={{ borderRadius: "1vh" }}
                    className="docLoginBtn"
                    controlid="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </FormGroup>
              </form>
              <nav className="midNav2">
                Already have an account?{" "}
                <NavLink className="login" exact to={"/doctor/inquire"}>
                  login
                </NavLink>
              </nav>
            </div>
          </form>
          <div>
            <div>
              <p>Don't have an account?</p>
            </div>
            <div>
              <a href="/doctor/inquire"> Inquire about ZooVio today</a>
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
    </motion.div>
  );
};

export default DoctorLogin;
