import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const CompanyFieldsStyled = styled.div`
    display: grid;
    width: 100%;
    padding: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 8rem;

    h3 {
        margin-bottom: 0.5rem;
        font-weight: 500
    }

    input[type="text"] {
        display: flex;
        width: 360px;
        height: 48px;
        padding: 16px 0px 16px 13px;
        justify-content: flex-end;
        align-items: center;
        border-radius: 8px;
        border: 1px solid var(--neutral-neutral-border-day, #E8EDF2);
        background: var(--neutral-neutral-bg-day, #FFF);
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
    }

`;

export const WorkingHoursStyled = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 0.5rem;

        p {
            width: 50px;
        }

        input[type="time"] {
            display: flex;
            width: 100px;
            height: 48px;
            padding: 16px 0px 16px 13px;
            justify-content: flex-end;
            align-items: center;
            border-radius: 8px;
            border: 1px solid var(--neutral-neutral-border-day, #E8EDF2);
            background: var(--neutral-neutral-bg-day, #FFF);
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
        }
    }

`;
export const PublicHolidayContainerStyled = styled.div`
    width: 100%;
    padding: 0 2rem;

`;
export const PublicHolidaysHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;
export const PublicHolidaysGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1rem;
    column-gap: 4rem;
    row-gap: 1rem;


`;