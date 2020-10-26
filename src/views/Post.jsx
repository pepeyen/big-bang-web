import React from 'react';
import {Redirect} from 'react-router-dom';

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
                                {posts.article.map((element,index) => {
                                    return(
                                        <p 
                                            className={`page__post-article-${element.type}`}
                                            key={index}
                                        >
                                            {element.text}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Post;