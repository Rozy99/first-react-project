import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {

  let dialogsElements = props.dialog.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialog.messages.map((m) => (
    <Message img={m.img} message={m.message} />
  ));
  
  return (
    <div>
      <div className={`${s.dialogs} d_flex`}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={`${s.messages} d_flex f_d__column`}>
          {messagesElements}
        </div>
      </div>
      <SendMessage newMessageText={props.dialog.newMessageText} dispatch={props.dispatch} />
    </div>
  );
};

export default Dialogs;
