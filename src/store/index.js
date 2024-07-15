import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice.jsx";
import viewSlice from "./slices/ViewSlice.jsx";
import requestSlice from "./slices/RequestSlice.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
    view: viewSlice,
    request: requestSlice,
  },
});

export default store;
