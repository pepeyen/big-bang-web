import React from 'react';

import img_playButton from '../../assets/images/button/button-play.svg';

function RedirectorBanner(props){
    if(props.type === 'podcast'){
        return(
            <div 
                className="page__redirector-banner" 
                style={{backgroundImage: `url(${props.url})`}}
            >
                <img 
                    className="page__button-play" 
                    src={img_playButton} alt="Play"
                />
            </div>
        )
    }else{
        return(
            <img 
                className="page__redirector-banner"
                src={props.url}
                alt={props.alt} 
            />
        );
    }
}

export default RedirectorBanner;