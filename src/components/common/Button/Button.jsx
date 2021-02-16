import React from "react";
import s from "./Button.module.css"

function Button(props) {
    return (
        <button onClick={props.onClick} className={s.button}>{props.text}</button>
    );
}

export default Button;