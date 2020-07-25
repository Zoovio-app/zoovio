import { createSlice } from "@reduxjs/toolkit";

export const daySlice = createSlice({
  name: "day",
  initialState: new Date().toISOString(),
  reducers: {
    setDay: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDay } = daySlice.actions;
export const dayState = (state) => state.day;
export default daySlice.reducer;
