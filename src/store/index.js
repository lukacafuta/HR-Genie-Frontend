// creating the store -> index.js
import { configureStore } from "@reduxjs/toolkit"; // import the reducers to combine them here by renaming them: export default
import userReducer from "./slices/User";

const store = configureStore({
  reducer: {
    user: userReducer
  },
}); 

export default store;
