import {MiniTableItemStyled} from "../styles/miniTableStyles.js";

export default function RequestMinitableItem({request}) {
    return (
        <MiniTableItemStyled>

            <h4>{request.name}</h4>
            <p>{request.type}</p>
            <p>{request.date}</p>

        </MiniTableItemStyled>
    );
}