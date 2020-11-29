import React, {useState} from 'react';

//Components
import {
    Page,
    Post,
    Form,
    FormInput,
    FormSubmit
} from '../components';

const Contact = () => {
    const [isAnimating,setIsAnimating] = useState(false);
    const [inputResponse,setInputResponse] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const myBody = {
            email: data.get('e-mailInput'),
            message: data.get('messageInput')
        };

        fetch(form.action, {
            headers: myHeaders,
            method: form.method,
            body: JSON.stringify(myBody)
        })
        .then(response => {
            setIsAnimating(true);

            if(response.status === 200){
                setInputResponse('Done, thank you (≧◡≦)');
            }else{
                setInputResponse('Error, please try again (｡╯︵╰｡)');
            }
        })
    };;

    const focusForm = () => {
        if(isAnimating && inputResponse.split(',')[0] !== 'Done'){
            setIsAnimating(false);
            setInputResponse('');
        }
    };

    return(
        <Page>
            <Post>
                <Form
                    formAction="https://formspree.io/mknqyejb"
                    formMethod="POST"
                    formSubmitHandler={submitForm}
                    formFocusHandler={focusForm}
                    formTitle='Contact Me'
                    animationState={isAnimating}
                    feedbackText={inputResponse}
                >
                    <FormInput
                        inputType='text'
                        inputLabel='E-mail'
                    />
                    <FormInput
                        inputType='textArea'
                        inputLabel='Message'
                    />
                    <FormSubmit
                        isDisabled={isAnimating}
                        submitText='Send'
                    />
                </Form>
            </Post>
        </Page>
    );
}

export default Contact;