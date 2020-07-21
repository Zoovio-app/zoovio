import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../home/Home";
import Calender from "../calendar/Calendar";

const Nav = () => {
  return (
    <div style={{ display: "flex", flexDirection: " column" }}>
      <NavLink to="/home">HOME</NavLink>

      <NavLink to="/calendar">CALENDAR</NavLink>
    </div>
  );
};

export default Nav;
