import React from 'react';

const CarouselItem = (props) => {
    return(
        <div className="carousel__item">
            {props.children}
        </div>
    );
}

export default CarouselItem;