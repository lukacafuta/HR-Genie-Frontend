import {MiniTableItemStyled} from "../styles/miniTableStyles.js";

export default function RequestMinitableItem({request}) {
    return (
        <MiniTableItemStyled>
            <div className="row">
                <div className="requester"> {request.firstName} {request.lastName}</div>
                <div className="date"><p>{request.fromDate}</p><p>{request.toDate}</p></div>
            </div>
            <div className="depstat">
                <p>{request.team}</p>
                <p>{request.status}</p>
            </div>

        </MiniTableItemStyled>
    );
}