import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealtimeUsers } from "../../util/messagingFunctions";
import { AuthContext } from "../../providers/AuthContext";
import { pageTransition, pageVariants } from "../../util/framerStyles";
import { motion } from "framer-motion";
import "./css/userMessages.css";
import Toastt from "../toast/Toast";
import {
  messagingInfoState,
  clearChat,
} from "../messagingInfoSlice/messagingInfoSlice";
import SearchPrompt from "./searchPrompt/SearchPrompt";
import UserVideoChat from "../userVideoChat/UserVideoChat";
import UserChatBox from "./userChatBox/UserChatBox";

const UserMessages = () => {
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const { users } = useSelector(messagingInfoState);
  const { uid2 } = useSelector(messagingInfoState);
  const [videoDisplay, setVideoDisplay] = useState("");
  const [chatBoxDisplay, setChatBoxDisplay] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    dispatch(getRealtimeUsers(currentUser.id, uid2));
    return () => {
      dispatch(clearChat());
    };
  }, [currentUser.id, dispatch, uid2]);

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
        <div style={{ display: toast }} className="toastDiv">
          <Toastt />
        </div>
        <UserVideoChat
          setChatBoxDisplay={setChatBoxDisplay}
          videoDisplay={videoDisplay}
          setVideoDisplay={setVideoDisplay}
          setToast={setToast}
        />
        {users.length > 0 ? (
          <UserChatBox chatBoxDisplay={chatBoxDisplay} />
        ) : (
          <SearchPrompt />
        )}
      </div>
    </motion.div>
  );
};

export default UserMessages;
