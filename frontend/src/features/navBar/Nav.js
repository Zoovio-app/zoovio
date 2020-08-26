import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{ display: "flex", flexDirection: " column" }}>
      <NavLink to="/home">HOME</NavLink>

      <NavLink to="/calendar">CALENDAR</NavLink>

      <NavLink to="/search">MEDICAL</NavLink>

      <NavLink to="/pets">PETS</NavLink>
    </div>
  );
};

export default Nav;
