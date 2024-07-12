import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {NavStyled, SidebarStyled} from "../styles/SidebarStyled.js";

export default function Sidebar() {
    const view = useSelector((state) => state.view.view);
    console.log("view: ", view);

    function renderNav() {
        if (view === "company_admin") {
            return (
                <NavStyled>
                    <a>Company Nav</a>
                    <NavLink to="/company/calendar">Calendar</NavLink>

                </NavStyled>
            )
        } else if (view === "manager") {
            return (
                <>
                    <a>Manager Nav</a>

                </>
            )
        } else if (view === "employee") {
            return (
                <>
                    <a>Employee Nav</a>
                </>
            )
        }
    }

    return (
        <SidebarStyled>{renderNav()}</SidebarStyled>
    )
}