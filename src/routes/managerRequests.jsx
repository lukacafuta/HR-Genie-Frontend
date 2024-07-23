import {
    RouteContentStyled,
    RouteHeadStyled,
} from "../styles/routeGeneralStyles.js";
import RequestContainer from "../components/RequestContainer.jsx";
import TrainingContainer from "../components/TrainingContainer.jsx";

export default function ManagerRequestsRoute() {
    return (
        <RouteContentStyled>
            <RouteHeadStyled>
                <div>
                    <h2>Requests</h2>
                </div>
            </RouteHeadStyled>
            <RequestContainer/>
            <RouteHeadStyled>
                <div>
                    <h2>Trainings</h2>
                </div>
            </RouteHeadStyled>
            {/*<TrainingContainer />*/}
        </RouteContentStyled>
    );
}
