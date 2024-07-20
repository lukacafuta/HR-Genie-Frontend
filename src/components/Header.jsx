import {useDispatch, useSelector} from 'react-redux';
import logo from '../../public/logo.jpg';
import profile from '../../public/profile.png';
import bell from '../../public/bell.png';
import {
    HeaderContainer,
    CompanyName,
    Bell,
    CompanyLogo,
    DropdownView
} from '../styles/headerStyles';
import {changeView} from "../store/slices/ViewSlice.jsx";
import {useEffect} from "react";
import {api} from "../common/api.js";
import {setIsManager, setUserObject} from "../store/slices/UserSlice.jsx";
import {Navigate, useNavigate} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (event) => {
        dispatch(changeView(event.target.value));
        switch (event.target.value) {
            case "company_admin":
                console.log(event.target.value);
                navigate("/company")
                break;
            case "manager":
                console.log(event.target.value);
                navigate("/manager")
                break;
            case "employee":
                console.log(event.target.value);
                navigate("/employee")
                break;
            default:
                console.log("No View Selected")
        }
    };

    const user = useSelector((state) => state.user.userObject);
    // console.log("loc user:  ", user)

    const isManager = useSelector((state) => state.user.managers);
    // console.log("loc man: ", isManager)

    const token = localStorage.getItem("accessToken");


    useEffect(() => {
        if (user.length < 1) {
            api.setAuthToken(token);
            api("/users/me/")
                .then((res) => {
                    // console.log("fetched usr: ", res.data[0]);
                    dispatch(setUserObject(res.data[0]));
                }).catch((err) => {
                console.log(err);
            })
        }
        if (isManager === undefined) {
            api.setAuthToken(token);
            api("/users/approvers/")
                .then((res) => {
                    // console.log("fetched man: ", res.data);
                    dispatch(setIsManager(res.data));
                }).catch((err) => {
                console.log(err);
            })
        } else {
            console.log("no man fetch")
        }
    }, []);


    return (
        <HeaderContainer>
            <div>
                <CompanyLogo>
                    <img src={logo} alt="Constructor Academy Logo"/>
                </CompanyLogo>
                <h1>Constructor Academy</h1>
            </div>
            <div>
                <DropdownView>
                    <select onChange={handleChange}>
                        <option value="company_admin">Company View</option>
                        <option value="manager">Manager View</option>
                        <option value="employee">Employee View</option>
                    </select>
                </DropdownView>
                <Bell>
                    <img className="bell" src={bell} alt="Bell"/>
                    <img className="profile-pic" src={profile} alt="Profile"/>
                </Bell>
            </div>
        </HeaderContainer>
    );
};

export default Header;
