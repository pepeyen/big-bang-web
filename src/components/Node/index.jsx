import React from 'react';
import {Link} from 'react-router-dom';

//Mock up data
import {API} from '../../services/mockData';

//Services
import {filterByID} from '../../services/filters';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Node(props){
    const node = filterByID(props.ID,API);

    const setNodeChildren = () => {
        switch (node.type) {
            case 'post':
                return(
                    <Link 
                        to={`/blog/post/?id=${node.ID}`}
                        className="page__banner-content --flex-end-self"
                    >
                        <p className="page__banner-title">
                            {node.title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {node.info.type}
                            </p>
                            <p className="page__banner-text">
                                por {node.info.onwerShip}
                            </p>
                        </div>
                    </Link>
                );
            case 'podcast':
                return(
                    <Link 
                        to={`/podcasts/podcast/?id=${node.ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {node.info.userNickname} #{node.info.userId} 
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {node.title}
                        </p>
                    </Link>
                );
            case 'course':
                return(
                    <Link
                        to={`/course/post/?id=${node.ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {node.info.type} - {node.info.date.day} {node.info.date.month}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {node.title}
                        </p>
                    </Link>
                );
            case 'product':
                return(
                    <Link 
                        to={`/store/product/?id=${node.ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <p className="page__banner-title">
                            {node.title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text">COMPRE AGORA</p>
                            <img 
                                className="page__product-foward"
                                src={img_foward} 
                                alt="Go to the product page" 
                            />
                        </div>
                    </Link>
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
            className={`page__node --${props.size}-${props.position} --${node.type} --${props.theme}-text`}
            style={{backgroundImage: `url(${node.bannerURL})`}}
        >
            {nodeChildren}      
        </li>
    );
}

export default Node;