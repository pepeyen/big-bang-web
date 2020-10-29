import React from 'react';

const FormSubmit = (props) =>{
    return(
        <button
            className="form__submit"
            type='submit'
        >
            {props.submitText}
        </button>
    );
};

export default FormSubmit;