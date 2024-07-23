import {
  HalfWidthCard,
  HalfWidthCardContent,
  HalfWidthCardLabel,
  HalfWidthCardTitle,
} from "../styles/cardStyles.js";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { api } from "../common/api.js";
import { setUserObject } from "../store/slices/UserSlice.jsx";

export default function EmployeeSummaryCard() {
  const token = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userObject);

  const fetchUser = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await api.get("/users/me/", config);
      console.log("API call successful-user", res.data[0]);
      let userData = res.data[0];
      dispatch(setUserObject(userData));
    } catch (error) {
      console.log("nope");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const loggedInUser = {
    firstName: user.customUser?.first_name,
    lastName: user.customUser?.last_name,
    username: user.customUser?.username,
    avatar: user.customUser?.avatar,
    gender: user.gender,
    firstDayAtWork: user.firstDayAtWork,
    birthday: user.birthdayDate,
    team: user.department?.nameDepartment,
    manager: `${user.approver?.customUser?.first_name} ${user.approver?.customUser?.last_name}`,
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
              {loggedInUser.first_name}
            </span>
            <span>
              <HalfWidthCardLabel>Last Name:</HalfWidthCardLabel>{" "}
              {loggedInUser.last_name}{" "}
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
              {loggedInUser.nameDepartment}{" "}
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
