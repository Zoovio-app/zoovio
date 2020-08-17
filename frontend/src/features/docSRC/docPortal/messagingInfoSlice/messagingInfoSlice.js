import { createSlice } from "@reduxjs/toolkit";

export const messagingInfoSlice = createSlice({
    name: "messagingInfo",
    initalState: {
        users: [],
        chats: []
    },

    reducers: {
        // action type doing what reducer does when applied
        GET_REALTIME_USERS: (state, action) => {
            state.users = action.payload.users;
        },

        // action type doing what reducer does when applied
        GET_REALTIME_MESSAGES: (state, action) => {
            state.chats = action.payload.chats;
        }
    }
})

export const messagingInfoState = (state) => state.messagingInfo;
export const { GET_REALTIME_USERS, GET_REALTIME_MESSAGES } = messagingInfoSlice.actions;
export default messagingInfoSlice.reducer;