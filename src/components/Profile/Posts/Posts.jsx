import React from 'react';
import classes from "./Posts.module.scss";
import Post from "./Post/Post.jsx";
import NewPost from './NewPost/NewPost.jsx';

const Posts = (props) => {
    const postItems = props.posts.reverse().map((item) => {
        return <Post message={item.message}/>
    });

    return (
        <div className={classes.socialNetwork__posts}>
            <NewPost changePost={props.changePost} newPostText={props.newPostText} addPost={props.addPost} />
            <div className={classes.posts__wrapper}>
                {postItems}
            </div>
        </div>
    )
}

export default Posts;
