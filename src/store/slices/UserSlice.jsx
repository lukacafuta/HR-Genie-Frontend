import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        accessToken: undefined,
        role: "company_admin",
        userObject: [], // this is the user object that will be fetched from the backend
        isManager: undefined,
        isCompanyAdmin: undefined,
    },
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload;
        },
        logout: (state) => {
            state.accessToken = '';
        },
        setUserObject: (state, action) => {
            state.userObject = action.payload;
        },

        setIsCompanyAdmin: (state, action) => {
            state.isCompanyAdmin = action.payload;
        },
        setIsManager: (state, action) => {
            if (action.payload)
                state.isManager = true;
        },
    },
});

export const {login, logout, setUserObject, setIsCompanyAdmin, setIsManager} = userSlice.actions;
export default userSlice.reducer;
