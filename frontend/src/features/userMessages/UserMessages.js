import React, { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
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

const UserMessages = () => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  //   const [chatUser, setChatUser] = useState("");
  const [message, setMessage] = useState("");
  const [reciever, setReciever] = useState(null);

  useEffect(() => {
    dispatch(getRealtimeUsers(currentUser.id));
  }, [currentUser.id, dispatch]);

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
        <div className="usersChatBoxCont">
          <div className="usersChatBox">
            <div className="usersOpenConvos">
              <UserThreadCard setReciever={setReciever} />
            </div>
            <div className="usersChatArea">
              <div className="userChatDisplay">
                <div className="userChatViewMain">
                  <div className="userChatView">
                    <Chats />
                  </div>
                </div>

                <SuggestedTexts setMessage={setMessage} />
              </div>
              <div className="userChatFeatures">
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
      </div>
    </motion.div>
  );
};

export default UserMessages;
