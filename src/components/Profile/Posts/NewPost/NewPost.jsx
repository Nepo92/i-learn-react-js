import classes from './NewPost.module.scss';
import React from 'react';

const NewPost = (props) => {

  const setTextAreaValue = () => {
      return props.newPostText ? props.newPostText : '';
  };

  const textArea = React.createRef();

  const postAdd = (e) => {
    props.addPost(); 
  };

  const changePost = () => {
    const text = textArea.current.value;
    props.changePost(text);
  }

  return (
    <div className={classes.posts__newMessage}>
      <textarea ref={textArea} value={setTextAreaValue()} onChange={changePost} className={classes.posts__textarea}></textarea>
      <button onClick={postAdd} className={classes.posts__button}>Опубликовать</button>
    </div>
  )
}

export default NewPost;