import React from 'react';

function CarouselItem(props){
    return(
        <div className="carousel__item">
            {props.children}
        </div>
    );
}

export default CarouselItem;