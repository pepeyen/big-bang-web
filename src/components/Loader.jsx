import React from 'react';

const Loader = (props) => {
    return(
        <div className={props.isLoading ? 'loader' : 'loader --invisible'}>
            <div className="loader-spinner"/>
        </div>
    );
};

export default Loader;