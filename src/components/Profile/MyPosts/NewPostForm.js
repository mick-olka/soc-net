import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from "./MyPosts.module.css";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControllers/FormController";

const maxLength10 = maxLengthCreator(10);

let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.write_post} >
            <div>
                <Field
                    component={TextArea}
                    name={"postText"}
                    placeholder={"Write here..."}
                    validate={[required, maxLength10]}
                    className={s.newPostTextarea}
                />
            </div>

            <div>
                <button className={s.addPostButton} >Add post</button>
            </div>
        </form>
    );
}

const ReduxNewPostForm = reduxForm({form: 'post'})(NewPostForm);

export default ReduxNewPostForm;