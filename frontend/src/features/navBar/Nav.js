import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{ display: "flex", flexDirection: " column" }}>
      <NavLink to="/home">HOME</NavLink>

      <NavLink to="/calendar">CALENDAR</NavLink>
    </div>
  );
};

export default Nav;
