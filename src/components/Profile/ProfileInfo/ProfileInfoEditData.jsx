import React from "react";
import {createField, Input, TextInput} from "../../common/FormsControllers/FormController";
import {reduxForm} from "redux-form";
import s from "../ProfileInfo/ProfileInfo.module.css";
import sl from "../../Login/Login.module.css";

const ProfileInfoEdit = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={sl.form_error}>{error}</div>}
        <button>Save</button>
        <div>Looking For A Job: {createField(null, "lookingForAJob", [], Input, {type: "checkbox"})} </div>
        <div>Bout Me: {createField(null, "aboutMe", [], TextInput)}</div>
        <div>My skills: {createField(null, "lookingForAJobDescription", [], TextInput)}</div>
        <div><p>Contacts:</p>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact} >
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>})}
        </div>
    </form>;
};

const ProfileInfoDataForm = reduxForm({form: 'edit_profile'})(ProfileInfoEdit);
export default ProfileInfoDataForm;
