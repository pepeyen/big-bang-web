import React from 'react';

const NewsLetter = (props) => {

    return(
        <div className={`newsletter --${props.dark ? 'dark' : 'light'}-theme`} >
            <span className={`newsletter__title --${props.dark ? 'light' : 'dark'}-text`}>Namah no seu e-mail</span>
            <span className={`newsletter__description --${props.dark ? 'light' : 'dark'}-text`}>Assine nossa newsletter</span>
            <form className={"newsletter__form"}>
                <input 
                    className="newsletter__form-email --thin-borders"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />
                <input 
                    className={`newsletter__form-button --${props.dark ? 'light' : 'dark'}-text --medium-borders --grey-borders`}
                    type="button"
                    value="ASSINAR"
                />
            </form>
            <div className="newsletter__info --grey-text">
                <span>Ao clicar em “assinar”, você concorda em receber e-mails do Espaço Namah a aceita nossos <span className="--underlined">Termos de Uso</span> e nossas <span className="--underlined">Políticas de Privacidade</span>.</span>
            </div>
        </div>
    );
}

export default NewsLetter;