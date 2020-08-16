import React from "react";
import { NavLink } from "react-router-dom";
import SignUpForm from "./form/SignUpForm";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="topDiv">
        <SignUpForm />
      </div>
      <div className="bottomDiv">
        {/* <nav className="midNav">
          Have an account?
          <NavLink className="login" exact to={"/login"}>
            {" "}
            Log in
          </NavLink>
        </nav> */}
      </div>
    </div>
  );
};

export default SignUp;
