import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={`${s.message} d_flex a_items__center`}>
      <img src={require(`./../../../assets/img/${props.img}`)} alt="chat-avatar" />
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
