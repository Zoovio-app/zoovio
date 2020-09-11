import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealtimeUsers, updateMessage } from "../../util/messagingFunctions";
import { AuthContext } from "../../providers/AuthContext";
import { pageTransition, pageVariants } from "../../util/framerStyles";
import { motion } from "framer-motion";
import "./css/userMessages.css";
import Toastt from "../toast/Toast";
import { Button } from "react-bootstrap";
import UserThreadCard from "../userThreadCard/UserThreadCard";
import SuggestedTexts from "./suggestedTexts/SuggestedTexts";
import Chats from "./chats/Chats";
import {
  messagingInfoState,
  clearChat,
} from "../messagingInfoSlice/messagingInfoSlice";
import SearchPrompt from "./searchPrompt/SearchPrompt";

const UserMessages = () => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const [chatUser, setChatUser] = useState("");
  const [display, setDisplay] = useState("none");
  const [message, setMessage] = useState("");
  const [reciever, setReciever] = useState(null);
  const [promptDisplay, setPromtDisplay] = useState("");
  const { users } = useSelector(messagingInfoState);
  const { uid2 } = useSelector(messagingInfoState);
  useEffect(() => {
    dispatch(getRealtimeUsers(currentUser.id, uid2));
    return () => {
      dispatch(clearChat());
    };
  }, [currentUser.id, dispatch, uid2]);

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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <div className="useMessagesMain">
        <div>
          <h1>ZooVio</h1>
        </div>
        <div className="toastDiv">
          <Toastt />
        </div>
        {users.length > 0 ? (
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
                  <div className="userChatViewMain">
                    <div className="userChatView">
                      <div
                        style={{ display: promptDisplay }}
                        className="chatPrompt"
                      >
                        <p>
                          "You have not initiated a chat please select a thread
                          to the left"{" "}
                        </p>
                      </div>
                      <Chats />
                    </div>
                  </div>

                  <SuggestedTexts display={display} setMessage={setMessage} />
                </div>
                <div style={{ display: display }} className="userChatFeatures">
                  <div className="usersChatText">
                    <div className="textAreaHolder">
                      <form onSubmit={submitMessage}>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </form>
                    </div>
                  </div>
                  <div className="usersChatSendButton">
                    <Button onClick={submitMessage}>Send</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <SearchPrompt />{" "}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default UserMessages;
