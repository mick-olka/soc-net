import React from "react";
import { Redirect } from "react-router-dom";

import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import ReduxNewMessageForm from "./NewMessageForm";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
            <DialogItem name={d.name} id={d.id} key={d.id} />
          ));

  let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key={m.id} />);

  const onSubmit = (formData) => {
      props.sendMessageCreator(formData.messageText);
      formData.messageText="";
  }
  //
  // let onMessageChange = () => {
  //   props.setNewMessageBodyCreator('newMessageElement.current.value');
  // }
  //
  // let sendMessage =()=>{
  //   props.sendMessageCreator();
  // }

  if (props.isAuth === false) return <Redirect to={"/login"} />
  //alert(props.isAuth);

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
          < ReduxNewMessageForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
