import s from "./User.module.css";
import userPhoto from "../../../assets/images/user-photo.png";
import Button from "../../common/Button/Button";
import { NavLink } from "react-router-dom";

function User(props) {
    return (
        <div className={s.user}>
            <NavLink to={"/profile/" + props.id} className={s.link}>
                <img className={s.avatar} src={props.photo || userPhoto} alt="" />
                <div className={s.name}>{props.name}</div>
            </NavLink>
            <Button onClick={props.followed ? () => props.unfollow(props.id) : 
                                              () => props.follow(props.id) } 
                    text={props.followed ? "Unfollow" : "Follow"} 
            />
        </div>
    );
}

export default User;