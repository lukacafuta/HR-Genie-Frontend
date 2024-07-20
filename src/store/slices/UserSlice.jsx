import { createSlice } from "@reduxjs/toolkit";

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
  name: "user",
  initialState: {
    accessToken: undefined,
    role: "company_admin",
    userObject: [], // this is the user object that will be fetched from the backend
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
      state.accessToken = "";
    },
    initialLoadLocalStorage: (state, action) => {
      state.userList = action.payload;
    },
    setUserObject: (state, action) => {
      state.userObject = action.payload;
    },
  },
});

export const {login, logout, setUserObject, initialLoadLocalStorage, setIsCompanyAdmin, setIsManager} = userSlice.actions;
export default userSlice.reducer;
