import React from 'react';

//Mock up data
import {API} from '../../services/mockData';

//Services
import {filterOverall} from '../../services/filters';

function Banner(props){
    const banner = filterOverall(props.ID,'banner',API);

    return(
        <div 
            className="page__banner --thin-borders"
            style={{backgroundImage: `url(${banner.bannerURL})`}}
        >
            <div className="page__banner-headline --flex-end-self">
                <p className="page__banner-title --centralized-text --dark-text">
                    {banner.title}
                </p>
                <p className="page__banner-text --centralized-text --grey-text">
                    {banner.info}
                </p>
                {props.children}
            </div>
        </div>
    );
}

export default Banner;