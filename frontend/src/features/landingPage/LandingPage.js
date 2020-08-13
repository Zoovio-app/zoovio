import React, { useState } from "react";
import { demoLogin, userLogin } from "../../util/loginFunctions.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from './carousel/Slider';
import images from './images'

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (

  <div className="mainContainer"> 

    <div className="login-info">
      <button onClick={demoLogin}>Demo Login</button>
      <h1>ZooVio</h1>
      <form
        onSubmit={(e) => dispatch(userLogin(e, email, password))}
        className="loginForm"
      >
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        ></input>
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        ></input>
        <button type="submit">submit</button>
      </form>
      <Link to="/doctor/login"> Vetenarian Login? </Link>
      <Link to="/doctor/signup"> Vetenarian Signup? </Link>
      <Link to="/signup">Don't have an account? get started!</Link>
  </div>

  <Slider slides={images} />
    </div>
  );
};

export default LandingPage;
