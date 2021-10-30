import classes from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img className={classes.post__img} src="/" alt=""/>
            <p className={classes.post__text}>
                {props.message}
            </p>
        </div>
    )
}

export default Post;
