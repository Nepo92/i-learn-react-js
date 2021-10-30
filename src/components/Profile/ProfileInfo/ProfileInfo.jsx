import classes from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {
  return (
    <div className={classes.socialNetwork__info}>
                <img className={classes.socialNetwork__avatar} src="/" alt="avatar"/>
                <div className={classes.socialNetwork__profileInfo}>
                    <p className={classes.socialNetwork__name}>Имя</p>
                    <p className={classes.socialNetwork__status}>
                        <span className={classes.socialNetwork__statusText}>
                            Статус
                        </span>
                        <span className={classes.socialNetwork__edit}></span>
                    </p>
                </div>
            </div>
  )
}

export default ProfileInfo;