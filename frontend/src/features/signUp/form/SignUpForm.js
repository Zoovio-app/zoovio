import React, { useState } from "react";
import { signUp } from "../../../util/firebaseFunctions";
import { apiUrl } from "../../../util/apiUrl";
import axios from "axios";

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
    <form className="signUpForm" onSubmit={handleSubmit}>
      <input
        className="signup_input"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="signup_input"
        type="text"
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <input
        className="signup_input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        autoComplete="on"
      />
      <input
        className="signup_input"
        type="text"
        placeholder="phone"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <button className="signUp_button" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
