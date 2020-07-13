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

export const userInfoState = (state) => state.userInfo;
export const { updateUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
