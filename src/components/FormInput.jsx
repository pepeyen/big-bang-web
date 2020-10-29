import React from 'react';

const FormInput = (props) => {
    return(
        <div className="form__input-group">
            <label
                className="form__label"
                htmlFor={`${props.inputType}Input`}
            >
                {props.inputLabel}
            </label>
            <input
                className="form__input"
                type={props.inputType}
                placeholder={props.inputPlaceholder}
                name={`${props.inputType}Input`}
            required/>
        </div>
    );
};

export default FormInput;