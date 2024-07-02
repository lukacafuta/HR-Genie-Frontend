import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: undefined,
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = '';
    }
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
