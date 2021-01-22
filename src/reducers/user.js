import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: { 
        accessToken: null,
        userId: 0,
        Statusmessage: "",
    },
};

export const user = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action) => {
            const { accessToken } = action.payload; 
            state.login.accessToken = accessToken; 
        },
        setUserId: (state, action) => {
            const { userId } = action.payload;
            state.login.userId = userId;
        },
        setStatusmessage: (state, action) => {
            const { statusMessage } = action.payload;
            state.login.statusMessage = statusMessage;
        },
        setErrorMessage: (state, action) => {
            state.login.userId = 0;
            state.login.accessToken = null;
            state.login.secretMessage = null;
        },
    }

})
