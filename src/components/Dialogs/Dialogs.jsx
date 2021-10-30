import classes from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog.jsx';

const Dialogs = (props) => {
  const dialogItems = props.messages.dialogs.map((item, index) => {
    return <Dialog name={item.name} id={item.id} index={index}/>
  });

  return (
    <div className={classes.socialNetwork__dialogs}>
      {dialogItems}
    </div>
  )
};

export default Dialogs;
