import React from 'react';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Button(props){
    return(
        <div className={`page__button --centralized-text --light-text --root-${props.root}`}> 
            <span>{props.text.toUpperCase()}</span>
            {props.root === 'post' ? <img className="page__button-foward" src={img_foward} alt="Foward" /> : ''}
        </div>
    );
}

export default Button;