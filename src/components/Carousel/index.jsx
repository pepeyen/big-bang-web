import React from 'react';

function Carousel(props){
    return(
        <div className="page__carousel --central --top-thin-borders --bottom-thin-borders">
            <div className="page__carousel-info">
                <p className="page__banner-text">
                    {props.text}
                </p>
                <p className="page__banner-title">
                    {props.title}
                </p>
            </div>
            <ul className="page__carousel-products">
                {props.children}
            </ul>
        </div>
    );
}

export default Carousel;