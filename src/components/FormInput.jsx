import React from 'react';

const FormInput = (props) => {
    if(props.inputType === 'textArea'){
        return(
            <div className="form__input-group">
                <textarea
                    className="form__input --message-box"
                    type={props.inputType}
                    name={`${props.inputLabel.toLowerCase()}Input`}
                required/>
                <label
                    className="form__label"
                    htmlFor={`${props.inputLabel.toLowerCase()}Input`}
                >
                    {props.inputLabel}
                </label>
            </div>
        );
    }else{
        return(
            <div className="form__input-group">
                <input
                    className="form__input"
                    type={props.inputType}
                    name={`${props.inputLabel.toLowerCase()}Input`}
                required/>
                <label
                    className="form__label"
                    htmlFor={`${props.inputLabel.toLowerCase()}Input`}
                >
                    {props.inputLabel}
                </label>
            </div>
        );
    }
 
};

export default FormInput;