import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'

function Posts(props) {

    let posts = props.posts.map( (post) => <Post post={post} />)

    return (
        <div className={s.posts}>
            <span className={s.postsTitle}>My posts</span>
            <div className={s.addPost}>
                <textarea rows="4" className={s.postContent}>Your news...</textarea>
                <button className={s.addPostButton}>Send</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
}

export default Posts;