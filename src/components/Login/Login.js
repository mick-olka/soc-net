import React from 'react';
import ReduxLoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {    //  calls from redux-form in handleSumbit
        console.log(formData);
        //authAPI.setAuth(formData);
        props.setLogin(formData);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login;