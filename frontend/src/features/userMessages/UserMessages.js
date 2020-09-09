import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRealtimeUsers,
  updateMessage,
  getRealtimeConversations,
} from "../../util/messagingFunctions";
import { messagingInfoState } from "../messagingInfoSlice/messagingInfoSlice";
import { AuthContext } from "../../providers/AuthContext";
import { pageTransition, pageVariants } from "../../util/framerStyles";
import { motion } from "framer-motion";
import "./css/userMessages.css";
import Toastt from "../toast/Toast";
import { Button } from "react-bootstrap";
import UserThreadCard from "../userThreadCard/UserThreadCard";

const UserMessages = () => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const [chatUser, setChatUser] = useState("");
  const [message, setMessage] = useState("");
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    dispatch(getRealtimeUsers(currentUser.id));
  }, [currentUser.id]);

  const submitMessage = (e) => {
    const msgObj = {
      user_uid_1: currentUser.id,
      user_uid_2: userUid,
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
        <div></div>
        <div className="usersChatBoxCont">
          <div className="usersChatBox">
            <div className="usersOpenConvos">
              <UserThreadCard />
            </div>
            <div className="usersChatArea">
              <div className="userChatDisplay">
                <div className="userChatViewMain">
                  <div className="userChatView">
                    <div className="leftText">
                      <p>Hello how may i help you</p>
                    </div>
                    <div className="rightText">
                      <p>Hello i would like to set up an apppointment</p>
                    </div>
                  </div>
                </div>

                <div className="sugestedTextMain">
                  <div className="sugestedTextCont">
                    <div className="sugestedText">
                      <span>Schedual apppointment</span>
                    </div>
                    <div className="sugestedText">
                      <span>Hello world</span>
                    </div>
                    <div className="sugestedText">
                      <span>Hello world</span>
                    </div>
                    <div className="sugestedText">
                      <span>Hello world</span>
                    </div>

                    <div className="sugestedText">
                      <span>Hello world</span>
                    </div>
                  </div>
                </div>
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
