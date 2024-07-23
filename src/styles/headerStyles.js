import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: --light-grey: #D0D0DA;
    border-bottom: 2px solid var(--light-grey);
    margin-bottom: 1rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }
`;

export const CompanyLogo = styled.div`
    display: flex;
    align-items: center;
    width: 216px;

    img {
        height: 70px;
        width: 250px;
        object-fit: contain;
        border-radius: var(--border-radius-large);
    }
`;

export const CompanyName = styled.span`
    font-size: 36px;
    font-weight: 700;
    margin-left: 10px;
    color: var(--black);
`;

export const DropdownView = styled.div`

    select {
        padding: 1rem 2rem;
        border-radius: var(--border-radius-small);
        border: var(--border-style);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 114.286% */
        color: var(--mid-grey);
        display: flex;
        align-items: center;
    }
`;

export const Bell = styled.div`
    display: flex;

    .bell {
        width: 24px;
        height: 24px;
        cursor: pointer;
        color: var(--black);
    }

    .profile-pic {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            transform: scale(0.97);
            transition: all 0.1s ease-in-out;
            cursor: pointer;
            color: var(--brand-color);
        }
    }
`;

export const AccountMenuContainer = styled.div`
    position: absolute;
    top: 70px;
    right: 50px;
    background-color: var(--white);
    border-radius: var(--border-radius-small);
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 100;
    box-shadow: var(--inputs-shadow);

    div {
        cursor: pointer;

        &:hover {
            transform: scale(0.97);
            transition: all 0.1s ease-in-out;
            cursor: pointer;
            color: var(--brand-color);
        }
    }
`;