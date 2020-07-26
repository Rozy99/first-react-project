import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src={require('./../../../../assets/img/post-avatar.jpg')}
        alt='post avatar'
      />
      {props.text}
        <div>
          <p>like <span>{props.likes}</span></p>
        </div>
    </div>
  );
};

export default Post;
