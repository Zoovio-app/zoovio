import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userInfo from "../features/userInfo/userInfoSlice";
import messagingInfo from '../features/docSRC/docPortal/messagingInfoSlice/messagingInfoSlice';

const reducer = {
  userInfo,
  messagingInfo,
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
