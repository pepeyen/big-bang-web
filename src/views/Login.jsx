import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';

//Components
import {
    Post,
    Form,
    FormInput,
    FormSubmit
} from '../components';

//Actions
import {storeAccessToken} from '../actions';

const Login = () => {
    const dispatch = useDispatch();
    const [inputResponse,setInputResponse] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    if(window.sessionStorage.getItem('isLoggedIn') || isLoggedIn){
        return(
            <Redirect to="/user"/>
        );
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
                    setInputResponse(data.description);
                }else{
                    dispatch(storeAccessToken(data.access_token));
                    setIsLoggedIn(true);
                    window.sessionStorage.setItem('isLoggedIn', true);
                }
            })
        };

        return(
            <main>
                <section className="page">
                    <Post>
                        <Form
                            formAction="http://localhost:8080/api/login"
                            formMethod="POST"
                            formHandler={submitForm}
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
                            <span className="form__feedback">{inputResponse}</span>
                        </Form>
                    </Post>
                </section>
            </main>
        );
    }
}

export default Login;