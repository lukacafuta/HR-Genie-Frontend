import {createSlice} from "@reduxjs/toolkit";

const ViewSlice = createSlice({
    name: "view",
    initialState: {
        view: "company_admin",
    },
    reducers: {
        changeView: (state, action) => {
            state.view = action.payload;
        },
    },
});


export const {changeView} = ViewSlice.actions;
export default ViewSlice.reducer;