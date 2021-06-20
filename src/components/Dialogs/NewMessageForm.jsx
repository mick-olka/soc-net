import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import {TextArea} from "../common/FormsControllers/FormController";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.textInputBlock}>
            <div>
                {/*<input type={"text"} placeholder={"Nickname"} />*/}
                <Field component={TextArea} validate={[required, maxLength50]} name={"messageText"} placeholder={"Write here..."} className={s.textInput} />
            </div>

            <div>
                <button >Send</button>
            </div>
        </form>
    );
}

const ReduxNewMessageForm = reduxForm({form: 'message'})(NewMessageForm);

export default ReduxNewMessageForm;