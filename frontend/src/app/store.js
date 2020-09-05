import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userInfo from "../features/userInfo/userInfoSlice";
import toast from "../features/toastSlice/toastSlice";
const reducer = {
  userInfo,
  toast,
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
