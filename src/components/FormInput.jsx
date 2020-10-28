import React from 'react';

const FormInput = (props) => {
    return(
        <React.Fragment>
            <label htmlFor={`${props.inputType}Input`}>{props.inputLabel}</label>
            <input
                type={props.inputType}
                placeholder={props.inputPlaceholder}
                name={`${props.inputType}Input`}
            required>
            </input>
        </React.Fragment>
    );
};

export default FormInput;