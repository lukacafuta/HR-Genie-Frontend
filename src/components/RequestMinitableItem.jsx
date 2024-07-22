import {MiniTableItemStyled} from "../styles/miniTableStyles.js";
import {Link} from "react-router-dom";

export default function RequestMinitableItem({request}) {

    const formatDateTime = (dt) => {
        const date = new Date(dt);
        const dayMonth = date.toLocaleDateString('en-GB', {day: '2-digit', month: 'short'});
        const time = date.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'});
        return `${dayMonth}, ${time}`

    }


    return (
        <Link to={`/manager/requests/${request.id}#${request.id}`}>
            <MiniTableItemStyled id={request.id}>
                <div className="row">
                    <div className="requester"> {request.requester} {request.requester}</div>
                    <div className="date"><p>{formatDateTime(request.startDt)} - {formatDateTime(request.endDt)}</p></div>
                </div>
                <div className="depstat">
                    <p>{`Departemento ${request.team}`}</p>
                    <p>{request.status}</p>
                </div>

            </MiniTableItemStyled>
        </Link>
    );
}