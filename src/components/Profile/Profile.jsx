import React from 'react'
import Preloader from '../common/Preloader/Preloader';
import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'
import userPhoto from '../../assets/images/user-photo.png'
import Status from './Status/Status';

function Profile(props) {
    if(!props.profile)
        return <Preloader />;
        
    return (
        <div>
            <div className={s.profileImage} >
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg" alt="img" />
            </div>
            <div className={s.profileInfo}>
                <img className={s.avatar} src={props.profile.photos.large || userPhoto} alt="ava" />
                <div className={s.userInfo}>
                    <div className={s.userName}>
                        {props.profile.fullName}
                    </div>
                    <div>{props.profile.aboutMe}</div>
                    <Status status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
            <div className={s.contacts}>

            </div>
            <PostsContainer />
        </div>
    );
}

export default Profile;