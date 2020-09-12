import React from "react";
import Chats from "../chats/Chats";

const UserChatView = ({ promptDisplay }) => {
  return (
    <div className="userChatViewMain">
      <div className="userChatView">
        <div style={{ display: promptDisplay }} className="chatPrompt">
          <p>
            "You have not initiated a chat please select a thread from the list
            to the left"
          </p>
        </div>
        <Chats />
      </div>
    </div>
  );
};

export default UserChatView;
