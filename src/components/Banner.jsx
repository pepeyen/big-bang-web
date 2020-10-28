import React from 'react';

//Mock up data
import {API} from '../services/mockData';

//Services
import {filterOverall} from '../services';

const Banner = (props) => {
    const banner = filterOverall(props.ID,'banner',API);

    return(
        <div 
            className="page__banner --thin-borders"
            style={{backgroundImage: `url(${banner.media.bannerURL})`}}
        >
            <div className="page__banner-headline --flex-end-self">
                <p className="page__banner-title --centralized-text --dark-text">
                    {banner.info.title}
                </p>
                <p className="page__banner-text --centralized-text --grey-text">
                    {banner.info.description}
                </p>
                {props.children}
            </div>
        </div>
    );
}

export default Banner;