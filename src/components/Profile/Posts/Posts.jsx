import React from 'react'
import AddPostForm from './Post/AddPostForm/AddPostForm';
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = React.memo(props => {

    const addPost = (values) => {
        props.addPost(values.newPostText);
    }

    let posts = props.posts.map( (post) => <Post key={post.id} post={post} />)

    return (
        <div className={s.posts}>
            <span className={s.postsTitle}>My posts</span>
            <AddPostForm onSubmit={addPost} />
            <div>
                {posts}
            </div>
        </div>
    );
});

export default Posts;