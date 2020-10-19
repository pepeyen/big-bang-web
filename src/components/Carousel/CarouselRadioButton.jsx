import React from 'react';

function CarouselRadioButton(props){
    return(
        <button 
            className={`carousel__radio-button --${props.active ? "active" : "disabled"}-radio`}
            value={props.value}
            onClick={props.onClick}
        />
    );
}

export default CarouselRadioButton;