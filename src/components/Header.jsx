import { useDispatch } from 'react-redux';
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
            <CompanyLogo>
                <img src={logo} alt="Constructor Academy Logo"/>
            </CompanyLogo>
            <CompanyName>Constructor Academy</CompanyName>
            <DropdownView>
                <select onChange={handleChange}>
                    <option value="company_admin">Company View</option>
                    <option value="manager_view">Manager View</option>
                    <option value="employee_view">Employee View</option>
                </select>
            </DropdownView>
            <Bell>
                <img className="bell" src={bell} alt="Bell"/>
                <img className="profile-pic" src={profile} alt="Profile"/>
            </Bell>
        </HeaderContainer>
    );
};

    export default Header;
