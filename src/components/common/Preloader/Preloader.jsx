import React from "react";
import s from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.gif";

function Preloader(props) {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="Загрузка..."/>
        </div>
    );
}

export default Preloader;