import {useSelector} from "react-redux";

export default function Sidebar() {
    const view = useSelector((state) => state.view.view);
    console.log("view: ", view);

    function renderNav() {
        if (view === "company_admin") {
            return (
                <>
                    <a>Company Nav</a>
                </>
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
        <>{renderNav()}</>
    )
}