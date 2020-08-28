import React from "react";
import { NavLink } from "react-router-dom";
import "./css/nav.css";
import pet from "../../images/paw.png";
import home from "../../images/browser.png";
import calendar from "../../images/appointment.png";
import vet from "../../images/vet.png";
// import search from "../search/Search"

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div
          style={{ borderBottomLeftRadius: "20px" }}
          className="navLinksCont"
        >
          <NavLink activeClassName={"linkF"} className="link" to="/home">
            <div className="navImgCont">
              <img alt="" src={home} />
            </div>
          </NavLink>
        </div>
        
        <div className="navLinksCont">
          <NavLink activeClassName={"linkF"} className="link" to="/pets">
            <div className="navImgCont">
              <img alt="" src={pet} />
            </div>
          </NavLink>
        </div>

        <div className="navLinksCont">
          <NavLink activeClassName={"linkF"} className="link" to="/calendar">
            <div className="navImgCont">
              <img alt="" src={calendar} />
            </div>
          </NavLink>
        </div>

        <NavLink activeClassName={"linkF"} className="link" to="/search">
        <div className="navImgCont">
          <img alt="" src={vet} />
        </div>
      </NavLink>

        <div
          style={{ borderBottomRightRadius: "20px" }}
          className="navLinksCont"
        >
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
