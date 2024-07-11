import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice.jsx";
import viewSlice from "./slices/ViewSlice.jsx";

const store = configureStore({
    reducer: {
        user: userReducer,
        view: viewSlice
    },
});

export default store;
