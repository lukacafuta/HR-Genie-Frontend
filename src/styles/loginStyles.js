import styled from "styled-components";

export const LoginContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    padding: 0 2rem 4rem 2rem;

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
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 114.286% */
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
        gap: 10px;
    }
`;