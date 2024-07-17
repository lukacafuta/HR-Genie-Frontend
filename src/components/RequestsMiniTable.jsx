import RequestMinitableItem from "./RequestMinitableItem.jsx";

export default function RequestMiniTable({name, type, requests}) {

    const filteredRequests = requests.filter(request => request.type === type);
    console.log("minitable comp: ", filteredRequests)


    return (
        <div>
            <h3>{name}</h3>
            {filteredRequests.map((request, i) => <RequestMinitableItem key={i} request={request}/>)}
        </div>
    );
}


