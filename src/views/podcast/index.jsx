import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import AudioPlayer from '../../components/AudioPlayer';

//Services
import {posts} from '../../services/mockData';
import {getCurrentPageID} from '../../services/getCurrentPage';
import filterByID from '../../services/filterByID';

function Podcast(){
    const podcastID = filterByID(getCurrentPageID(),posts);

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
                            src={posts[podcastID].bannerURL} 
                            alt={posts[podcastID].title}  
                        />
                        <div className="page__podcast --fade-up">
                            <AudioPlayer audioURL={posts[podcastID].audioURL} />
                        </div>
                        <p className="page__post-title --centralized-text">{posts[podcastID].title}</p>
                        <div className="page__post-info">
                                <span className="page__post-onwership --grey-text --bottom-thin-borders">{posts[podcastID].info.userNickname} #{posts[podcastID].info.userId}</span>
                        </div>
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Podcast;