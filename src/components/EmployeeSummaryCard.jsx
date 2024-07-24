import {
  HalfWidthCard,
  HalfWidthCardContent,
  HalfWidthCardLabel,
  HalfWidthCardTitle,
} from "../styles/cardStyles.js";

import { useSelector } from "react-redux";

export default function EmployeeSummaryCard({ id, managerId }) {
  const view = useSelector((state) => state.view.view);
  const loggedInUser = useSelector((state) => state.user.userObject);
  const userList = useSelector((state) => state.user.userList);
  const clickedUser = userList.filter((user) => user.id === id);

  let user = view === "employee" ? loggedInUser : clickedUser[0];
  let cardTitle = view === "employee" ? "My Information" : "User Information";

  //requests.filter(request => request.type === "Absence");

  if (user == null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HalfWidthCard>
        <HalfWidthCardTitle>{cardTitle}</HalfWidthCardTitle>
        <div style={{ display: "flex" }}>
          <HalfWidthCardContent>
            <span>
              <HalfWidthCardLabel>First Name:</HalfWidthCardLabel>{" "}
              {user.customUser?.first_name}
            </span>
            <span>
              <HalfWidthCardLabel>Last Name:</HalfWidthCardLabel>{" "}
              {user.customUser?.last_name}{" "}
            </span>
            <span>
              <HalfWidthCardLabel>Gender: </HalfWidthCardLabel>
              {user.gender}
            </span>
            <span>
              <HalfWidthCardLabel>Birthday: </HalfWidthCardLabel>
              {user.birthdayDate}{" "}
            </span>
            <span>
              <HalfWidthCardLabel>Team:</HalfWidthCardLabel>{" "}
              {user.department?.nameDepartment}{" "}
            </span>
            <span>
              <HalfWidthCardLabel>Manager: </HalfWidthCardLabel>
              {user.approver?.customUser?.first_name}{" "}
              {user.approver?.customUser?.last_name}
            </span>
          </HalfWidthCardContent>
          <HalfWidthCardContent>
            <span>
              <HalfWidthCardLabel>Phone: </HalfWidthCardLabel>
              {user.phone}
            </span>
            <span>
              <HalfWidthCardLabel>Email Address:</HalfWidthCardLabel>{" "}
              {user.customUser?.email}
            </span>
            <span>
              <HalfWidthCardLabel>Street: </HalfWidthCardLabel> {user.street}
            </span>
            <span>
              <HalfWidthCardLabel>Postal Code:</HalfWidthCardLabel>{" "}
              {user.postcode}
            </span>
            <span>
              <HalfWidthCardLabel>City: </HalfWidthCardLabel>
              {user.city}
            </span>
            <span>
              <HalfWidthCardLabel>Canton:</HalfWidthCardLabel> {user.canton}
            </span>
          </HalfWidthCardContent>
        </div>
      </HalfWidthCard>
    </>
  );
}
