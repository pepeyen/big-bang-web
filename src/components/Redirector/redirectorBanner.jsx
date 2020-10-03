import React from 'react';

function RedirectorBanner(props){
    return(
        <img 
            className="page__redirector-banner"
            src={props.url}
            alt={props.alt} 
        />
    );
}

export default RedirectorBanner;