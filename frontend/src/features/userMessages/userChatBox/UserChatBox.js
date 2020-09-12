import React, { useState, useContext } from "react";
import UserChatView from "../userChatView/UserChatView";
import UserChatFeatures from "../userChatFeatures/UserChatFeatures";
import UserThreadCard from "../../userThreadCard/UserThreadCard";
import SuggestedTexts from "../suggestedTexts/SuggestedTexts";
import { updateMessage } from "../../../util/messagingFunctions";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../providers/AuthContext";

const UserChatBox = () => {
  const [chatUser, setChatUser] = useState("");
  const [display, setDisplay] = useState("none");
  const [promptDisplay, setPromtDisplay] = useState("");
  const [message, setMessage] = useState("");
  const [reciever, setReciever] = useState(null);
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);

  const submitMessage = (e) => {
    const msgObj = {
      senderId: currentUser.id,
      recieverId: reciever,
      message,
    };
    if (message !== "") {
      dispatch(updateMessage(msgObj)).then(() => {
        setMessage("");
      });
    }
    // console.log(msgObj);
  };

  return (
    <div className="usersChatBoxCont">
      <div className="usersChatBox">
        <div className="usersOpenConvos">
          <UserThreadCard
            setPromtDisplay={setPromtDisplay}
            setChatUser={setChatUser}
            setDisplay={setDisplay}
            setReciever={setReciever}
          />
        </div>
        <div className="usersChatArea">
          <div className="userChatDisplay">
            <div className="currentChatte">
              <p>{chatUser}</p>
            </div>
            <UserChatView promptDisplay={promptDisplay} />
            <SuggestedTexts display={display} setMessage={setMessage} />
          </div>
          <UserChatFeatures
            setMessage={setMessage}
            message={message}
            submitMessage={submitMessage}
            display={display}
          />
        </div>
      </div>
    </div>
  );
};

export default UserChatBox;
