import React from 'react';

import {
    BtnBrand
} from "./ButtonsPrimary.js";

export default function ButtonBrand(props) {

return (
        <>
        <BtnBrand><img src={props.iconURL} alt="icon"/> {props.buttonText}</BtnBrand>
        </>

)
}



