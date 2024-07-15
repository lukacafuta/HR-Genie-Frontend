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
        companyData: {
            "companyName": "Constructor Academy",
            "companyLogo": "",
            "companyWorkingHours": {
                "start": "8",
                "end": "18"
            }
        }
    },
    reducers: {
        AddHoliday: (state, action) => {
            console.log(action.payload)
        },
        RemoveHoliday: (state, action) => {
            // console.log("In Redux Remove Holiday: ", action.payload);
            const newHolidayList = state.publicHolidays.filter(holiday => holiday.id !== parseInt(action.payload));
            // console.log("New Holiday List: ", newHolidayList.length);
            state.publicHolidays = newHolidayList;
        },
        ChangeCompanyName: (state, action) => {
            state.companyData.companyName = action.payload;
            console.log(state.companyData.companyName)
        },
        ChangeStartHours: (state, action) => {
            state.companyData.companyWorkingHours.start = action.payload;
        },
        ChangeEndHours: (state, action) => {
            state.companyData.companyWorkingHours.end = action.payload;
        },
        AddCompanyLogo: (state, action) => {
            state.companyData.companyLogo = action.payload;
        }
    },
});


export const {AddHoliday, RemoveHoliday, ChangeCompanyName, ChangeStartHours, ChangeEndHours, AddCompanyLogo} = CompanySlice.actions;
export default CompanySlice.reducer;