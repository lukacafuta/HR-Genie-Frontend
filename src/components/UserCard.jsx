import { useDispatch, useSelector } from "react-redux";
import { logUserInfo } from "../store/slices/UserSlice.jsx";
import { RowCard } from "../styles/cardStyles.js";
import { useState } from "react";
import { BtnGreen, BtnRed } from "../styles/buttonStyles.js";
import ButtonGreen from "./buttons/ButtonGreen.jsx";
import ButtonRed from "./buttons/ButtonRed.jsx";
import { Link, useParams } from "react-router-dom";

export default function UserCard({ oneUser }) {
  const { userIndex } = useParams();

  const userList = useSelector((state) => state.user.userList);
  const UserCard = userList.find((r) => r.id === parseInt(oneUser.id));

  const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = useState(false);

  function handleMoreClick(UserCard) {
    dispatch(logUserInfo(UserCard));
    setIsExpanded(!isExpanded);
  }

  function handleUpdate(UserCard) {
    console.log("update", UserCard);
  }

  function handleDelete(UserCard) {
    console.log("delete", UserCard);
  }

  return (
    <>
      <Link to={`/company/employees/${UserCard.id}#${UserCard.id}`}>
        <RowCard id={UserCard.id} onClick={() => handleMoreClick(UserCard)}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <img
                src={UserCard.profile}
                alt="profile"
                height="35px"
                width="35px"
              />{" "}
            </span>
            <span>
              <b>
                {UserCard.firstName} {UserCard.lastName}
              </b>
            </span>
          </div>
          <span>{UserCard.team}</span>
          User #{UserCard.id}
          <div
            style={{
              display: "flex",
              justifySelf: "end",
              height: "100%",
              alignItems: "center",
            }}
          >
            {Number(userIndex) !== UserCard.id ? (
              <img src="/MoreInfo.png" alt="..." height="3px" />
            ) : (
              <img src="/arrow-down.png" alt="..." height="8px" />
            )}
          </div>
        </RowCard>
      </Link>
      {Number(userIndex) === UserCard.id && (
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              padding: "10px",
              width: "20%",
            }}
          >
            <span>
              <b>Gender:</b> {UserCard.gender}
            </span>
            <span>
              <b>Pensum:</b> {UserCard.pensum}
            </span>
            <span>
              <b>Manager: </b>
              {UserCard.manager}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "10px",
              padding: "10px",
              width: "80%",
            }}
          >
            <ButtonRed
              iconURL={"/cross-deny.png"}
              buttonText={"Delete"}
              onClick={() => handleDelete(UserCard)}
            />
            <ButtonGreen
              iconURL={"/tick-circle.png"}
              buttonText={"Update"}
              onClick={() => handleUpdate(UserCard)}
            />
          </div>
        </div>
      )}
    </>
  );
}
