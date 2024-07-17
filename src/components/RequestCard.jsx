import { useDispatch, useSelector } from "react-redux";
import {
  addRequestToList,
  logRequestInfo,
} from "../store/slices/RequestSlice.jsx";
import { RowCard } from "../styles/cardStyles.js";
import { useState } from "react";
import { BtnGreen, BtnRed } from "../styles/buttonStyles.js";
import ButtonGreen from "./buttons/ButtonGreen.jsx";
import ButtonRed from "./buttons/ButtonRed.jsx";
import { Link, useParams } from "react-router-dom";

export default function RequestCard({ oneRequest }) {
  const { requestIndex } = useParams();

  const requestList = useSelector((state) => state.request.requestList);
  const requestCard = requestList.find((r) => r.id === parseInt(oneRequest.id));

  const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = useState(false);

  function handleMoreClick(requestCard) {
    dispatch(logRequestInfo(requestCard));
    setIsExpanded(!isExpanded);
  }

  function handleUpdate(requestCard) {
    console.log("update", requestCard);
  }

  function handleDelete(requestCard) {
    console.log("delete", requestCard);
  }

  return (
    <>
      <Link to={`/employee/requests/${requestCard.id}#${requestCard.id}`}>
        <RowCard
          id={requestCard.id}
          onClick={() => handleMoreClick(requestCard)}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <img
                src={requestCard.profile}
                alt="profile"
                height="35px"
                width="35px"
              />{" "}
            </span>
            <span>
              <b>
                {requestCard.firstName} {requestCard.lastName}
              </b>
            </span>
          </div>
          Request #{requestCard.id}
          <span>{requestCard.type}</span>
          <span>
            {requestCard.fromDate} - {requestCard.toDate}
          </span>
          <div
            style={{
              display: "flex",
              justifySelf: "end",
              height: "100%",
              alignItems: "center",
            }}
          >
            {Number(requestIndex) !== requestCard.id ? (
              <img src="/MoreInfo.png" alt="..." height="3px" />
            ) : (
              <img src="/arrow-down.png" alt="..." height="8px" />
            )}
          </div>
        </RowCard>
      </Link>
      {Number(requestIndex) === requestCard.id && (
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
              <b>Submitted on:</b> {requestCard.submittedOn}
            </span>
            <span>
              <b>Status:</b> {requestCard.status}
            </span>
            <span>
              <b>Comment: </b>
              {requestCard.comment}
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
              onClick={() => handleDelete(requestCard)}
            />
            <ButtonGreen
              iconURL={"/tick-circle.png"}
              buttonText={"Update"}
              onClick={() => handleUpdate(requestCard)}
            />
          </div>
        </div>
      )}
    </>
  );
}
