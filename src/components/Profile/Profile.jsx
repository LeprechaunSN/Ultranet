import React from 'react'
import Posts from './Posts/Posts'
import s from './Profile.module.css'

function Profile(props) {
    return (
        <div>
            <div className={s.profileImage} >
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg" alt="img"/>
            </div>
            <div className={s.avaAndDescription}>
                <img className={s.avatar} src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg" alt="ava"/>
                <div className={s.userName}>
                    Sveta Nikonova
                </div>
            </div>
            <Posts posts={props.posts}  />
        </div>
    );
}

export default Profile;