import React, { useState } from "react";
import { demoLogin } from "../../util/loginFunctions.js";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-info">
      <button onClick={demoLogin}>Demo Login</button>
      <h1>ZooVio</h1>
      <form className="loginForm">
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
