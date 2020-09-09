import React from "react";
import { useSelector } from "react-redux";
import { messagingInfoState } from "../messagingInfoSlice/messagingInfoSlice";
import "./css/userThread.css";

const UserThreadCard = () => {
  const { users } = useSelector(messagingInfoState);
  const createUsersCard = users.map((user) => {
    return (
      <div className="userCardd" value={user.uid} key={user.uid}>
        <div className="userCardP">
          <p>
            Dr. {user.firstName} {user.lastName}
          </p>
        </div>
        <div
          className={
            user.isOnline ? "onLineIndicator greenn" : "onLineIndicator redd"
          }
        ></div>
      </div>
    );
  });

  return <div className="userCardHolder">{createUsersCard}</div>;
};

export default UserThreadCard;
