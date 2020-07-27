import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userInfo from "../features/userInfo/userInfoSlice";

const reducer = {
  userInfo,
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
