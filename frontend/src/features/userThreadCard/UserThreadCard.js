import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { messagingInfoState } from "../messagingInfoSlice/messagingInfoSlice";
import "./css/userThread.css";
import { getRealtimeConversations } from "../../util/messagingFunctions";
import { AuthContext } from "../../providers/AuthContext";

const UserThreadCard = ({ setReciever }) => {
  const { users } = useSelector(messagingInfoState);
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);

  const initChat = (e) => {
    // setChatStarted(true);
    // setChatUser(`${user.firstName} ${user.lastName}`);
    // setUserUid(user.uid);
    // console.log(user);
    setReciever(e.target.title);
    dispatch(
      getRealtimeConversations({ uid_1: currentUser.id, uid_2: e.target.title })
    );
  };

  const createUsersCard = users.map((user) => {
    return (
      <div
        onClick={initChat}
        className="userCardd"
        title={user.uid}
        key={user.uid}
      >
        <div title={user.uid} className="userCardP">
          <p title={user.uid}>
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
