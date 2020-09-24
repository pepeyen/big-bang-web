import React from 'react';

//Mock up data
import {posts} from '../../services/mockData';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Node(props){
    const setNodeChildren = () => {
        switch (props.type) {
            case 'post':
                return(
                    <div className="page__banner-content --flex-end-self">
                        <p className="page__banner-title">
                            {posts[props.id].title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[props.id].info[0]}
                            </p>
                            <p className="page__banner-text">
                                {posts[props.id].info[1]}
                            </p>
                        </div>
                    </div>
                );
            case 'podcast':
                return(
                    <div className="page__banner-content --flex-end-self">
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[props.id].info[0]}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {posts[props.id].title}
                        </p>
                    </div>
                );
            case 'course':
                return(
                    <div className="page__banner-content --flex-end-self">
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[props.id].info[0]} - {posts[props.id].info[1]}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {posts[props.id].title}
                        </p>
                    </div>
                );
            case 'product':
                return(
                    <div className="page__banner-content --flex-end-self">
                        <p className="page__banner-title">
                            {posts[props.id].title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[props.id].info[0]}
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
    const nodeChildren = setNodeChildren(); 
    
    return(
        <li 
            className={`page__node --${props.size}-${props.position} --${props.type} --${props.theme}-text`}
            style={{backgroundImage: `url(${posts[props.id].bannerURL})`}}
        >
            {nodeChildren}
        </li>
    );
}

export default Node;