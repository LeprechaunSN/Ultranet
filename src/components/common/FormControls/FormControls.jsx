import React from "react";
import s from "./FormControls.module.css";
import errorImage from "../../../assets/images/error.png"

export function Textarea({input, meta, ...props}) {
    return (
        <div className={s.some}>
            <textarea className={s.textarea} {...props} />
            <div className={s.error}>
                <img src={errorImage} alt="" />
                <span>Required field</span>
            </div>
        </div>
    )
}