import {MiniTableItemStyled} from "../styles/miniTableStyles.js";
import {Link} from "react-router-dom";

export default function RequestMinitableItem({request}) {
    return (
        <Link to={`/manager/requests/${request.id}#${request.id}`}>
            <MiniTableItemStyled id={request.id}>
                <div className="row">
                    <div className="requester"> {request.firstName} {request.lastName}</div>
                    <div className="date"><p>{request.fromDate} - {request.toDate}</p></div>
                </div>
                <div className="depstat">
                    <p>{request.team}</p>
                    <p>{request.status}</p>
                </div>

            </MiniTableItemStyled>
        </Link>
    );
}