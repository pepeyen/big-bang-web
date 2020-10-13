import React from 'react';
import {Link} from 'react-router-dom';

//Mock up data
import {API} from '../../services/mockData';

//Services
import {filterOverall} from '../../services/filters';
import {translatePageType} from '../../services/translatePageType';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Node(props){
    const node = filterOverall(props.ID,props.type,API);

    const setNodeChildren = () => {
        switch (node.type) {
            case 'post':
                return(
                    <React.Fragment>
                        <p className="page__banner-title">
                            {node.title}
                        </p>
                        <div className="page__banner-info">
                            <p className="page__banner-text --underlined">
                                {node.info.type}
                            </p>
                            <p className="page__banner-text">
                                por <span className="--underlined">{node.info.onwerShip}</span>
                            </p>
                        </div>
                    </React.Fragment>
                );
            case 'podcast':
                return(
                    <React.Fragment>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {node.info.userNickname} #{node.info.userId} 
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {node.title}
                        </p>
                    </React.Fragment>
                );
            case 'course':
                return(
                    <React.Fragment>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {node.info.type} - {node.info.date.day} {node.info.date.month}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {node.title}
                        </p>
                    </React.Fragment>
                );
            case 'product':
                return(
                    <React.Fragment>
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
                    </React.Fragment>
                );
            default:
                return(
                    <p>Error</p>
                );
        }
    }
    const nodeChildren = setNodeChildren(); 

    return(
        <Link
            className={`page__node --${props.size}-${props.position} --${node.type} --${props.theme}-text`}
            style={{backgroundImage: `url(${node.bannerURL})`}}
            to={`/${translatePageType(node.type)}/post/?id=${node.ID}&type=${node.type}`}
        >
            <div
                className="page__banner-content --flex-end-self"
            >
                {nodeChildren}  
            </div>    
        </Link>
    );
}

export default Node;