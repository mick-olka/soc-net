import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
      profileInfo: { id: 0, name: "Mick", info: "Leet Meee Out!" },
      newPostText: 'write',
      posts: [
          { id: 0, author: "Mick", likes: 0, message: "IT''\"S MY FIRST POST!!!!" },
          {
            id: 2,
            author: "Mick",
            likes: 2,
            message: "SOME post post post post post",
          },
          { id: 4, author: "Mick", likes: 12, message: "i am the lord of time" },
          {
            id: 6,
            author: "Mick",
            likes: 1234,
            message: "i like lorem ipsum )))))))))))00))))",
          },
          {
            id: 8,
            author: "Mick",
            likes: 333,
            message: "My name is 21931-08391038321",
          },
          { id: 10, author: "Mick", likes: 0, message: "Say abrakadabra" },
          {
            id: 12,
            author: "Mick",
            likes: 343,
            message: "QWETRYFGHSBH guwdiqhdq ghduwqigdhqi y6739gheiq guqi",
          },
          {
            id: 14,
            author: "Mick",
            likes: 51,
            message: "POOOOOOOOOOOOOOooooooooOOOOOOOOOOst",
          },
          { id: 16, author: "Mick", likes: 51, message: "Leet mtttttt ouy;" },
        ],
    profile: null,
  };

const profileReducer = (state=initialState, action) => {
  let stateCopy;
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 25,
                message: state.newPostText,
                likes: 0,
                author: "Mick"
              };
              stateCopy={...state,
              newPostText: ''};
              stateCopy.posts=[...state.posts, newPost];
            return stateCopy;
            
        case UPDATE_NEW_POST_TEXT:
            stateCopy={...state};  //дані отримані з ActionCreator в MyPosts
            stateCopy.newPostText=action.text;
            return stateCopy;

        case SET_USER_PROFILE:
            return {...state, profile: action.profile }

        default:
            return state;
    }
}

//ACTION CREATORS
export const addPostCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export const setProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response));
        });
    }
}

export default profileReducer;