import {AccountMenuContainer} from "../styles/headerStyles.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../store/slices/UserSlice.jsx";


export default function AccountMenu() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogoutClick = () => {
        localStorage.removeItem("accessToken");
        dispatch(logout());
        navigate("/login");
    }


    return (
        <AccountMenuContainer>
            <div onClick={() => handleLogoutClick()}>Logout</div>
        </AccountMenuContainer>
    );
}