import React from "react";
import s from "./FormController.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${s.formControl} ${(hasError? s.error : "")}`} >
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const TextArea = (props) => {  //  деструктуризация
    const {input, meta, child, ...restProps} = props;
return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
};

export const TextInput = (props) => {  //  деструктуризация
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} ><input type={"text"} {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, validator, component, props) => (
  <Field placeholder={placeholder} name={name} validate={validator} component={component} {...props} />
);

