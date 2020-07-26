import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer';

const MyPosts = (props) => {

  let newPosts = props.posts.map((p) => (
    <Post text={p.text} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.user_posts}>
      <div className={s.post_block}>
        <p>My posts</p>
        <label>
          <input type="text" placeholder="Your news" ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        </label>
      </div>
      <div className={`${"btn_bg"} ${s.btn_send}`}>
        <button className="btn" onClick={addNewPost}>SEND</button>
      </div>
      <div className={s.posts}>{newPosts}</div>
    </div>
  );
};

export default MyPosts;
