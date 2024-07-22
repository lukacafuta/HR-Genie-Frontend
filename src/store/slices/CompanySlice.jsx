import {createSlice} from "@reduxjs/toolkit";

const CompanySlice = createSlice({
    name: "company",
    initialState: {
        publicHolidays: [{
            "id": 1,
            "holidayName": "Bootcamp Day",
            "holidayDate": "2024-08-03"
        }, {
            "id": 2,
            "holidayName": "Holy Computer Day",
            "holidayDate": "2024-07-03"
        }, {
            "id": 3,
            "holidayName": "Bootcamp Day",
            "holidayDate": "2024-06-03"
        }, {
            "id": 4,
            "holidayName": "Bootcamp Day",
            "holidayDate": "2024-05-03"
        },],
        companyData: {
            "companyId": undefined,
            "companyName": undefined,
            "companyLogo": "",
            "companyWorkingHours": {
                "start": "8",
                "end": "18"
            }
        }
    },
    reducers: {
        AddHoliday: (state, action) => {
            console.log("New Entry", action.payload)
            const newHoliday = {
                id: state.publicHolidays.length + 1,
                holidayName: action.payload.holidayName,
                holidayDate: action.payload.holidayDate
            };

            state.publicHolidays.push(newHoliday);
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