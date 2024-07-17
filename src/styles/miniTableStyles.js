import styled from "styled-components";

export const RequestMiniTableAreaStyled = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const MiniTableItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;