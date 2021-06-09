import React from "react";
import s from "./MyPosts.module.css";
import Post from "../../Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let postElements = props.posts.map((i) => (
    <Post likes={i.likes} message={i.message} key={i.id} />
  ));

  let onPostChange = () => {
    props.onPostChange(newPostElement.current.value);
  };

  let addPost = () => {
    props.addPost();
  };

  return (
    <div className={s.content}>
      <div className={s.write_post}>
        <textarea
          className="newPostTextarea"
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button className={s.addPostButton} onClick={addPost}>
          Add post
        </button>
      </div>

      <div className={s.posts}>
        <p>My posts</p>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
