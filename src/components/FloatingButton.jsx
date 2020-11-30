import React from 'react';

const FloatingButton = (props) => {
    return(
        <button
            className="button__floating --pulse-one-time"
            onClick={props.floatingButtonHandler}
        >
            {props.children}
        </button>
    );
};

export default FloatingButton;