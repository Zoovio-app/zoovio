import { createSlice } from "@reduxjs/toolkit";

export const tostSlice = createSlice({
  name: "toast",
  initialState: false,
  reducers: {
    setToast: (state, action) => {
      return action.payload;
    },
  },
});

export const toastState = (state) => state.toast;
export const { setToast } = tostSlice.actions;
export default tostSlice.reducer;
