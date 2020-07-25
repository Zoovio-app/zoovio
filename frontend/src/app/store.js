import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userInfo from "../features/userInfo/userInfoSlice";
import day from "../features/calendar/daySlice/daySlice";

const reducer = {
  userInfo,
  day,
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
