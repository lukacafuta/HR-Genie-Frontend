import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: undefined,
    role: "company_admin",
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
        manager: "Jean-Pierre",
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
        manager: "Jean-Pierre",
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
    logUserInfo: (state, action) => {
      const passedUser = action.payload;
      console.log(passedUser);
    },
    initialLoadLocalStorage: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { login, logout, logUserInfo, initialLoadLocalStorage } =
  userSlice.actions;
export default userSlice.reducer;
