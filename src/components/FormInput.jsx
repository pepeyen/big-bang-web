import React from 'react';

const FormInput = (props) => {
    return(
        <div className="form__input-group">
            <input
                className="form__input"
                type={props.inputType}
                name={`${props.inputType}Input`}
            required/>
            <label
                className="form__label"
                htmlFor={`${props.inputType}Input`}
            >
                {props.inputLabel}
            </label>
        </div>
    );
};

export default FormInput;