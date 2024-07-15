import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: {
    requestList: [
      {
        // User
        firstName: "Bob",
        lastName: "Sponge",
        team: "Marketing",
        profile: "/profile.png",
        id: 1,
        // Request
        type: "Vacation",
        fromDate: "01.07.2024",
        toDate: "02.07.2024",
        comment: "comment 1",
        submittedOn: "03.05.2024",
        status: "Approved",
      },
      {
        // User
        firstName: "Roger",
        lastName: "Fed",
        team: "Marketing",
        profile: "/profile.png",
        // Request
        id: 2,
        type: "Vacation",
        fromDate: "03.07.2024",
        toDate: "05.07.2024",
        comment: "comment 2",
        submittedOn: "15.04.2024",
        status: "Approved",
      },
    ],
  },
  reducers: {
    logRequestInfo: (state, action) => {
      const passedRequest = action.payload;
      console.log(passedRequest);
    },
    initialLoadLocalStorage: (state, action) => {
      state.requestList = action.payload;
    },
    // does not work yet
    addRequestToList: (state, action) => {
      state.requestList.push(action.payload);
      localStorage.setItem("requestList", JSON.stringify(state.requestList));
    },
  },
});

export const { logRequestInfo, addRequestToList, initialLoadLocalStorage } =
  requestSlice.actions;
export default requestSlice.reducer;
