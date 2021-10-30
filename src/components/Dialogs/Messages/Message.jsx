import classes from './Message.module.scss';
import MessagesList from './MessagesList/MessagesList.jsx';
import NewMessage from './NewMessage/NewMessage';

const Messages = (props) => {
  return (
    <div className={classes.socialNetwork__messages}>
      <MessagesList />
      <NewMessage />
    </div>
  )
}

export default Messages;
