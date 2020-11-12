import React from 'react';

const FormSubmit = (props) =>{
    return(
        <button
            className="form__submit"
            type='submit'
            disabled={props.isDisabled}
        >
            {props.submitText}
        </button>
    );
};

export default FormSubmit;