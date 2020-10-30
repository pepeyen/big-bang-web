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
            {props.children}
        </form>
    );
};

export default Form;