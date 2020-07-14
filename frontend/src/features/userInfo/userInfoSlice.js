import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: { user: null },
  reducers: {
    updateUserInfo: (state, action) => {
      state.user = action.payload;
    },
    clearUserInfo: (state, action) => {
      return { user: null };
    },
  },
});

export const userInfoState = (state) => state.userInfo;
export const { updateUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
