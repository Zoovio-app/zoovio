import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userInfo from "../features/userInfo/userInfoSlice";
import messagingInfo from '../features/docSRC/slices/messagingInfoSlice';
import authInfo from '../features/docSRC/slices/authInfoSlice';

const reducer = {
  userInfo,
  messagingInfo,
  authInfo
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
