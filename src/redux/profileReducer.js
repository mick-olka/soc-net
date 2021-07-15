import {profileAPI} from "../api/api";
import {setIsFetching} from "./usersReducer";

const ADD_POST = 'ADD_POST';
const DEL_POST = 'DEL_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

let initialState = {
    isFetching: true,
    posts: [
        {id: 0, author: "Mick", likes: 0, message: "IT''\"S MY FIRST POST!!!!"},
        {
            id: 2,
            author: "Mick",
            likes: 2,
            message: "SOME post post post post post",
        },
        {id: 4, author: "Mick", likes: 12, message: "i am the lord of time"},
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
        {id: 10, author: "Mick", likes: 0, message: "Say abrakadabra"},
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
        {id: 16, author: "Mick", likes: 51, message: "Leet mtttttt ouy;"},
    ],
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "loading",
        userId: null,
        photos: {small: null, large: null}
    },
    status: null,
};

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 25,
                message: action.newPostText,
                likes: 0,
                author: "Mick"
            };
            stateCopy = {...state, posts: [...state.posts, newPost]};
            return stateCopy;

        case DEL_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_PROFILE_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

//ACTION CREATORS
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostCreator = (postId) => ({type: DEL_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_PROFILE_STATUS, status: status});

export const getProfile = (userId) =>      //  THUNK
    async (dispatch) => {
        dispatch(setIsFetching(true));
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response));
        dispatch(setIsFetching(false));
    }

export const getProfileStatus = (userId) => async (dispatch) => {    //  THUNK
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setStatus(status));
}

export default profileReducer;