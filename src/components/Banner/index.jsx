import React from 'react';

//Mock up data
import {banners} from '../../services/mockData';

function Banner(props){
    return(
        <div 
            className="page__banner --thin-borders"
            style={{backgroundImage: `url(${banners[props.id].bannerURL})`}}
        >
            <div className="page__banner-headline --flex-end-self">
                <p className="page__banner-title --centralized-text --dark-text">
                    {banners[props.id].title}
                </p>
                <p className="page__banner-text --centralized-text --grey-text">
                    {banners[props.id].info}
                </p>
                {props.children}
            </div>
        </div>
    );
}

export default Banner;