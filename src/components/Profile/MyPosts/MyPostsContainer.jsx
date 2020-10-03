
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};

let mapDispatchToProps = (dispatch) => {
  return{
    addPost: ()=>{
      dispatch(addPostCreator());
    },
    onPostChange: (text)=>{
      dispatch(updateNewPostTextCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
        
//         let addPost = () => {
//           store.dispatch(addPostCreator());
//         };

//         let onPostChange = (text) => {
//           //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
//           let action = updateNewPostTextCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             addPost={addPost}
//             onPostChange={onPostChange}
//             profilePage={state.getState().profilePage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

export default MyPostsContainer;
