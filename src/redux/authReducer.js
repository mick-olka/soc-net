import {profileAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    myId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_AUTH_USER_DATA:

        return{
            ...state, ...action.data, isAuth: true,

        }

    default:
      return state;
  }
};

export const setAuthUserData = (myId, email, login) => ({
    type: SET_AUTH_USER_DATA,
    data: {myId, email, login}
});

export const setLogin = () => (dispatch) => {
        profileAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login)); // 'data' from axios and 'data' from API
                }
        });
    }

export default authReducer;