import { useDispatch, useSelector } from "react-redux";
import { api } from "../common/api";
import { setUserKPIs } from "../store/slices/UserSlice.jsx";

export default function useGenieAPI() {
  const userKPIsURL = "/kpi/yearly/me/"; //POST

  const storeToken = useSelector((state) => state.user.accessToken);

  const dispatch = useDispatch();

  const fetchUserKPIs = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${storeToken}`,
      },
    };

    try {
      const response = await api.get(userKPIsURL, config);
      console.log("Fetch User KPIs Successful");
      console.log(response.data[0]);
      dispatch(setUserKPIs(response.data[0]));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchUserKPIs,
  };
}
