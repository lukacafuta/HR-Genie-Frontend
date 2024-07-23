import {useDispatch, useSelector} from "react-redux";
import {loadRequests, logRequestInfo} from "../store/slices/RequestSlice.jsx";
import {RowCard} from "../styles/cardStyles.js";
import {useEffect, useState} from "react";
import {BtnGreen, BtnRed} from "../styles/buttonStyles.js";
import ButtonGreen from "./buttons/ButtonGreen.jsx";
import ButtonRed from "./buttons/ButtonRed.jsx";
import {Link, useParams} from "react-router-dom";
import {cleanUpIncomingDate, cleanUpIncomingText} from "../common/utils.js";
import {api} from "../common/api.js";

export default function RequestCard({oneRequest}) {
    const {requestIndex} = useParams();
    const view = useSelector((state) => state.view.view);
    let currentRoleURLParam = view === "manager" ? "manager" : "employee";

    const dispatch = useDispatch();

    const [isExpanded, setIsExpanded] = useState(false);

    const isManagerView = useSelector((state) => state.view.view) === "manager";

    // console.log("isManagerView", isManagerView);

    function handleMoreClick(requestCard) {
        dispatch(logRequestInfo(requestCard));
        setIsExpanded(!isExpanded);
    }

    function handleDeny(requestCard) {
        console.log("deny", requestCard);
    }

    function handleApprove(requestCard) {
        console.log("approvey", requestCard);
    }

    function handleUpdate(requestCard) {
        console.log("update", requestCard);
    }

    function handleDelete(requestCard) {
        console.log("delete", requestCard);
    }

    let {id, requester, startDt, endDt, dtCreated, reason, status} = oneRequest;

    //Format Request Data
    startDt = cleanUpIncomingDate(startDt);
    endDt = cleanUpIncomingDate(endDt);
    dtCreated = cleanUpIncomingDate(dtCreated);
    reason = cleanUpIncomingText(reason);
    status = cleanUpIncomingText(status);

    return (
        <>
            <Link to={`/${currentRoleURLParam}/requests/${id}#${id}`}>
                <RowCard id={id} onClick={() => handleMoreClick(oneRequest)}>
                    <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
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
              <b>
                Requester {requester.customUser.username}
                  {/*{requestCard.firstName} {requestCard.lastName}*/}
              </b>
            </span>
                    </div>
                    Request #{id}
                    <span>{reason}</span>
                    <span>
            {startDt} - {endDt}
          </span>
                    <div
                        style={{
                            display: "flex",
                            justifySelf: "end",
                            height: "100%",
                            alignItems: "center",
                        }}
                    >
                        {Number(requestIndex) !== id ? (
                            <img src="/MoreInfo.png" alt="..." height="3px"/>
                        ) : (
                            <img src="/arrow-down.png" alt="..." height="8px"/>
                        )}
                    </div>
                </RowCard>
            </Link>
            {Number(requestIndex) === id && (
                <div style={{display: "flex", gap: "10px"}}>
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
              {/*<b>Submitted on:</b> {requestCard.submittedOn}*/}
                <b>Created on:</b> {dtCreated}
            </span>
                        <span>
              <b>Status:</b> {status}
            </span>
                        {/*<span>*/}
                        {/*  <b>Comment: </b>*/}
                        {/*  {requestCard.comment}*/}
                        {/*</span>*/}
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
                        {(status === "Pending" && !isManagerView) && (
                            <ButtonRed
                                iconURL={"/cross-deny.png"}
                                buttonText={"Delete"}
                                onClick={() => handleDelete(oneRequest)}
                            />
                        )}
                        {(status === "Pending" && !isManagerView) && (
                            <ButtonGreen
                                iconURL={"/tick-circle.png"}
                                buttonText={"Update"}
                                onClick={() => handleUpdate(oneRequest)}
                            />
                        )}

                        {(status === "Pending" && isManagerView) && (
                            <ButtonRed
                                iconURL={"/cross-deny.png"}
                                buttonText={"Deny"}
                                onClick={() => handleDelete(oneRequest)}
                            />
                        )}
                        {(status === "Pending" && isManagerView) && (
                            <ButtonGreen
                                iconURL={"/tick-circle.png"}
                                buttonText={"Approve"}
                                onClick={() => handleUpdate(oneRequest)}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
