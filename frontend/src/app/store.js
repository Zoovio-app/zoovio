import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userInfo from "../features/userInfo/userInfoSlice";
import messagingInfo from '../features/messagingInfoSlice/messagingInfoSlice';
import authInfo from '../features/authInfoSlice/authInfoSlice';

const reducer = {
  userInfo,
  messagingInfo,
  authInfo
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
