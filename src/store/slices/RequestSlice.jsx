import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: {
    requestList: [],
  },
  reducers: {
    logRequestInfo: (state, action) => {
      const passedRequest = action.payload;
      console.log(passedRequest);
    },
    loadRequests: (state, action) => {
      state.requestList = action.payload;
    },
    deleteRequest: (state, action) => {
      console.log("will delete request");
    },
    addRequest: (state, action) => {
      console.log("will delete request");
    },
    updateRequest: (state, action) => {
      console.log("will update request");
    },
  },
});

export const {
  logRequestInfo,
  addRequestToList,
  initialLoadLocalStorage,
  loadRequests,
} = requestSlice.actions;
export default requestSlice.reducer;
