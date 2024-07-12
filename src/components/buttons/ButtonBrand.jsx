import React from 'react';

import {
    BtnBrand
} from "../../styles/buttonStyles.js";

export default function ButtonBrand(props) {

return (
        <>
        <BtnBrand><img src={props.iconURL} alt="icon"/> {props.buttonText}</BtnBrand>
        </>

)
}



