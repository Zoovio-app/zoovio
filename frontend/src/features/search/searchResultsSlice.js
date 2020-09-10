import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "results",
  initialState: [],
  reducers: {
    setResult: (state, action) => {
      return action.payload;
    },
  },
});

export const { setResult } = resultsSlice.actions;
export const resultsState = (state) => state.resultsSlice;
export default resultsSlice.reducer;
