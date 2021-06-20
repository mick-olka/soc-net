
import {
  addPostCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};

const MyPostsContainer = connect(mapStateToProps, {addPostCreator})(MyPosts);

export default MyPostsContainer;
