import classes from "./Profile.module.scss";
import Posts from "./Posts/Posts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div className={classes.socialNetwork__right}>
            <ProfileInfo />
            <Posts newPostText={props.profile.newPostText} posts={props.profile.posts} addPost={props.addPost} changePost={props.changePost} />
        </div>
    )
}

export default Profile;
