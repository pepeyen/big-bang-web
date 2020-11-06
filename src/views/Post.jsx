import React, {
    useState,
    useEffect
} from 'react';
import {Redirect} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//Components
import {Navbar} from '../components';

//Services
import {API} from '../services/mockData';
import {
    getCurrentPageID,
    getCurrentPageType,
    filterOverall
} from '../services';

const Post = () => {
    const posts = filterOverall(getCurrentPageID(),'post',API);
    const [postMarkdown, setPostMarkdown] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/blob/markdown/posts/id-${posts.ID}.md`, {
            method: 'GET'
        })
        .then(response => {
            if(response.status !== 200){
                return {blobLink: -1};
            }else{
                return response.json();
            }
        })
        .then( data => {
            return data.blobLink;
        })
        .then(postURL => {
            if(postURL === -1){
                setPostMarkdown('# Post not found');
            }else{
                fetch(postURL, {
                    method: 'GET'
                })
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    setPostMarkdown(data);
                })
            }
        })
    },[posts.ID]);


    if(posts !== -1 && posts === filterOverall(getCurrentPageID(),getCurrentPageType(),API)){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className="page">
                        <div className="page__post --central">
                            <img 
                                className="page__post-banner"
                                src={posts.media.bannerURL} 
                                alt={posts.info.title} 
                            />
                            <p className="page__post-title">{posts.info.title}</p>
                            <div className="page__post-info">
                                <span className="page__post-type --grey-text --bottom-thin-borders">{posts.info.type}</span>
                                <span className="page__post-onwership --grey-text --bottom-thin-borders">por {posts.info.onwership.username}</span>
                            </div>
                            <div className="page__post-article --dark-grey-text">
                                <ReactMarkdown source={postMarkdown}/>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Post;