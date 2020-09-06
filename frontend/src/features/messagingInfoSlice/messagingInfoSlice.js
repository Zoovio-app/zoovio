import { createSlice } from "@reduxjs/toolkit";

export const messagingInfoSlice = createSlice({
    name: "messagingInfo",
    initialState: {
        users: [],
        chats: []
    },
    reducers: {
        GET_REALTIME_USERS: (state, action) => {
            state.users = action.payload.users;
        },

        GET_REALTIME_MESSAGES: (state, action) => {
            state.chats = action.payload.chats;
        },
    }
})

export const messagingInfoState = (state) => state.messagingInfo;
export const { GET_REALTIME_USERS, GET_REALTIME_MESSAGES } = messagingInfoSlice.actions;
export default messagingInfoSlice.reducer;