import React, { useEffect, useState } from 'react';
import './docMessaging.css'
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getRealtimeUsers, updateMessage, getRealtimeConversations } from '../../actions';
// import {
//     updateUserInfo,
//     userInfoState,
//     clearUserInfo,
// } from '../../../userInfo/userInfoSlice';
import { Link } from 'react-router-dom';
import DoctorNav from '../DoctorNav/DoctorNav'


const User = (props) => {
  const {user, onClick} = props;
  return (
    <div onClick={() => onClick(user)} className="displayName">
                  <div className="displayPic">
                      {/* <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt=""/> */}
                  </div>
                  <div className="userbox-style" style={{ justifyContent: 'space-between'}}>
                      <span className="username-style">{user.firstName} {user.lastName}</span>
                      <span className={user.isOnline ? `onlineStatus` : `onlineStatus off`}></span>
                  </div>
              </div>
  );
}

const HomePage = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null);
  let unsubscribe;
  useEffect(() => {
    unsubscribe = dispatch(getRealtimeUsers(auth.uid))
    .then(unsubscribe => {
      return unsubscribe;
    })
    .catch(error => {
      console.log(error);
    })
    // console.log(user);
  }, []);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //cleanup
      unsubscribe.then(f => f()).catch(error => console.log(error));
    }
  }, []);


  const initChat = (user) => {
    setChatStarted(true)
    setChatUser(`${user.firstName} ${user.lastName}`)
    setUserUid(user.uid);
    console.log(user);
    dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));
  }

  const submitMessage = (e) => {
    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUid,
      message
    }
    
    if(message !== ""){
      dispatch(updateMessage(msgObj))
      .then(() => {
        setMessage('')
      });
    }
    console.log(msgObj);
  }


  return (
      <div> 
        <div> 
          <DoctorNav/>
        </div>


    <Layout>
      <section className="container">
        <div className="listOfUsers">
          {
            user.users.length > 0 ?
            user.users.map(user => {
            {/* console.log(user.length) */}
              return (
                <User 
                  onClick={initChat}
                  key={user.uid} 
                  user={user} 
                  />
              );
            }) : null
          }

            
        </div>

        <div className="chatArea">
            <div className="chatHeader"> 
            {
              chatStarted ? chatUser : ''
            }
            </div>
            <div className="messageBox">
                {
                  chatStarted ? 
                  user.chats.map(chat =>
                    <div className="indi-messages" style={{ textAlign: chat.user_uid_1 == auth.uid ? 'right' : 'left' }}>
                    <p className="messageStyle" >{chat.message}</p>
                  </div> )
                  : null
                }
                
            </div>
            {
              chatStarted ? 
              <div className="chatControls">
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Message"
                />
                <button onClick={submitMessage}>Send</button>
            </div> : null
            }
            
        </div>
    </section>
  </Layout>
  </div>
  );

}

export default HomePage;