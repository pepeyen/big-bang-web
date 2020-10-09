import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import AudioPlayer from '../../components/AudioPlayer';

//Services
import {API} from '../../services/mockData';
import {getCurrentPageID} from '../../services/pageInfo';
import {filterByID} from '../../services/filters';

function Podcast(){
    const post = filterByID(getCurrentPageID(),API);

    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <Post>
                        <img 
                            className="page__post-banner"
                            src={post.bannerURL} 
                            alt={post.title}  
                        />
                        <div className="page__podcast --fade-up">
                            <AudioPlayer audioURL={post.audioURL} />
                        </div>
                        <p className="page__post-title --centralized-text">{post.title}</p>
                        <div className="page__post-info">
                                <span className="page__post-onwership --grey-text --bottom-thin-borders">{post.info.userNickname} #{post.info.userId}</span>
                        </div>
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Podcast;