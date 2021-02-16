import React from "react"
import userPhoto from "../../assets/images/user-photo.png"
import Button from "../common/Button/Button"
import s from "./AuthData.module.css"

export default function AuthData(props) {
    return (
        <div className={s.container}>
            <div className={s.authData}>
                <img className={s.avatar} src={props.photo || userPhoto} alt="ava" />
                <span className={s.userName}>{props.login}</span>
            </div>
            <Button text="logout" onClick={props.logout}/>
        </div>
    )
}