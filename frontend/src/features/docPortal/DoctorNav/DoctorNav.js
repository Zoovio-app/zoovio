import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { cloudLogout } from '../../../util/logoutFunctions';
import "../DoctorNav/doctorNav.css";

const DoctorNav = () => {
  return (
    <div>
      <nav className="navbarUno">
        <div className="non-user-nav">
          {/* <ul className='pintrestLogoLetters'>P</ul> */}
          {/* <div className="logo-pin">  */}
          <NavLink className="mainPortal" to={"/"}>
            {" "}
            LOGO{" "}
          </NavLink>
          <NavLink className="mainPortal" to={"/about"}>
            {" "}
            About Zoovio{" "}
          </NavLink>
          <NavLink className="mainPortal" to={"/contact"}>
            {" "}
            Contact{" "}
          </NavLink>
          <NavLink className="mainPortal" id="login" to={"/doctor/login"}>
            {" "}
            Log in
          </NavLink>
          <NavLink className="mainPortal" id="signup" to={"/doctor/signup"}>
            {" "}
            Sign up
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default DoctorNav;
