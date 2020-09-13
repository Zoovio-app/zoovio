import React from "react";
import "../doctorNav.css";

const InAppDocNav = () => {
  return (
    <div>
      <nav name="navbarUno">
        <div name="user-navBar">
          <ul>
            <li className="style-navigation">
              <a className="hoverable" href="/doctor/home">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="style-navigation">
              <a className="hoverable" href="/doctor/messaging">
                {" "}
                Messages{" "}
              </a>
            </li>
            <li className="style-navigation">
              <a className="hoverable" href="/doctor/appointments">
                {" "}
                Upcoming Appointments
              </a>
            </li>
            <li className="style-navigation">
              <a className="hoverable" href="/doctor/virtual-appointment">
                {" "}
                Virtual Appointments{" "}
              </a>
            </li>
            <li className="style-navigation">
              <a className="hoverable" href="/doctor/pet-charts">
                {" "}
                Pet Charts{" "}
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
