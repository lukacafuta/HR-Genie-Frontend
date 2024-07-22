import { useDispatch, useSelector } from "react-redux";
import {
  loadTrainings,
  logRequestInfo,
} from "../store/slices/RequestSlice.jsx";
import { RowCard } from "../styles/cardStyles.js";
import { useEffect, useState } from "react";
import { BtnGreen, BtnRed } from "../styles/buttonStyles.js";
import ButtonGreen from "./buttons/ButtonGreen.jsx";
import ButtonRed from "./buttons/ButtonRed.jsx";
import { Link, useParams } from "react-router-dom";
import { cleanUpIncomingDate, cleanUpIncomingText } from "../common/utils.js";
import { api } from "../common/api.js";

export default function TrainingCard({ oneTraining }) {
  const { trainingIndex } = useParams();
  const view = useSelector((state) => state.view.view);

  const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = useState(false);

  function handleMoreClick(trainingCard) {
    dispatch(logRequestInfo(trainingCard));
    setIsExpanded(!isExpanded);
  }

  function handleUpdate(trainingCard) {
    console.log("update", trainingCard);
  }

  function handleDelete(trainingCard) {
    console.log("delete", trainingCard);
  }

  let {
    id,
    requester,
    trainingUrl,
    title,
    description,
    price,
    statusApproval,
    statusAdvancement,
  } = oneTraining;

  //Format Request Data
  statusApproval = cleanUpIncomingText(statusApproval);
  statusAdvancement = cleanUpIncomingText(statusAdvancement);

  return (
    <>
      <RowCard id={id} onClick={() => handleMoreClick(oneTraining)}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>
            <img
              src="/profile.png"
              //src={requestCard.profile}
              alt="profile"
              height="35px"
              width="35px"
            />{" "}
          </span>
          <span>
            <b>Requester {requester}</b>
          </span>
        </div>
        Training #{id}
        <span>{title}</span>
        <span> </span>
        <div
          style={{
            display: "flex",
            justifySelf: "end",
            height: "100%",
            alignItems: "center",
          }}
        >
          {isExpanded ? (
            <img src="/MoreInfo.png" alt="..." height="3px" />
          ) : (
            <img src="/arrow-down.png" alt="..." height="8px" />
          )}
        </div>
      </RowCard>
      {isExpanded && (
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
              <b>Description:</b> {description}
            </span>
            <span>
              <b>Price:</b> {price}
            </span>
            <span>
              <b>URL:</b> {trainingUrl}
            </span>
            <span>
              <b>Status Approval:</b> {statusApproval}
            </span>
            <span>
              <b>Status Advancement:</b> {statusAdvancement}
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
            {statusApproval === "Pending" && (
              <ButtonRed
                iconURL={"/cross-deny.png"}
                buttonText={"Delete"}
                onClick={() => handleDelete(oneTraining)}
              />
            )}
            {statusApproval === "Pending" && (
              <ButtonGreen
                iconURL={"/tick-circle.png"}
                buttonText={"Update"}
                onClick={() => handleUpdate(oneTraining)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
