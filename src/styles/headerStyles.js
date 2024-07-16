import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: --light-grey: #D0D0DA;
    border-bottom: 2px solid var(--light-grey);
`;

export const CompanyLogo = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 70px;
        width: 250px;
        border-radius: var(--border-radius-large);
    }
`;

export const CompanyName = styled.span`
    font-size: 36px;
    font-weight: 700; 
    margin-left: 10px; 
    color: #000000;
    font-family: 'Arial Black';
`;

export const DropdownView = styled.div`

    select {
        padding: 10px 35px;
        border-radius: var(--border-radius-small);
        border: var(--border-style);
        font-family: 'Arial';
        color: #333;
        font-size: 20px;
        display: flex;
        align-items: center;
    }
`;

export const Bell = styled.div`
    display: flex;
    align-items: center;

    .bell {
        width: 32px;
        height: 32px;
        font-size: 30px;
        margin-right: 40px;
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

