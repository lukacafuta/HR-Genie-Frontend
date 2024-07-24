import {
  HalfWidthCard,
  HalfWidthCardContent,
  HalfWidthCardLabel,
  HalfWidthCardTitle,
} from "../styles/cardStyles.js";

import { useSelector } from "react-redux";

export default function EmployeeSummaryCard() {
  const user = useSelector((state) => state.user.userObject);

  if (user == null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HalfWidthCard>
        <HalfWidthCardTitle>My Information</HalfWidthCardTitle>
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
