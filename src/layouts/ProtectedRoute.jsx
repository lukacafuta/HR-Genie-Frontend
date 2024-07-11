import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'

export default function ProtectedRoute({allowedRoles}) {

    const isLoggedIn = useSelector((state) => state.user.accessToken)
    const userRole = useSelector((state) => state.user.role)
    console.log("role: ", userRole)

    if (!isLoggedIn) {
        return <Navigate to='/login'/>;
    } else if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to='/employee'/>;
    }

    return <Outlet/>;


}
