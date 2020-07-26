import React from "react";
import s from "./SendMessage.module.css";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../../redux/dialogs-reducer';

const SendMessage = (props) => {

  let addNewMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (e) => {
    let message = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(message));
  }

  return (
    <div className={`${s.sendMessage} d_flex`}>
      <textarea name="" id="" cols="30" rows="5" value={props.newMessageText} onChange={onMessageChange} />
      <button onClick={addNewMessage}>SEND</button>
    </div>
  );
};

export default SendMessage;
