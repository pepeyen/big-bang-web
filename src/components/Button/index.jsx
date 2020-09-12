import React from 'react';

function Button(props){
    return(
        <div className="page__button --centralized-text --light-text"> 
            <span>{props.text}</span>
        </div>
    );
}

export default Button;