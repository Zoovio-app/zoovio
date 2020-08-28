import React from "react";
import { logOut } from "../../util/firebaseFunctions";
import proPic from "../../images/accounts2.png";

const UserMenue = () => {
  const signOut = () => {
    logOut();
    // dispatch(clearUserInfo());
  };

  return (
    <div className="outButtDiv">
      <img alt="" src={proPic} />
      <div onClick={signOut} className="outButtDiv-content">
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default UserMenue;
