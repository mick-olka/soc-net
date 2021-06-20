import React from "react";
import s from "./MyPosts.module.css";
import Post from "../../Post/Post";
import ReduxNewPostForm from "./NewPostForm";

const MyPosts = (props) => {

  let postElements = props.posts.map((i) => (
    <Post likes={i.likes} message={i.message} key={i.id} />
  ));

    const onSubmit = (formData) => {    //  calls from redux-form in handleSumbit
        props.addPostCreator(formData.postText);
        formData.postText="";
    }

  return (
    <div className={s.content}>
      <ReduxNewPostForm onSubmit={onSubmit} />

      <div className={s.posts}>
        <p>My posts</p>
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
