import React from 'react';

//Component
import CarouselRadioButton from './CarouselRadioButton';

const CarouselRadioList = (props) => {
    const buttonList = new Array(props.buttonCount).fill();

    return(
        <ul className="carousel__radio-list">
            {buttonList.map((element,index) => {
                return(
                    <CarouselRadioButton
                        key={index}
                        value={index}
                        onClick={props.onClick}
                        active={props.currentPage === index ? true : false}
                    />
                );
            })}
        </ul>
    );
}

export default CarouselRadioList;