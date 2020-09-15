import React from 'react';

function Banner(props){
    return(
        <div className="page__banner --first-post --thin-borders">
            <div className="page__banner-headline --flex-end-self">
                <p className="page__banner-title --centralized-text --dark-text">
                    {props.title}
                </p>
                <p className="page__banner-text --centralized-text --grey-text">
                    {props.text}
                </p>
                {props.children}
            </div>
        </div>
    );
}

export default Banner;