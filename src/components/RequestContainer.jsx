import { useDispatch, useSelector } from "react-redux";
import RequestCard from "./RequestCard";
import { useEffect, useState } from "react";
import { loadRequests } from "../store/slices/RequestSlice";
import { RowCardContainer } from "../styles/cardStyles.js";
import { api } from "../common/api.js";

export default function RequestContainer({ refresh }) {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.view.view);
  const requestList = useSelector((state) => state.request.requestList);

  const accessToken = useSelector((state) => state.user.accessToken);
  const [hasFetchedAbsences, setHasFetchedAbsences] = useState(false);

  const fetchRequests = () => {
    const storeToken = accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${storeToken}`,
      },
    };

    try {
      // Is the user in Manager or Employee View
      let endpointForAbsences =
        view === "manager" ? "/absences/" : "/absences/me/";
      console.log("yep i am here");
      api.get(endpointForAbsences, config).then((res) => {
        console.log("API call successful", res.data);
        let requestData = res.data;
        dispatch(loadRequests(requestData));
      });
    } catch (error) {
      console.log("nope");
      console.error(error);
    }
  };

  // created to refresh the requests

  useEffect(() => {
    fetchRequests();
  }, [dispatch, refresh]);

  return (
    <>
      <RowCardContainer>
        {requestList.map((oneRequest) => (
          <RequestCard key={oneRequest.id} oneRequest={oneRequest} />
        ))}
      </RowCardContainer>
    </>
  );
}
