import React from 'react';
import {Link} from 'react-router-dom';

//Mock up data
import {posts} from '../../services/mockData';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Node(props){
    const setNodeChildren = () => {
        switch (props.type) {
            case 'post':
                return(
                    <Link 
                        to={`/blog/post/?id=${posts[props.id].ID}`}
                        className="page__banner-content --flex-end-self"
                    >
                        <p className="page__banner-title">
                            {posts[props.id].title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[props.id].info.type}
                            </p>
                            <p className="page__banner-text">
                                por {posts[props.id].info.onwerShip}
                            </p>
                        </div>
                    </Link>
                );
            case 'podcast':
                return(
                    <Link 
                        to={`/podcasts/post/?id=${posts[props.id].ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[props.id].info.userNickname} #{posts[props.id].info.userId} 
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {posts[props.id].title}
                        </p>
                    </Link>
                );
            case 'course':
                return(
                    <Link
                        to={`/curso/post/?id=${posts[props.id].ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {posts[props.id].info.type} - {posts[props.id].info.date.day} {posts[props.id].info.date.month}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {posts[props.id].title}
                        </p>
                    </Link>
                );
            case 'product':
                return(
                    <Link 
                        to={`/loja/produto/?id=${posts[props.id].ID}`} 
                        className="page__banner-content --flex-end-self"
                    >
                        <p className="page__banner-title">
                            {posts[props.id].title}
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
            className={`page__node --${props.size}-${props.position} --${props.type} --${props.theme}-text`}
            style={{backgroundImage: `url(${posts[props.id].bannerURL})`}}
        >
            {nodeChildren}      
        </li>
    );
}

export default Node;