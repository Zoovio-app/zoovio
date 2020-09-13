import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userInfo from "../features/userInfo/userInfoSlice";
import toast from "../features/toastSlice/toastSlice";
import messagingInfo from "../features/messagingInfoSlice/messagingInfoSlice";
import authInfo from "../features/authInfoSlice/authInfoSlice";
import taskForm from "../features/taskForm/taskFormSlice";
import results from "../features/search/searchResultsSlice";
const reducer = {
  userInfo,
  toast,
  messagingInfo,
  authInfo,
  taskForm,
  results,
};

export default configureStore({
  reducer,
  // middleware: [...getDefaultMiddleware(), logger],
});
