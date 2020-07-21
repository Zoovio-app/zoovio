import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../home/Home";
import Calender from "../calender/Calender";

const Nav = () => {
  return (
    <div>
      <NavLink to="/home">
        <Home />
      </NavLink>

      <NavLink to="/calender">
        <Calender />
      </NavLink>
    </div>
  );
};

export default Nav;
