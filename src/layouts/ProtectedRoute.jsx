import {useDispatch, useSelector} from 'react-redux'
import {Navigate, Outlet, useNavigate} from 'react-router-dom'
import {useEffect} from "react";
import {api} from "../common/api.js";
import {login} from "../store/slices/UserSlice.jsx";

export default function ProtectedRoute({allowedRoles}) {

    const isLoggedIn = useSelector((state) => state.user.accessToken)
    const userRole = useSelector((state) => state.user.role)
    // console.log("role: ", userRole)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const localToken = localStorage.getItem("accessToken");
        if (localToken) {
            console.log("Token in storage");
            api.post("auth/token/verify/", {token: localToken})
                .then(dispatch(login(localToken)))
                .catch(() => {
                    localStorage.removeItem("accessToken");
                    navigate("/login");
                    console.log("wrong token");
                });
        } else {
            console.log("No token in storage");
            navigate("/login");
        }
    }, []);

    if (!isLoggedIn) {
        return <Navigate to='/login'/>;
    } else if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to='/employee'/>;
    }

    return <Outlet/>;


}
