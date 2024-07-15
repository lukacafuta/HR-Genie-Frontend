import styled from "styled-components";

export const RowCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RowCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  height: 50px;
  padding: 20px;
  background-color: white;
  border-radius: var(--border-radius-large);
  border: solid 1px var(--light-grey);
  width: 100%;
  align-content: center;
  align-items: center;
  justify-items: left;
  align-self: center;
`;
