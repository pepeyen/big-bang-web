import React from 'react';

const Form = (props) => {
    return(
        <form 
            className="form"
            action={props.formAction}
            method={props.formMethod}
            onSubmit={props.formHandler}
        >
            {props.children}
        </form>
    );
};

export default Form;