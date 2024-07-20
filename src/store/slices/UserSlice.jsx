import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        accessToken: undefined,
        role: "company_admin",
        userObject: [], // this is the user object that will be fetched from the backend
        isManager: false,
        isCompanyAdmin: false,
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
            state.isManager = action.payload;
        },
    },
});

export const {login, logout, setUserObject, isCompanyAdmin, isManager} = userSlice.actions;
export default userSlice.reducer;
