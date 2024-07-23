import RequestMinitableItem from "./RequestMinitableItem.jsx";
import {RequestsMinitableStyled} from "../styles/miniTableStyles.js";
import ButtonBrand from "./buttons/ButtonBrand.jsx";

export default function RequestMiniTable({name, type, requests}) {

    const isTrainingRequestlist = requests[0].hasOwnProperty("trainingUrl")
    // console.log(isTrainingRequestlist)
    // const filteredRequests = requests.filter(request => request.reason === type);
    // console.log(type, "minitable comp: ", requests)

    let filteredRequests

    if (isTrainingRequestlist) {
        filteredRequests = requests.filter(request => request.trainingUrl);
        console.log(filteredRequests)
    } else {
        filteredRequests = requests.filter(request => request.reason === type);
    }


    return (
        <RequestsMinitableStyled>
            <div><h3>{name}</h3>
                {filteredRequests.map((request, i) => <RequestMinitableItem key={i} isTraining={isTrainingRequestlist} request={request}/>)}
            </div>
            <ButtonBrand buttonText={'View all'} iconURL={''}/>
        </RequestsMinitableStyled>
    );
}


