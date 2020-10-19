import React from 'react';

//Component
import CarouselRadioButton from './CarouselRadioButton';

function CarouselRadioList(props){
    const buttonList = new Array(props.buttonCount).fill();

    return(
        <div className="carousel__feedback">
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
        </div>
    );
}

export default CarouselRadioList;