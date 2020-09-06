import React, { useState, useEffect } from "react";
import Layout from "../../messaging/layout/Layout";
import { cloudSignin } from "../../../util/loginFunctions";
import { useDispatch, useSelector } from "react-redux";
import { authInfoState } from "../../authInfoSlice/authInfoSlice";
import "./css/docLogin.css";

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
    <Layout>
      <div className="loginContainer">
        {/* <Card> */}
        <form onSubmit={userLogin}>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DoctorLogin;
