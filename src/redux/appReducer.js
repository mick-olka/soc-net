import {getLogin} from "./authReducer";

const SET_INITIALIZED_DONE = "SET_AUTH_USER_DATA";

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {

      case SET_INITIALIZED_DONE:
          return {
              ...state,
              initialized: true,
          }

    default:
      return state;
  }
};

export const setInitializedDone = () => ({
    type: SET_INITIALIZED_DONE,
});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getLogin());
    Promise.all([promise, ]).then(() => {     //  to resolve an array of promises
        dispatch(setInitializedDone());
    });
}


export default appReducer;