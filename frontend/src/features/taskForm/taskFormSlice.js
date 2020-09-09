import { createSlice } from "@reduxjs/toolkit";

export const taskFormSlice = createSlice({
  name: "taskForm",
  initialState: "",
  reducers: {
    setTask: (state, action) => {
      return action.payload;
    },
    clearForm: (state, action) => {
      return state.initialState;
    },
  },
});

export const { setTask, clearForm } = taskFormSlice.actions;
export const taskState = (state) => state.taskForm;
export default taskFormSlice.reducer;
