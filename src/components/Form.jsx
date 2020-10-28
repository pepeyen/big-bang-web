import React from 'react';

const Form = (props) => {
    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        //Fetch
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const myBody = {
            email: data.get('emailInput'),
            password: data.get('passwordInput')
        };

        fetch(form.action, {
            headers: myHeaders,
            method: form.method,
            body: JSON.stringify(myBody)
        });
    };
    return(
        <form 
            className="form"
            action={props.formAction}
            method={props.formMethod}
            onSubmit={submitForm}
        >
            {props.children}
        </form>
    );
};

export default Form;