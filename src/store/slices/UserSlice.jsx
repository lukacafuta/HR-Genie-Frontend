import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        accessToken: undefined,
        role: "company_admin",
        userObject: [], // this is the user object that will be fetched from the backend
        myRequestList: [],
        myTrainingList: [],
        isManager: undefined,
        isCompanyAdmin: undefined,
        userKPIs: [],
        userList: [
            {
                // User
                id: 1,
                firstName: "Bob",
                lastName: "Sponge",
                team: "Marketing",
                profile: "/profile.png",
                gender: "Male",
                pensum: "100%",
                manager: "3",
            },
            {
                // User
                id: 2,
                firstName: "Roger V",
                lastName: "Fed",
                team: "Marketing",
                profile: "/profile.png",
                gender: "Male",
                pensum: "100%",
                manager: "4",
            },
        ],
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
        setUserList: (state, action) => {
            state.userList = action.payload;
        },
        addMyRequests: (state, action) => {
            state.myRequestList = action.payload;
            // console.log("Requests added to store: ", action.payload)
        },
        addMyTrainings: (state, action) => {
            state.myTrainingList = action.payload;
        },
        setIsCompanyAdmin: (state, action) => {
            state.isCompanyAdmin = action.payload;
        },
        setIsManager: (state, action) => {
            if (action.payload)
                state.isManager = true;
        },
        setUserKPIs: (state, action) => {
            state.userKPIs = action.payload;
        },
        initialLoadLocalStorage: (state, action) => {
            state.userList = action.payload;
        },
    },
});

export const {
    login,
    logout,
    setUserObject,
    setUserList,
    initialLoadLocalStorage,
    setIsCompanyAdmin,
    addMyRequests,
    addMyTrainings,
    setIsManager,
    setUserKPIs
} = userSlice.actions;
export default userSlice.reducer;
