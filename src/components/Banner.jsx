import React, {
    useState,
    useEffect
} from 'react';

//Components
import {Loader} from './index';


const Banner = (props) => {
    const [banner,setBanner] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/banners/${props.ID}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setBanner(data.banners);
            setIsLoading(false);
        })
    },[props.ID]);

    if(isLoading === true){
        return(
            <Loader isLoading={true} />
        );
    }else{
        return(
            <div 
                className="page__banner --thin-borders"
                style={{backgroundImage: `url(${process.env.REACT_APP_BLOB_HOST}/jpeg/banner/bg-${banner.banner_id}.jpg`}}
            >
                <div className="page__banner-headline --flex-end-self">
                    <p className="page__banner-title --centralized-text --dark-text">
                        {banner.banner_title}
                    </p>
                    <p className="page__banner-text --centralized-text --grey-text">
                        {banner.banner_description}
                    </p>
                    {props.children}
                </div>
            </div>
        );
    }
}

export default Banner;