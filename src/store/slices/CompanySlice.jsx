import {createSlice} from "@reduxjs/toolkit";

const CompanySlice = createSlice({
    name: "company",
    initialState: {
        publicHolidays: [{
            "id": 1,
            "holidayName": "Bootcamp Day",
            "holidayDate": "12.12.2024"
        }, {
            "id": 2,
            "holidayName": "Holy Computer Day",
            "holidayDate": "21.21.2024"
        }, {
            "id": 3,
            "holidayName": "Bootcamp Day",
            "holidayDate": "12.12.2024"
        }, {
            "id": 4,
            "holidayName": "Bootcamp Day",
            "holidayDate": "12.12.2024"
        },],
    },
    reducers: {
        AddHoliday: (state, action) => {
            state.view = action.payload;
        },
        RemoveHoliday: (state, action) => {
            console.log("In Redux Remove Holiday: ", action.payload);
            const newHolidayList = state.publicHolidays.filter(holiday => holiday.id !== parseInt(action.payload));
            console.log("New Holiday List: ", newHolidayList.length);
            state.publicHolidays = newHolidayList;
        },
    },
});


export const {AddHoliday, RemoveHoliday} = CompanySlice.actions;
export default CompanySlice.reducer;