import { login } from "../util/firebaseFunctions";
import firebase from "../firebase";
import { USER_LOGIN } from "../features/authInfoSlice/authInfoSlice";

export const demoLogin = async () => {
  try {
    await login("user1@gmail.com", "testtest");
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = (e, email, password) => async (dispatch, getState) => {
  e.preventDefault();
  try {
    await login(email, password);
  } catch (error) {
    alert(error.message);
  }
};

export const cloudSignin = (e, user) => async (dispatch, getState) => {
  e.preventDefault();
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      console.log(data);
      const db = firebase.firestore();
      db.collection("users")
        .doc(data.user.uid)
        .update({
          isOnline: true,
        })
        .then((res) => {
          const name = data.user.displayName.split(" ");
          const firstName = name[0];
          const lastName = name[1];
          const loggedInUser = {
            firstName,
            lastName,
            // companyName: data.user.companyName,
            uid: data.user.uid,
            email: data.user.email,
            phoneNumber: data.user.phoneNumber,
            authenticated: true,
            authenticating: false,
          };

          // localStorage.setItem("user", JSON.stringify(loggedInUser));
          dispatch(USER_LOGIN(loggedInUser));
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
