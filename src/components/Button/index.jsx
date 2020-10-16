import React from 'react';
import { Link } from 'react-router-dom';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Button(props){
    if(props.target === undefined){
        return(
            <div className={`page__button --centralized-text --light-text --root-${props.root}`}> 
                <span>{props.text.toUpperCase()}</span>
                {props.root !== 'post' ? '' : <img className="page__button-foward" src={img_foward} alt="Foward" />}
            </div>
        );
    }else{
        return(
            <Link 
                className={`page__button --centralized-text --light-text --root-${props.root}`}
                to={`/${props.target}`}
            >
                <p>
                    <span>{props.text.toUpperCase()}</span>
                    {props.root !== 'post' ? '' : <img className="page__button-foward" src={img_foward} alt="Foward" />}
                </p>
            </Link>
        );
    }
}

export default Button;