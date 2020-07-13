import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {},
  reducers: {
    updateUserInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
