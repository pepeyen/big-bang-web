import React from 'react';
import {Link} from 'react-router-dom';

//Mock up data
import {API} from '../../services/mockData';

//Components
import Newsletter from '../../components/Newsletter';

//Services
import {filterOverall} from '../../services/filters';
import {translatePageType} from '../../services/translatePageType';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Node(props){
    const node = filterOverall(props.ID,props.type,API);

    const setNodeChildren = () => {
        switch (props.type) {
            case 'post':
                if(props.theme === 'light'){
                    return(
                        <React.Fragment>
                            <p className="page__banner-title">
                                {node.info.title}
                            </p>
                            <div className="page__banner-info">
                                <p className="page__banner-text --underlined">
                                    {node.info.type}
                                </p>
                                <p className="page__banner-text">
                                    por <span className="--underlined">{node.info.onwership.username}</span>
                                </p>
                            </div>
                        </React.Fragment>
                    );
                }else{
                    return(
                        <React.Fragment>
                            <img 
                                src={node.media.bannerURL}
                                alt={node.type}
                            />
                            <p className="page__banner-title">
                                {node.info.title}
                            </p>
                            <p className="page__banner-text --underlined">
                                {node.info.type}
                            </p>
                            <span className="page__banner-text">
                                {node.article[1].text}
                            </span>
                        </React.Fragment>
                    );
                }
            case 'podcast':
                return(
                    <React.Fragment>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {node.info.onwership.username} #{node.info.onwership.userID} 
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {node.info.name}
                        </p>
                    </React.Fragment>
                );
            case 'course':
                return(
                    <React.Fragment>
                        <div className="page__banner-info">
                            <p className="page__banner-text">
                                {node.info.type} - {node.info.date.startDate.day} {node.info.date.startDate.month}
                            </p>
                        </div>
                        <p className="page__banner-title">
                            {node.info.title}
                        </p>
                    </React.Fragment>
                );
            case 'product':
                return(
                    <React.Fragment>
                        <p className="page__banner-title">
                            {node.info.title}
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
            case 'newsletter':
                return(
                    <Newsletter />
                );
            default:
                return(
                    <p>Error</p>
                );
        }
    }
    const nodeChildren = setNodeChildren(); 

    if(props.redirector){
        return(
            <Link
                className={`page__node --${props.size}-${props.position} --${node.type} --${props.theme}-text`}
                style={{backgroundImage: props.theme === 'light' ? `url(${node.media.bannerURL})` : ''}}
                to={`/${translatePageType(node.type)}/post/?id=${node.ID}&type=${node.type}`}
            >
                <div className={props.theme === 'light' ? "page__banner-content --flex-end-self --fade-up" : "page__banner-content --flex-end-self"}>
                    {nodeChildren}  
                </div>    
            </Link>
        );
    }else{
        return(
            <div className={`--${props.size}-${props.position}  --thick-borders --dark-borders --${props.theme}-text`}>
                {nodeChildren}   
            </div>
        );
    }
}

export default Node;