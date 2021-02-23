import Button from "../common/Button/Button";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import s from "./Users.module.css";

function Users(props) {

    const users = props.users.map(u => <User id={u.id} 
                                             key={u.id}
                                             name={u.name} 
                                             photo={u.photos.small} 
                                             followed={u.followed}
                                             follow={props.follow}
                                             unfollow={props.unfollow}
                                        />);
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return (
        <div>
            <div className={s.users}>{ users }</div>
            { props.isFetching && <Preloader />}
            <div className={s.showMoreButton}>
                { props.currentPage < pagesCount && <Button onClick={props.switchToNextPage} text="Show more" /> }
            </div>
        </div>
    );
}

export default Users;