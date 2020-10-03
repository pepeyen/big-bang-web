import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import Navbar from '../../components/Navbar';

//Services
import {posts} from '../../services/mockData';
import {getCurrentPageID} from '../../services/getCurrentPage';
import filterByID from '../../services/filterByID';

function Post(){
    const postID = filterByID(getCurrentPageID(),posts);
    if(postID !== -1){
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
                                src={posts[postID].bannerURL} alt={posts[postID].title} 
                            />
                            <p className="page__post-title">{posts[postID].title}</p>
                            <div className="page__post-info">
                                <span className="page__post-type --grey-text --bottom-thin-borders">{posts[postID].info[0]}</span>
                                <span className="page__post-onwership --grey-text --bottom-thin-borders">{posts[postID].info[1]}</span>
                            </div>
                            <div className="page__post-article --dark-grey-text">
                                {posts[postID].article.map(element => {
                                    return(
                                    <p className={`page__post-article-${element.type}`}>{element.text}</p>
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