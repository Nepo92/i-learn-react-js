import classes from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  return (
    <NavLink key={props.index} to={"/messages/" + props.id} className={classes.socialNetwork__dialogItem}>
      <img className={classes.dialogItem__img} src="/" alt="avatar"/>
      <div className={classes.dialogItem__info}>
        <p className={classes.dialogItem__from}>
          {props.name}
        </p>
        <p className={classes.dialogItem__status}>
          Последнее сообщение
        </p>
      </div>
    </NavLink>
  )
};

export default Dialog;
