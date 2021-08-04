import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "soc-net/auth/auth-reducer/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "soc-net/auth/auth-reducer/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    initialized: false,
    myId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: true,
    captchaUrl: null,   //  if null -- captcha not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state, ...action.payload, isLoading: false,
            }

        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, ...action.payload,    //  destruct state then destruct payload and save to state
            }

        default:
            return state;
    }
};

export const setAuthUserData = (myId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {myId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const getLogin = () => async (dispatch) => {
    let response = await authAPI.getAuth();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true)); // 'data' from axios and 'data' from API
    } else {
        dispatch(setAuthUserData(null, null, null, false));
    }
    return "from getLogin";
}

export const setLogin = (formData) => async (dispatch) => {

    let response = await authAPI.logIn(formData)
    if (response.data.resultCode === 0) {
        dispatch(getLogin());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let errorMsg = response.data.messages.length > 0 ? response.data.messages[0] : "Wrong Login Data"
        dispatch(stopSubmit("login", {_error: errorMsg}));
    }
}

export const doLogOut = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(getLogin());
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    let captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default authReducer;