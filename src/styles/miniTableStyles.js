import styled from "styled-components";

export const RequestMiniTableAreaStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2rem;


`;

export const RequestsMinitableStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: var(--border-radius-large);
    box-shadow: var(--inputs-shadow);

    h3 {
        margin-bottom: 1rem;
    }

    button {
        align-self: flex-end;

    }
`;

export const MiniTableItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    margin: 1rem 0;
    padding: 0.5rem;
    //border: 1px solid #ccc;
    //border-radius: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(0.97);
    }

    .row, .depstat {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 12px;

        .date {
            display: flex;
            justify-content: flex-end;
            font-weight: 500;

        }
    }

    .depstat {
        color: var(--dark-grey);
        font-size: 10px;
    }


`;