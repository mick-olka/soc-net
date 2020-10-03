import React from "react";

import s from "./Dialogs.module.css";

import TextareaAutosize from "react-textarea-autosize";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
            <DialogItem name={d.name} id={d.id} />
          ));

  let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />);


  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    props.updateNewMessageBody(newMessageElement.current.value);
  }

  let sendMessage =()=>{
    props.sendMessage();
  }

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialogsHeader}>
            <h3>DIALOGS</h3>
          </div>

          {dialogsElements}
        </div>

        <div className={s.messages}>
          <div className={s.dialogsHeader}>
            <h3>NAME</h3>
          </div>

          {messagesElements}
          <div className={s.textInputBlock}>
            <TextareaAutosize
              maxRows="3"
              className={s.textInput}
              onChange={onMessageChange}
              type="text"
              ref={newMessageElement}
              value={props.dialogsPage.newMessageBody}
              placeholder='Message'
            />
            <button onClick={sendMessage}>Sent</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
