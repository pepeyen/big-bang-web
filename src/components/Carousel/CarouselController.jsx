import React from 'react';

function CarouselController(props){
    const setControllerBackground = () => {
        switch (props.controllerType){
            case "back":
                return(
                    <svg viewBox="0 0 256 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M3.88753 248.1L228.988 473.2C234.288 478.5 242.787 478.5 248.088 473.2C253.388 467.9 253.388 459.4 248.088 454.1L32.5875 238.6L248.088 23.0998C253.388 17.7998 253.388 9.29982 248.088 3.99982C245.488 1.39982 241.988 -0.000183986 238.588 -0.000184283C235.188 -0.000184581 231.688 1.29982 229.088 3.99981L3.98751 229.1C-1.31249 234.3 -1.31247 242.9 3.88753 248.1Z" 
                            fill="#73A8A0"
                        />
                    </svg>
                );
            case "forward":
                return(
                    <svg viewBox="0 0 256 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M248.175 229.075L23.075 3.975C17.775 -1.325 9.275 -1.325 3.975 3.975C-1.325 9.275 -1.325 17.775 3.975 23.075L219.475 238.575L3.975 454.075C-1.325 459.375 -1.325 467.875 3.975 473.175C6.575 475.775 10.075 477.175 13.475 477.175C16.875 477.175 20.375 475.875 22.975 473.175L248.075 248.075C253.375 242.875 253.375 234.275 248.175 229.075Z" 
                            fill="#73A8A0"
                        />
                    </svg>
                );
            default:
                return <p>Error</p>
        }
    };
    const controllerBackground = setControllerBackground();
    
    return(
        <button
            className={`carousel__controller ${props.isDisabled ? "--disabled-controller" : "--active-controller"}`}
            type="button"
            onClick={() => {props.onClick(props.controllerType)}}
            disabled={props.isDisabled}
        >
            {controllerBackground}
        </button>
    );
}

export default CarouselController;