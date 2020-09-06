import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userInfo from "../features/userInfo/userInfoSlice";
import messagingInfo from '../features/messagingInfoSlice/messagingInfoSlice';
import authInfo from '../features/authInfoSlice/authInfoSlice';
import toast from "../features/toastSlice/toastSlice";

const reducer = {
  userInfo,
  messagingInfo,
  authInfo,
  toast
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});