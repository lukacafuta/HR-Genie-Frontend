import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice.jsx";
import viewSlice from "./slices/ViewSlice.jsx";
import CompanySlice from "./slices/CompanySlice.jsx";

const store = configureStore({
    reducer: {
        user: userReducer,
        view: viewSlice,
        company: CompanySlice,
    },
});

export default store;
