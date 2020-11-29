import React from 'react';

const Form = (props) => {
    return(
        <form 
            className="form"
            action={props.formAction}
            method={props.formMethod}
            onSubmit={props.formSubmitHandler}
            onFocus={props.formFocusHandler}
        >
            <span className="form__title">{props.formTitle}</span>
            {props.children}
            <span className={`form__feedback ${props.animationState ? '--shaking-text' : ''}`}>{props.feedbackText}</span>
        </form>
    );
};

export default Form;