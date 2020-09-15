import React from 'react';
import { Link } from 'react-router-dom';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Button(props){
    return(
        <Link 
            className={`page__button --centralized-text --light-text --root-${props.root}`}
            to={props.target === undefined ? '/#' : `/${props.target}`}
        > 
            <span>{props.text.toUpperCase()}</span>
            {props.root !== 'post' ? '' : <img className="page__button-foward" src={img_foward} alt="Foward" />}
        </Link>
    );
}

export default Button;