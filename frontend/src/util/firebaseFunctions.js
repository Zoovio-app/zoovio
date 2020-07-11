import firebase from "firebase";

export const login = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const logOut = () => firebase.auth().signOut();

export const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const getFirebaseToken = () =>
  firebase.auth().currentUser.getIdToken(false);
