import React, { useState } from "react";
import { signUp } from "../../../util/firebaseFunctions";
import { apiUrl } from "../../../util/apiUrl";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import hangout from "../../../images/hangout.png";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const API = apiUrl();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);

      await axios.post(`${API}/api/users`, {
        id: res.user.uid,
        name,
        email,
        phone,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="landingInfo">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f18e7c" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,69.3C640,96,800,160,960,186.7C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
      <h1>ZooVio</h1>
      <div className="formContainer">
        <div className="loginImgCont">
          <img src={hangout} className="ls-is-cached lazyloaded" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <FormGroup style={{ height: "25vh" }} className="primaryForm">
            <FormControl
              className="signup_input"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormControl
              className="signup_input"
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <FormControl
              className="signup_input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="on"
            />
            <FormControl
              className="signup_input"
              type="text"
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Button controlid="primary" type="submit">
              Sign Up
            </Button>
          </FormGroup>
        </form>
        <nav className="midNav">
          Have an account?{" "}
          <NavLink className="login" exact to={"/login"}>
            Log in
          </NavLink>
        </nav>
      </div>
      <div className="loginSvg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f18e7c"
            fillOpacity="1"
            d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,101.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SignUpForm;
