import {useDispatch} from 'react-redux';
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

const Header = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(changeView(event.target.value));
    };

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
