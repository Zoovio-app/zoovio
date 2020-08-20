import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{ display: "flex", flexDirection: " column" }}>
      <NavLink to="/home">HOME</NavLink>

      <NavLink to="/calendar">CALENDAR</NavLink>

      <NavLink to="/messaging"> MESSAGES</NavLink>

      <NavLink to="/doctor/home">Doctor Home</NavLink>

      {/* <NavLink to="/calendar">CALENDAR</NavLink> */}

      {/* <NavLink to="/messaging"> MESSAGES</NavLink> */}
    </div>
  );
};

export default Nav;
