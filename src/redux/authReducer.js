import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    myId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_AUTH_USER_DATA:
        return{
            ...state, ...action.payload, isLoading: false,
        }

    default:
      return state;
  }
};

export const setAuthUserData = (myId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {myId, email, login, isAuth}
});

export const getLogin = () => (dispatch) => {
        authAPI.getAuth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true)); // 'data' from axios and 'data' from API
                } else {
                    dispatch(setAuthUserData(null, null, null, false));

                }
        });
    }

export const doLogIn = (formData) => (dispatch) => {

    authAPI.logIn(formData)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getLogin());
            } else {
                let errorMsg = response.data.messages.length>0 ? response.data.messages[0] : "Wrong Login Data"
                dispatch(stopSubmit("login", {_error: errorMsg}));
            }
        });
}

export const doLogOut = () => (dispatch) => {
    authAPI.logOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getLogin());
        }
    });
}



export default authReducer;