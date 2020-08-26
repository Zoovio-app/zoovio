import React, { useState } from "react";
import { signUp } from "../../../util/firebaseFunctions";
import { apiUrl } from "../../../util/apiUrl";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button, FormGroup, FormControl } from 'react-bootstrap';

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
      <div className="vectorImg">
        <img class=" ls-is-cached lazyloaded" src="https://storytale.io/wp-content/uploads/2020/04/vesta-17-relationships.png" data-src="https://storytale.io/wp-content/uploads/2020/04/vesta-17-relationships.png" alt=""></img>
      </div>
        <form>
          <FormGroup style={{height: "25vh"}} className="primaryForm" onSubmit={handleSubmit}>
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
            <Button controlId="primary" type="submit">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f18e7c" fill-opacity="1" d="M0,0L48,32C96,64,192,128,288,133.3C384,139,480,85,576,58.7C672,32,768,32,864,42.7C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
};

export default SignUpForm;
