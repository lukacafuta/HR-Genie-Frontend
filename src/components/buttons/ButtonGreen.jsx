import React from 'react';

import {
    BtnGreen,
} from "../../styles/buttonStyles.js";

export default function ButtonGreen(props) {

return (
        <>
        <BtnGreen><img src={props.iconURL} alt="icon"/> {props.buttonText}</BtnGreen>
        </>

)
}



