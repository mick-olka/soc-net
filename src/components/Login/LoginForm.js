import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input, TextInput} from "../common/FormsControllers/FormController";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import s from "./Login.module.css";

const maxLength50 = maxLengthCreator(50);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={s.form_error}>{error}</div>}
            <div>
                {/*<input type={"text"} placeholder={"Nickname"} />*/}
                {createField("email", "email", [required, maxLength50], TextInput, null)}
                {/*<Field*/}
                {/*    component={TextInput}*/}
                {/*    validate={[required, maxLength50]}*/}
                {/*    name={"email"}*/}
                {/*    placeholder={"email"}*/}
                {/*/>*/}
            </div>
            <div>
                {createField("Secret code", "password", [required, maxLength50], TextInput, {type: "password"})}
            </div>
            <div>
                {createField(null, "rememberMe", null, "input", {type: "checkbox"})}
                stay here after all
            </div>
            <div>
                <button>Let me in</button>
            </div>

            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField("CaptchaSymbols", "captcha", [required], Input, {} )}

        </form>
    );
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

export default ReduxLoginForm;