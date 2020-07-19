import React from 'react';
import { NavLink } from 'react-router-dom'

// import onlineIcon from '../../icons/onlineIcon.png';
// import closeIcon from '../../icons/closeIcon.png';

// import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
    <NavLink className="user-nav" to={"/online"}>Online</NavLink>
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
    <NavLink className="user-nav" to={"/join"}>Exit</NavLink>
      {/* <a href="/"> <img src={closeIcon} alt="close icon" /></a> */}
    </div>
  </div>
);

export default InfoBar;