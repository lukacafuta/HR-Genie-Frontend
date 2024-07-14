import {
  HalfWidthCard,
  HalfWidthCardContent,
  HalfWidthCardLabel,
  HalfWidthCardTitle,
} from "../styles/cardStyles.js";

export default function EmployeeSummaryCard() {
  const loggedInUser = {
    firstName: "Bob",
    lastName: "Sponge",
    gender: "Male",
    birthday: "01.01.1980",
    team: "Marketing",
    manager: "Sunny Benny",
    phone: "+41 78 98 23 01",
    emailAddress: "admin@admin.ch",
    street: "Bahnhofstrasse 12",
    postalCode: "8001",
    city: "Zurich",
    canton: "Zurich",
  };

  return (
    <>
      <HalfWidthCard>
        <HalfWidthCardTitle>My Information</HalfWidthCardTitle>
        <div style={{ display: "flex" }}>
          <HalfWidthCardContent>
            <span>
              <HalfWidthCardLabel>First Name:</HalfWidthCardLabel>{" "}
              {loggedInUser.firstName}
            </span>
            <span>
              <HalfWidthCardLabel>Last Name:</HalfWidthCardLabel>{" "}
              {loggedInUser.lastName}{" "}
            </span>
            <span>
              <HalfWidthCardLabel>Gender: </HalfWidthCardLabel>
              {loggedInUser.gender}
            </span>
            <span>
              <HalfWidthCardLabel>Birthday: </HalfWidthCardLabel>
              {loggedInUser.birthday}{" "}
            </span>
            <span>
              <HalfWidthCardLabel>Team:</HalfWidthCardLabel> {loggedInUser.team}{" "}
            </span>
            <span>
              <HalfWidthCardLabel>Manager: </HalfWidthCardLabel>
              {loggedInUser.manager}
            </span>
          </HalfWidthCardContent>
          <HalfWidthCardContent>
            <span>
              <HalfWidthCardLabel>Phone: </HalfWidthCardLabel>
              {loggedInUser.phone}
            </span>
            <span>
              <HalfWidthCardLabel>Email Address:</HalfWidthCardLabel>{" "}
              {loggedInUser.emailAddress}
            </span>
            <span>
              <HalfWidthCardLabel>Street: </HalfWidthCardLabel>{" "}
              {loggedInUser.street}
            </span>
            <span>
              <HalfWidthCardLabel>Postal Code:</HalfWidthCardLabel>{" "}
              {loggedInUser.postalCode}
            </span>
            <span>
              <HalfWidthCardLabel>City: </HalfWidthCardLabel>
              {loggedInUser.city}
            </span>
            <span>
              <HalfWidthCardLabel>Canton:</HalfWidthCardLabel>{" "}
              {loggedInUser.canton}
            </span>
          </HalfWidthCardContent>
        </div>
      </HalfWidthCard>
    </>
  );
}
