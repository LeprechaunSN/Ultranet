import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./AddPostForm.module.css";
import Button from "../../../../common/Button/Button";
import { maxLength, requered } from "../../../../../utils/validators.js";
import { Textarea } from "../../../../common/FormControls/FormControls";

const maxLenght10 = maxLength(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} 
                name="newPostText" 
                className={s.post} 
                placeholder="Your news..." 
                rows="4"
                validate={[requered, maxLenght10]}
            />
            <Button className={s.submitButton} text="Add" />
        </form>
    )
}

export default reduxForm({form: 'addPostLogin'})(AddPostForm);