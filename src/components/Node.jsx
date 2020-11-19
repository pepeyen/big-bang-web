import React, {
    useState,
    useEffect
} from 'react';
import {Link} from 'react-router-dom';

//Components
import {
    Loader,
    Newsletter
} from './index';

//Services
import {
    translatePageType,
    timeConverter
} from '../services';

//Images
import img_foward from '../assets/images/button/button-foward.svg';

const Node = (props) => {
    const [node,setNode] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        if(props.type !== 'newsletter') {
            fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/${props.type}s/${props.ID}`, {
                method: 'GET'
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if(data.success === true){
                    setNode(data[`${props.type}s`]);
                    setIsLoading(false);
                }
            })
        }
    },[props.type,props.ID]);

    let setNodeChildren;

    if(isLoading === true && props.type !== 'newsletter'){
        setNodeChildren = () => {
            return(
                <Loader isLoading={true} />
            );
        }
    }else{
        setNodeChildren = () => {
            switch (props.type) {
                case 'post':
                    if(props.theme === 'light'){
                        return(
                            <React.Fragment>
                                <p className="page__banner-title">
                                    {node.post_title}
                                </p>
                                <div className="page__banner-info">
                                    <p className="page__banner-text --underlined">
                                        {node.post_theme.toUpperCase()}
                                    </p>
                                    <p className="page__banner-text">
                                        por <span className="--underlined">{node.post_author}</span>
                                    </p>
                                </div>
                            </React.Fragment>
                        );
                    }else{
                        return(
                            <React.Fragment>
                                <img 
                                    src={`${process.env.REACT_APP_BLOB_HOST}/jpeg/post/bg-${node.post_id}.jpg`}
                                    alt={node.post_title}
                                />
                                <p className="page__banner-title">
                                    {node.post_title}
                                </p>
                                <p className="page__banner-text --underlined">
                                    {node.post_theme.toUpperCase()}
                                </p>
                                <span className="page__banner-text">
                                    {node.post_title}
                                </span>
                            </React.Fragment>
                        );
                    }
                case 'podcast':
                    return(
                        <React.Fragment>
                            <div className="page__banner-info">
                                <p className="page__banner-text">
                                    {node.podcast_author} #{node.podcast_id}
                                </p>
                            </div>
                            <p className="page__banner-title">
                                {node.podcast_title}
                            </p>
                        </React.Fragment>
                    );
                case 'course':
                    return(
                        <React.Fragment>
                            <div className="page__banner-info">
                                <p className="page__banner-text">
                                    CURSO - {timeConverter(node.course_date.course_start_date).day} {timeConverter(node.course_date.course_start_date).month}
                                </p>
                            </div>
                            <p className="page__banner-title">
                                {node.course_title}
                            </p>
                        </React.Fragment>
                    );
                case 'product':
                    return(
                        <React.Fragment>
                            <p className="page__banner-title">
                                {node.product_name}
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
                        <p>Type not found</p>
                    );
            }
        }
    }
    const nodeChildren = setNodeChildren(); 

    if(props.redirector){
        return(
            <Link
                className={`page__node --${props.size}-${props.position} --${props.type} --${props.theme}-text`}
                style={{backgroundImage: props.theme === 'light' ? `url(${process.env.REACT_APP_BLOB_HOST}/jpeg/${props.type}/bg-${node[`${props.type}_id`]}.jpg)` : ''}}
                to={`/${translatePageType(props.type)}/post?id=${node[`${props.type}_id`]}&type=${props.type}`}
            >
                <div className={props.theme === 'light' ? `page__banner-content --flex-end-self ${isLoading === true ? '' : '--fade-up'}` : "page__banner-content --flex-end-self"}>
                    {nodeChildren}  
                </div>    
            </Link>
        );
    }else{
        return(
            <div className={`--${props.size}-${props.position} --thick-borders --dark-borders --${props.theme}-text`}>
                {nodeChildren}   
            </div>
        );
    }
}

export default Node;