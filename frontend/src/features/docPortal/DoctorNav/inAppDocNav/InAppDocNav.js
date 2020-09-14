import React from "react";
import "../doctorNav.css";
import logo from "../../../../assets/img/logo.png";

const InAppDocNav = () => {
  return (
    <div>
      <nav name="navbarUno">
        <div name="user-navBar">
          <ul>
            <li className="style-navigation">
              <a className="hoverable" href="/doctor/messaging">
                {" "}
                Messages{" "}
              </a>
            </li>
            <li className="style-navigation">
              <div className="hoverable">
                <a href="/doctor/home">
                  <img style={{ height: "10vh" }} alt="" src={logo} />
                </a>
              </div>
            </li>

            <li className="style-navigation">
              <a className="hoverable" href="/doctor/virtual-appointment">
                {" "}
                Virtual Appointments{" "}
              </a>
            </li>

            {/* <li> <Link to={'/'} onClick={() => {dispatch(cloudLogout(auth.uid))}}>Logout</Link> </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default InAppDocNav;
