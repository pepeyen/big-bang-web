import React from 'react';

function Filler(props){
    return(
        <div className="page__filler --top-thin-borders --bottom-thin-borders">
            <div className="page__filler-info">
                <p className="page__banner-text">
                    {props.text}
                </p>
                <p className="page__banner-title">
                    {props.title}
                </p>
            </div>
            <ul className="page__filler-content">
                {props.children}
            </ul>
        </div>
    );
}

export default Filler;