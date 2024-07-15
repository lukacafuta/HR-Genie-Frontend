import { useDispatch, useSelector } from "react-redux";
import RequestCard from "./RequestCard";
import { useEffect } from "react";
import { initialLoadLocalStorage } from "../store/slices/RequestSlice";
import { RowCardContainer } from "../styles/cardStyles.js";

export default function RequestContainer() {
  const dispatch = useDispatch();

  //while there is no data
  const initialRequestList = useSelector((state) => state.request.requestList);

  useEffect(() => {
    const storedRequestList = JSON.parse(localStorage.getItem("requestList"));
    if (storedRequestList && storedRequestList.length > 0) {
      dispatch(initialLoadLocalStorage(storedRequestList));
    } else {
      localStorage.setItem("requestList", JSON.stringify(initialRequestList));
    }
  }, [dispatch]);

  const requestList = useSelector((state) => state.request.requestList);

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
