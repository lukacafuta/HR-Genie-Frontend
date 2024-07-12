import styled from "styled-components";


export const BtnPrimary = styled.button`
    display: flex;
    gap: 7px;
    height: 50px;
    background-color: var(--brand-color);
    color: white;
    border-radius: var(--border-radius-large);
    border: none;
    width: max-content;
    align-items: center;

    `

export const BtnBrand = styled(BtnPrimary)`
    background-color: var(--brand-color);
    `

export const BtnGreen = styled(BtnPrimary)`
    background-color: var(--green-button-color);
    `

export const BtnRed = styled(BtnPrimary)`
    background-color: var(--red-button-color);
    `