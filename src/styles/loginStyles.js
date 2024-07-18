import styled from "styled-components";


export const LoginPageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-bottom: 4rem;
`;
export const LoginContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    padding: 0 2rem 4rem 2rem;
    max-width: 500px;
    border-radius: var(--border-radius-large);
    box-shadow: var(--inputs-shadow);

    img {
        margin-top: -4rem;
        margin-bottom: 1rem;
    }

    p {
        color: var(--neutral-neutral-500-day, #7E7E8F);
        text-align: center;
        margin-bottom: 4rem;
        /* Text */
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 114.286% */
    }

    div {
        margin-bottom: 2rem;
    }

    label {
        font-size: 14px;
        margin-bottom: 0.5rem;
        font-weight: normal;
    }

    input {
        border-radius: 8px;
        border: 1px solid var(--neutral-neutral-border-day, #E8EDF2);
        background: var(--neutral-neutral-bg-day, #FFF);
        display: flex;
        width: 360px;
        height: 48px;
        padding: 15px;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    input::placeholder {
        font-size: 14px;
        margin-bottom: 0.5rem;
        font-weight: 300;
        color: var(--light-grey);
    }
`;