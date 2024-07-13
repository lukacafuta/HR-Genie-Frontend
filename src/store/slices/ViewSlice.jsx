import {createSlice} from "@reduxjs/toolkit";

const ViewSlice = createSlice({
    name: "view",
    initialState: {
        view: "manager",
    },
    reducers: {
        changeView: (state, action) => {
            state.view = action.payload;
        },
    },
});


export const {changeView} = ViewSlice.actions;
export default ViewSlice.reducer;