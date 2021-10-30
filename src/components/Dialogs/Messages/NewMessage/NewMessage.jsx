import classes from './NewMessage.module.scss';

const NewMessage = () => {
  return (
    <div className={classes.newMessage}>
      <textarea className={classes.newMessage__textarea}></textarea>
      <button className={classes.newMessage__send} type="button">Отправить</button>
    </div>
  )
}

export default NewMessage;
