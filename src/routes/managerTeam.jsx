import {
  RouteContentStyled,
  RouteHeadStyled,
} from "../styles/routeGeneralStyles.js";
import UserContainer from "../components/UserContainer.jsx";

export default function ManagerTeamRoute() {
  return (
    <RouteContentStyled>
      <RouteHeadStyled>
        <h2>My Team</h2>
      </RouteHeadStyled>
      <UserContainer />
    </RouteContentStyled>
  );
}
