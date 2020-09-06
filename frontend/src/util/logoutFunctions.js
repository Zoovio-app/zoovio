import { auth, firestore } from "firebase";
import { USER_LOGOUT } from "../features/authInfoSlice/authInfoSlice";

export const cloudLogout = (uid) => async (dispatch, getState) => {
  //logout user
  const db = firestore();
  db.collection("users")
    .doc(uid)
    .update({
      isOnline: false,
    })
    .then(() => {
      auth()
        .signOut()
        .then(() => {
          //successfully
          localStorage.clear();
          dispatch(USER_LOGOUT());
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
