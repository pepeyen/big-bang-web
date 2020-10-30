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
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [isAnimating,setIsAnimating] = useState(false);

    if(window.sessionStorage.getItem('isLoggedIn') || isLoggedIn){
        return <Redirect to="/user"/>
    }else{
        const submitForm = (e) => {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
    
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
                if(!data.success){
                    setIsAnimating(true);
                    setInputResponse(data.description);
                }else{
                    window.sessionStorage.setItem('isLoggedIn', true);
                    setIsLoggedIn(true);
                }
            })
        };

        const focusForm = () => {
            if(isAnimating && inputResponse !== ''){
                setIsAnimating(false);
                setInputResponse('');
            }
        };

        return(
            <main>
                <section className="page">
                    <Post>
                        <Form
                            formAction="http://localhost:8080/api/login"
                            formMethod="POST"
                            formSubmitHandler={submitForm}
                            formFocusHandler={focusForm}
                        >
                            <span className="form__title">Login Page</span>
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
                            <span className={`form__feedback ${isAnimating ? '--shaking-text' : ''}`}>{inputResponse}</span>
                        </Form>
                    </Post>
                </section>
            </main>
        );
    }
}

export default Login;