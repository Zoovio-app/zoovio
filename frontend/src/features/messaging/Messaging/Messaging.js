import React, { useEffect, useState, useContext } from "react";
import "./messaging.css";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  getRealtimeUsers,
  updateMessage,
  getRealtimeConversations,
} from "../../../util/messagingFunctions";
import DoctorNav from "../../docPortal/DoctorNav/DoctorNav";
// import { authInfoState } from "../../authInfoSlice/authInfoSlice";
import { messagingInfoState } from "../../messagingInfoSlice/messagingInfoSlice";
import { AuthContext } from "../../../providers/AuthContext";

const User = (props) => {
  const { user, onClick } = props;

  return (
    <div onClick={() => onClick(user)} className="displayName">
      <div className="displayPic">
        {/* <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt=""/> */}
      </div>
      <div
        className="userbox-style"
        style={{ justifyContent: "space-between" }}
      >
        <span className="username-style">
          {user.firstName} {user.lastName}
        </span>
        <span
          className={user.isOnline ? `onlineStatus` : `onlineStatus off`}
        ></span>
      </div>
    </div>
  );
};

const HomePage = (props) => {
  const dispatch = useDispatch();
  // const auth = useSelector(authInfoState);
  const user = useSelector(messagingInfoState);
  const { currentUser } = useContext(AuthContext);

  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState("");
  const [message, setMessage] = useState("");
  const [userUid, setUserUid] = useState(null);
  let unsubscribe;

  useEffect(() => {
    dispatch(getRealtimeUsers(currentUser.id));
  }, [currentUser, dispatch, unsubscribe]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //cleanup
      unsubscribe.then((f) => f()).catch((error) => console.log(error));
    };
  }, [unsubscribe]);

  const initChat = (user) => {
    setChatStarted(true);
    setChatUser(`${user.firstName} ${user.lastName}`);
    setUserUid(user.uid);
    console.log(user);
    dispatch(
      getRealtimeConversations({ uid_1: currentUser.id, uid_2: user.uid })
    );
  };

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
    <div>
      <div>
        <DoctorNav />
      </div>

      <Layout>
        <section className="container">
          <div className="listOfUsers">
            {user.users.length > 0
              ? user.users.map((user) => {
                  // eslint-disable-next-line
                  {
                    /* console.log(user.length) */
                  }
                  return <User onClick={initChat} key={user.uid} user={user} />;
                })
              : null}
          </div>

          <div className="chatArea">
            <div className="chatHeader">{chatStarted ? chatUser : ""}</div>
            <div className="messageBox">
              {chatStarted
                ? user.chats.map((chat) => (
                    <div
                      className="indi-messages"
                      style={{
                        textAlign:
                          chat.user_uid_1 === currentUser.id ? "right" : "left",
                      }}
                    >
                      <p className="messageStyle">{chat.message}</p>
                    </div>
                  ))
                : null}
            </div>
            {chatStarted ? (
              <div className="chatControls">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Message"
                />
                <button onClick={submitMessage}>Send</button>
              </div>
            ) : null}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default HomePage;
