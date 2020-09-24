import React from 'react';

//Mock up data
import {banners} from '../../services/mockData';

function Banner(props){
    return(
        <div className="page__banner --first-post --thin-borders">
            <div className="page__banner-headline --flex-end-self">
                <p className="page__banner-title --centralized-text --dark-text">
                    {banners[props.bannerId].title}
                </p>
                <p className="page__banner-text --centralized-text --grey-text">
                    {banners[props.bannerId].text}
                </p>
                {props.children}
            </div>
        </div>
    );
}

export default Banner;