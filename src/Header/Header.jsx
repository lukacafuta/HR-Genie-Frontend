import styled from 'styled-components';
import {FaBell} from 'react-icons/fa';
import logo from '../assets/channels4_profile1.jpg';
import profile from '../assets/img_4.png';

const HeaderContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: var(--white);
    border-bottom: 1px solid var(--light-grey);
`;

const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 80px;
        border-radius: var(--border-radius-large);
    }
`;

const CompanyName = styled.div`
    flex: 1;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: var(--black);
    font-family: Calibri;
`;

const Dropdown = styled.div`
    position: relative;
    margin-right: 40px;

    select {
        padding: 10px 30px;
        border-radius: var(--border-radius-small);
        border: var(--border-style);
        font-family: var(--font-family);
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;

    .icon {
        font-size: 20px;
        margin-right: 30px;
        cursor: pointer;
        color: var(--black);
    }

    .profile-pic {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <img src={logo} alt="Constructor Academy Logo"/>
            </Logo>
            <CompanyName>Constructor Academy</CompanyName>
            <Dropdown>
                <select>
                    <option>Company View</option>
                    <option>Manager View</option>
                    <option>Employee View</option>
                </select>
            </Dropdown>
            <Icons>
                <FaBell className="icon"/>
                <img className="profile-pic" src={profile} alt="Profile"/>
            </Icons>
        </HeaderContainer>
    );
};

export default Header;
