import styled from "styled-components";

export const RequestMiniTableAreaStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 2rem;


`;

export const RequestsMinitableStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MiniTableItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;

    .row, .depstat {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .date {
            display: flex;
            justify-content: flex-end;
        }
    }


`;