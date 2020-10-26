import React from 'react';
import {Redirect} from 'react-router-dom';

//Component
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import {
    AudioPlayer,
    AudioPlayerButton
} from '../../components/AudioPlayer';

//Services
import {API} from '../../services/mockData';
import {getCurrentPageID,getCurrentPageType} from '../../services/pageInfo';
import {filterOverall} from '../../services/filters';

export const Podcast = () => {
    const podcast = filterOverall(getCurrentPageID(),'podcast',API);

    if(podcast !== -1 && podcast === filterOverall(getCurrentPageID(),getCurrentPageType(),API)){
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
                                src={podcast.media.bannerURL} 
                                alt={podcast.info.name}  
                            />
                            <div className="page__podcast --fade-up">
                                <AudioPlayer>
                                    <AudioPlayerButton audioURL={podcast.media.audioURL} />
                                </AudioPlayer>      
                            </div>
                            <p className="page__post-title --centralized-text">{podcast.info.podcastName}</p>
                            <div className="page__post-info">
                                    <span className="page__post-onwership --grey-text --bottom-thin-borders">{podcast.info.onwership.username} #{podcast.info.onwership.userID}</span>
                            </div>
                        </Post>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Podcast;