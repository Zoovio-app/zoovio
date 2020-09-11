import { createSlice } from "@reduxjs/toolkit";
import { testData } from "./helper";

export const resultsSlice = createSlice({
  name: "results",
  initialState: [],
  reducers: {
    setResult: (state, action) => {
      return [
        ...action.payload,
        ...testData,
      ]; /*.sort(() => Math.random() - 0.5);*/
    },
  },
});

export const { setResult } = resultsSlice.actions;
export const resultsState = (state) => state.results;
export default resultsSlice.reducer;
