import {
  HalfWidthCard,
  HalfWidthCardContent,
  HalfWidthCardLabel,
  HalfWidthCardTitle,
} from "../styles/cardStyles.js";

import { useSelector } from "react-redux";

import { useEffect } from "react";

export default function EmployeeSummaryCard() {
  //const { fetchUser } = useGenieAPI();
  //fetchUser();

  const user = useSelector((state) => state.user.userObject);

  //console.log(JSON.stringify(user[0]));

  const loggedInUser = {
    // firstName: user.customUser.first_name,
    // lastName: user.customUser.last_name,
    // username: user.customUser.username,
    // avatar: user.customUser.avatar,
    // gender: user.gender,
    // firstDayAtWork: user.firstDayAtWork,
    // birthday: user.birthdayDate,
    // team: user.department.nameDepartment,
    // manager: `${user.approver.customUser.first_name} ${user.approver.customUser.last_name}`,
    phone: "+41 78 98 23 01",
    emailAddress: "admin@admin.ch",
    street: "Bahnhofstrasse 12",
    postalCode: "8001",
    city: "Zurich",
    canton: "Zurich",
  };

  // const hardcodedInfos = {
  //   phone: "+41 78 98 23 01",
  //   emailAddress: "admin@admin.ch",
  //   street: "Bahnhofstrasse 12",
  //   postalCode: "8001",
  //   city: "Zurich",
  //   canton: "Zurich",
  // };

  return (
    <>
      <HalfWidthCard>
        <HalfWidthCardTitle>My Information</HalfWidthCardTitle>
        {/*<div style={{ display: "flex" }}>*/}
        {/*  <HalfWidthCardContent>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>First Name:</HalfWidthCardLabel>{" "}*/}
        {/*      {loggedInUser.customUser.first_name}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Last Name:</HalfWidthCardLabel>{" "}*/}
        {/*      {loggedInUser.customUser.last_name}{" "}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Gender: </HalfWidthCardLabel>*/}
        {/*      {loggedInUser.gender}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Birthday: </HalfWidthCardLabel>*/}
        {/*      {loggedInUser.birthdayDate}{" "}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Team:</HalfWidthCardLabel>{" "}*/}
        {/*      {loggedInUser.department.nameDepartment}{" "}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Manager: </HalfWidthCardLabel>*/}
        {/*      {loggedInUser.approver.customUser.first_name}{" "}*/}
        {/*      {loggedInUser.approver.customUser.last_name}*/}
        {/*    </span>*/}
        {/*  </HalfWidthCardContent>*/}
        {/*  <HalfWidthCardContent>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Phone: </HalfWidthCardLabel>*/}
        {/*      {loggedInUser.phone}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Email Address:</HalfWidthCardLabel>{" "}*/}
        {/*      {loggedInUser.emailAddress}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Street: </HalfWidthCardLabel>{" "}*/}
        {/*      {loggedInUser.street}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Postal Code:</HalfWidthCardLabel>{" "}*/}
        {/*      {loggedInUser.postalCode}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>City: </HalfWidthCardLabel>*/}
        {/*      {loggedInUser.city}*/}
        {/*    </span>*/}
        {/*    <span>*/}
        {/*      <HalfWidthCardLabel>Canton:</HalfWidthCardLabel>{" "}*/}
        {/*      {loggedInUser.canton}*/}
        {/*    </span>*/}
        {/*  </HalfWidthCardContent>*/}
        {/*</div>*/}
      </HalfWidthCard>
    </>
  );
}
