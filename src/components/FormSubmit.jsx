import React from 'react';

const FormSubmit = (props) =>{
    return(
        <button type='submit'>
            {props.submitText}
        </button>
    );
};

export default FormSubmit;