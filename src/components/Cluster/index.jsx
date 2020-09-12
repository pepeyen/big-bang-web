import React from 'react';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Cluster(props){
    const setClusterChildren = () => {
        switch (props.type) {
            case 'post':
                return(
                    <div className="page__banner-content --flex-end-self">
                        <p className="page__banner-title">
                            {props.title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {props.info[0]}
                            </p>
                            <p className="page__banner-text">
                                {props.info[1]}
                            </p>
                        </div>
                    </div>
                );
            case 'podcast':
                return(
                    <div className="page__banner-content --flex-end-self">
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {props.info[0]}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {props.title}
                        </p>
                    </div>
                );
            case 'course':
                return(
                    <div className="page__banner-content --flex-end-self">
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {props.info[0]} - {props.info[1]}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {props.title}
                        </p>
                    </div>
                );
            case 'product':
                return(
                    <div className="page__banner-content --flex-end-self">
                        <p className="page__banner-title">
                            {props.title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {props.info[0]}
                            </p>
                            <img 
                                className="page__product-foward"
                                src={img_foward} 
                                alt="Go to the product page" 
                            />
                        </div>
                    </div>
                );
            default:
                return(
                    <p>Error</p>
                );
        }
    }
    const clusterChildren = setClusterChildren();
    
    return(
        <li className={`page__cluster --${props.type} --${props.theme}-text`}>
            {clusterChildren}
        </li>
    );
}

export default Cluster;