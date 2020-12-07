import React from 'react'
import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.post}>
            <div className={s.content}>
                {props.post.content}
            </div>
            <div className={s.likes}>
                likes: {props.post.likesCount}
            </div>
        </div>
    );
}

export default Post;