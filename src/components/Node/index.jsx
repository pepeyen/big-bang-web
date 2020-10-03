import React from 'react';
import {Link} from 'react-router-dom';

//Mock up data
import {posts} from '../../services/mockData';

//Services
import filterByID from '../../services/filterByID';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Node(props){
    const nodeID = filterByID(props.ID,posts);

    const setNodeChildren = () => {
        switch (posts[nodeID].type) {
            case 'post':
                return(
                    <Link 
                        to={`/blog/post/?id=${posts[nodeID].ID}`}
                        className="page__banner-content --flex-end-self"
                    >
                        <p className="page__banner-title">
                            {posts[nodeID].title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[nodeID].info.type}
                            </p>
                            <p className="page__banner-text">
                                por {posts[nodeID].info.onwerShip}
                            </p>
                        </div>
                    </Link>
                );
            case 'podcast':
                return(
                    <Link 
                        to={`/podcasts/post/?id=${posts[nodeID].ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[nodeID].info.userNickname} #{posts[nodeID].info.userId} 
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {posts[nodeID].title}
                        </p>
                    </Link>
                );
            case 'course':
                return(
                    <Link
                        to={`/curso/post/?id=${posts[nodeID].ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[nodeID].info.type} - {posts[nodeID].info.date.day} {posts[nodeID].info.date.month}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {posts[nodeID].title}
                        </p>
                    </Link>
                );
            case 'product':
                return(
                    <Link 
                        to={`/loja/produto/?id=${posts[nodeID].ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <p className="page__banner-title">
                            {posts[nodeID].title}
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
            className={`page__node --${props.size}-${props.position} --${posts[nodeID].type} --${props.theme}-text`}
            style={{backgroundImage: `url(${posts[nodeID].bannerURL})`}}
        >
            {nodeChildren}      
        </li>
    );
}

export default Node;