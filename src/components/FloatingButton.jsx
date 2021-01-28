import React from 'react';

const FloatingButton = (props) => {
    return(
        <button
            className="button__floating --pulse-one-time"
            onClick={props.floatingButtonHandler}
            title={props.floatingButtonTitle}
        >
            {props.children}
        </button>
    );
};

export default FloatingButton;