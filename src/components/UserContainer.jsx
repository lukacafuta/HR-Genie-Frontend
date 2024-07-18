import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initialLoadLocalStorage } from "../store/slices/UserSlice";
import { RowCardContainer } from "../styles/cardStyles.js";
import UserCard from "./UserCard.jsx";

export default function UserContainer() {
  const dispatch = useDispatch();

  //while there is no data
  const initialUserList = useSelector((state) => state.user.userList);

  useEffect(() => {
    const storedUserList = JSON.parse(localStorage.getItem("userList"));
    if (storedUserList && storedUserList.length > 0) {
      dispatch(initialLoadLocalStorage(storedUserList));
    } else {
      localStorage.setItem("userList", JSON.stringify(initialUserList));
    }
  }, [dispatch]);

  const userList = useSelector((state) => state.user.userList);

  return (
    <>
      <RowCardContainer>
        {userList.map((oneUser) => (
          <UserCard key={oneUser.id} oneUser={oneUser} />
        ))}
      </RowCardContainer>
    </>
  );
}
