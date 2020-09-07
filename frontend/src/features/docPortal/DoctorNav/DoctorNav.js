import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { cloudLogout } from '../../../util/logoutFunctions';
import "../DoctorNav/doctorNav.css";
import { authInfoState } from "../../authInfoSlice/authInfoSlice";

const DoctorNav = () => {
  const auth = useSelector(authInfoState);

  const displayNavForDoctor = () => {
    if (auth.authenticated) {
      return (
        <div className="user-navBar">
          <ul>
            <li className="style-navigation">
              <a class="hoverable" href="/doctor/home">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="style-navigation">
              <a class="hoverable" href="/doctor/messaging">
                {" "}
                Messages{" "}
              </a>
            </li>
            <li className="style-navigation">
              <a class="hoverable" href="/doctor/appointments">
                {" "}
                Upcoming Appointments
              </a>
            </li>
            <li className="style-navigation">
              <a class="hoverable" href="/doctor/virtual-appointment">
                {" "}
                Virtual Appointments{" "}
              </a>
            </li>
            <li className="style-navigation">
              <a class="hoverable" href="/doctor/pet-charts">
                {" "}
                Pet Charts{" "}
              </a>
            </li>
            {/* <li> <Link to={'/'} onClick={() => {dispatch(cloudLogout(auth.uid))}}>Logout</Link> </li> */}
          </ul>
        </div>
      );
    } else {
      return (
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
      );
    }
  };
  return (
    <div>
      <nav className="navbarUno">
        {/* <NavLink to={"/"}> Login in</NavLink>   */}
        {displayNavForDoctor()}
      </nav>
    </div>
  );
};

export default DoctorNav;
