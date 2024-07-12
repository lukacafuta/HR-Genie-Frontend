import React from 'react';

import {
    BtnRed
} from "./ButtonsPrimary.js";

export default function ButtonRed(props) {

return (
        <>
        <BtnRed><img src={props.iconURL} alt="icon"/> {props.buttonText}</BtnRed>
        </>

)
}



