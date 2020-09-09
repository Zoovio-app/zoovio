import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { messagingInfoState } from "../../messagingInfoSlice/messagingInfoSlice";
import { AuthContext } from "../../../providers/AuthContext";

const Chats = () => {
  const { chats } = useSelector(messagingInfoState);
  const { currentUser } = useContext(AuthContext);

  const chatMap = chats.map((chat, i) => {
    return (
      <div
        key={i}
        className={currentUser.id === chat.senderId ? "rightText" : "leftText"}
      >
        <p>{chat.message}</p>
      </div>
    );
  });

  return (
    <div className="chatMain">
      {chatMap}
      <div className="anchor"></div>
    </div>
  );
};

export default Chats;
