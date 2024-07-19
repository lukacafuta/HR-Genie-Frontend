import {
  RouteContentStyled,
  RouteHeadStyled,
} from "../styles/routeGeneralStyles.js";
import RequestContainer from "../components/RequestContainer.jsx";

export default function ManagerRequestsRoute() {
  return (
    <RouteContentStyled>
      <RouteHeadStyled>
        <div>
          <h2>Requests</h2>
        </div>
      </RouteHeadStyled>
      <RequestContainer />
    </RouteContentStyled>
  );
}
