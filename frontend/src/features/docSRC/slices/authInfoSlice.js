import { createSlice } from '@reduxjs/toolkit';

export const authInfoSlice = createSlice({
    name: "authInfo",
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        // companyName: '',
        // userType: '',
        authenticating: false,
        authenticated: false,
        error: null
    }, 
    reducers: {
        // action type doing what reducer does when applied
        USER_LOGIN: (state, action) => {
            return action.payload.user
        },
        // action type doing what reducer does when applied
        USER_LOGOUT: (state, action) => {
            return state.initialState
        }
    }
})


export const authInfoState = (state) => state.authInfo;
export const { USER_LOGIN, USER_LOGOUT } = authInfoSlice.actions;
export default authInfoSlice.reducer;