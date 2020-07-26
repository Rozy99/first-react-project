import React from "react";
import s from "./FriendList.module.css";

const FriendList = (props) => {
  
  return (
    <div>
      <div className={s.friend}>{props.name}</div>
    </div>
  );
};

export default FriendList;
