import {RouteContentStyled, RouteHeadStyled} from "../styles/routeGeneralStyles.js";
import CalendarComponent from "../components/Calendar.jsx";

export default function EmployeeCalendarRoute() {
    return (
        <RouteContentStyled>
            <RouteHeadStyled>
                <div><h2>Employee Calendar</h2>
                    <p>Add something here</p></div>

            </RouteHeadStyled>
            <CalendarComponent/>
        </RouteContentStyled>
    )
}
