import firebase from "../firebase";
import {
  GET_REALTIME_USERS,
  GET_REALTIME_MESSAGES,
} from "../features/messagingInfoSlice/messagingInfoSlice";
import { getUsersId } from "./helpers";

export const getRealtimeUsers = (uid, uid2) => async (dispatch, getState) => {
  const db = firebase.firestore();

  await new Promise((resolve) => {
    db.collection("chats").onSnapshot((querySnapshot) => {
      const chats = [];

      querySnapshot.forEach(function (doc) {
        if (doc.data().senderId === uid || doc.data().recieverId === uid) {
          chats.push(doc.data());
        }
      });
      resolve(chats);
    });
  }).then((res) => {
    db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      let usersIds = getUsersId(res, uid, uid2);

      querySnapshot.forEach((doc) => {
        if (usersIds.has(doc.data().uid)) {
          users.push(doc.data());
        }
      });
      dispatch(GET_REALTIME_USERS({ users }));
    });
  });
};

export const updateMessage = (msgObj) => async (dispatch, getState) => {
  const db = firebase.firestore();
  db.collection("chats")
    .add({
      ...msgObj,
      isView: false,
      createdAt: JSON.stringify({ date: new Date() }),
    })
    .then((data) => {
      console.log("here is the data", data);
      dispatch(GET_REALTIME_MESSAGES());
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRealtimeConversations = (user) => async (
  dispatch,
  getState
) => {
  const db = firebase.firestore();
  db.collection("chats")
    .orderBy("createdAt", "asc")
    .onSnapshot((querySnapshot) => {
      const chats = [];
      querySnapshot.forEach((doc) => {
        if (
          (doc.data().senderId === user.uid_1 &&
            doc.data().recieverId === user.uid_2) ||
          (doc.data().senderId === user.uid_2 &&
            doc.data().recieverId === user.uid_1)
        ) {
          chats.push(doc.data());
        }
      });
      dispatch(GET_REALTIME_MESSAGES({ chats }));
      // console.log(chats);
    });
};
