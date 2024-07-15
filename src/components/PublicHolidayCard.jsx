import {PublicHolidayCardStyled} from "../styles/publicHolidayCardStyles.js";

export default function PublicHolidayCard({publicHoliday}) {
    return (
        <PublicHolidayCardStyled>
            {console.log(publicHoliday)}
            <span><b>{publicHoliday.holidayName}</b></span>
            <span>{publicHoliday.holidayDate}
                <img src={"/remove-holiday.svg"}/>
            </span>
        </PublicHolidayCardStyled>
    );
}