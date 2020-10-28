import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {
    Post,
    Form,
    FormInput,
    FormSubmit
} from '../components';

const Login = () => {
    if(sessionStorage.getItem('isLoggedIn')){
        return(
            <Redirect to="/user"/>
        );
    }else{
        return(
            <main>
                <section className="page">
                    <Post>
                        <p>Login Page</p>
                        <Form
                            formAction="http://localhost:8080/api/login"
                            formMethod="POST"
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
                    </Post>
                </section>
            </main>
        );
    }
}

export default Login;