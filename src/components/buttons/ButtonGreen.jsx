import React from 'react';

import {
    BtnGreen,
} from "./ButtonsPrimary.js";

export default function ButtonGreen(props) {

return (
        <>
        <BtnGreen><img src={props.iconURL} alt="icon"/> {props.buttonText}</BtnGreen>
        </>

)
}



