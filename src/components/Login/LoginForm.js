import React from 'react';
import {Field, reduxForm} from "redux-form";
import {TextInput} from "../common/FormsControllers/FormController";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import s from "./Login.module.css";

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            { props.error && <div className={s.form_error} >{props.error}</div>}
            <div>
                {/*<input type={"text"} placeholder={"Nickname"} />*/}
                <Field
                    component={TextInput}
                    validate={[required, maxLength50]}
                    name={"email"}
                    placeholder={"email"}
                />
            </div>
            <div>
                <Field
                    component={TextInput}
                    validate={[required, maxLength50]}
                    name={"password"}
                    type={"password"}
                    placeholder={"Secret code"}
                />
            </div>
            <div>
                <Field component={"input"}
                       type={"checkbox"}
                       name={"rememberMe"}
                /> stay here after all
            </div>
            <div>
                <button>Let me in</button>
            </div>
        </form>
    );
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

export default ReduxLoginForm;