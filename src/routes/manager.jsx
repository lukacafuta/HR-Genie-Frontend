import {RouteContentStyled, RouteHeadStyled} from "../styles/routeGeneralStyles.js";
import {useSelector} from "react-redux";
import RequestMiniTable from "../components/RequestsMiniTable.jsx";
import {RequestMiniTableAreaStyled} from "../styles/miniTableStyles.js";

export default function ManagerRoute() {

    const requests = useSelector((state) => state.request.requestList);
    const trainingRequests = useSelector((state) => state.request.trainingList);
    // const vacationRequests = requests.filter(request => request.type === "Vacation");
    // const trainingRequests = requests.filter(request => request.type === "Training");
    // const absenceRequests = requests.filter(request => request.type === "Absence");


    return (
        <RouteContentStyled>
            <RouteHeadStyled>
                <div><h2>Manager Dashboard</h2>
                    <p>Add something here</p></div>

            </RouteHeadStyled>
            <h3>Calendar</h3>
            <p>Calendar goes here</p>
            <h3>Nice Charts</h3>
            <p style={{marginBottom: "2rem"}}>Charts go here</p>

            <RequestMiniTableAreaStyled>
                <RequestMiniTable name={"Vacation Requests"} type={"vacation"} requests={requests}/>
                <RequestMiniTable name={"Training Requests"} type={"training"} requests={trainingRequests}/>
                <RequestMiniTable name={"Absence Notice"} type={"sick_leave"} requests={requests}/>
            </RequestMiniTableAreaStyled>


        </RouteContentStyled>
    )
}
