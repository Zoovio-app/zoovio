import React, { useState } from "react";
import { demoLogin, userLogin } from "../../util/loginFunctions.js";
import { useDispatch } from "react-redux";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
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
      <p>Don't have an account? get started!</p>{" "}
    </div>
  );
};

export default LandingPage;
