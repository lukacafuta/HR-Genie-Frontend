import RequestMinitableItem from "./RequestMinitableItem.jsx";
import {RequestsMinitableStyled} from "../styles/miniTableStyles.js";
import ButtonBrand from "./buttons/ButtonBrand.jsx";

export default function RequestMiniTable({name, type, requests}) {

    const filteredRequests = requests.filter(request => request.reason === type);
    console.log(type, "minitable comp: ", requests)


    return (
        <RequestsMinitableStyled>
            <div><h3>{name}</h3>
                {filteredRequests.map((request, i) => <RequestMinitableItem key={i} request={request}/>)}</div>
            <ButtonBrand buttonText={'View all'} iconURL={''}/>
        </RequestsMinitableStyled>
    );
}


