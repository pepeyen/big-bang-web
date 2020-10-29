import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {
    Post,
    Form,
    FormInput,
    FormSubmit
} from '../components';

const Login = () => {
    const [inputResponse,setInputResponse] = useState('');

    if(window.sessionStorage.getItem('isLoggedIn')){
        return(
            <Redirect to="/user"/>
        );
    }else{
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
            })
            .then(response => {
                return response.json();
            })
            .then(data => {

                setInputResponse(data.description ? data.description : '');
                /*
                if(data.success === true){
                    
                }
                */
            })
        };
        return(
            <main>
                <section className="page">
                    <Post>
                        <p>Login Page</p>
                        <Form
                            formAction="http://localhost:8080/api/login"
                            formMethod="POST"
                            formHandler={submitForm}
                        >
                            <FormInput
                                inputType='email'
                                inputLabel='E-mail'
                                inputPlaceholder='Insira seu e-mail'
                            />
                            <FormInput
                                inputType='password'
                                inputLabel='Senha'
                                inputPlaceholder='Insira sua senha'
                            />
                            <FormSubmit submitText='Login' />
                        </Form>
                        <p>{inputResponse}</p>
                    </Post>
                </section>
            </main>
        );
    }
}

export default Login;