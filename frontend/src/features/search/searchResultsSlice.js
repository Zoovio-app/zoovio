import { createSlice } from "@reduxjs/toolkit";
import { testData } from "./helper";

export const resultsSlice = createSlice({
  name: "results",
  initialState: testData,
  reducers: {
    setResult: (state, action) => {
      return action.payload;
    },
  },
});

export const { setResult } = resultsSlice.actions;
export const resultsState = (state) => state.results;
export default resultsSlice.reducer;
