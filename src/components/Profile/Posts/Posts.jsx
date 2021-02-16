import React from 'react'
import AddPostForm from './Post/AddPostForm/AddPostForm';
import Post from './Post/Post'
import s from './Posts.module.css'

function Posts(props) {

    const addPost = (values) => {
        props.addPost(values.newPostText);
    }

    let posts = props.posts.map( (post) => <Post post={post} />)

    return (
        <div className={s.posts}>
            <span className={s.postsTitle}>My posts</span>
            <AddPostForm onSubmit={addPost} />
            <div>
                {posts}
            </div>
        </div>
    );
}

export default Posts;