import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { REACT_APP_APIKEY } = process.env;

  return (
    <div className="login-info">
      <button>Demo Login</button>
      <h1>ZooVio</h1>
      <form id="loginForm">
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
