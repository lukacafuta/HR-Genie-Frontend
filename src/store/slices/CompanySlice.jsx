import {createSlice} from "@reduxjs/toolkit";

const CompanySlice = createSlice({
    name: "company",
    initialState: {
        publicHolidays: [{
            "id": 1,
            "holidayName": "Neujahr / New Year",
            "holidayDate": "2024-01-01"
        }, {
            "id": 2,
            "holidayName": "Berchtoldstag",
            "holidayDate": "2024-01-02"
        }, {
            "id": 3,
            "holidayName": "Karfreitag",
            "holidayDate": "2024-03-29"
        }, {
            "id": 4,
            "holidayName": "Ostermontag / Easter Monday",
            "holidayDate": "2024-04-01"
        }, {
            "id": 5,
            "holidayName": "Sechseläuten",
            "holidayDate": "2024-04-15"
        }, {
            "id": 6,
            "holidayName": "Tag der Arbeit / Labor Day",
            "holidayDate": "2024-05-01"
        }, {
            "id": 7,
            "holidayName": "Auffahrt",
            "holidayDate": "2024-05-09"
        }, {
            "id": 8,
            "holidayName": "Pfingstmontag / Whit Monday",
            "holidayDate": "2024-05-20"
        }, {
            "id": 9,
            "holidayName": "Bundesfeiertag / National holiday",
            "holidayDate": "2024-08-01"
        }, {
            "id": 10,
            "holidayName": "Knabenschiessen",
            "holidayDate": "2024-09-09"
        }, {
            "id": 11,
            "holidayName": "Weihnachtstag / Christmas Day",
            "holidayDate": "2024-12-25"
        }, {
            "id": 12,
            "holidayName": "Stephanstag / St. Stephen's Day",
            "holidayDate": "2024-12-26"
        }, {
            "id": 13,
            "holidayName": "Vortag vor Neujahr / Day before New Year",
            "holidayDate": "2024-12-31"
        },],
        companyData: {
            "companyId": undefined,
            "companyName": "",
            "companyLogo": "",
            "companyWorkingHours": {
                "start": "8",
                "end": "18"
            }
        }
    },
    reducers: {
        AddHoliday: (state, action) => {
            // console.log("New Entry", action.payload)
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
            // console.log(state.companyData.companyName)
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


export const {
    AddHoliday,
    RemoveHoliday,
    ChangeCompanyName,
    ChangeStartHours,
    ChangeEndHours,
    AddCompanyLogo
} = CompanySlice.actions;
export default CompanySlice.reducer;