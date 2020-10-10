import React from 'react';
import {Redirect} from 'react-router-dom';

//Component
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import AudioPlayer from '../../components/AudioPlayer';

//Services
import {API} from '../../services/mockData';
import {getCurrentPageID,getCurrentPageType} from '../../services/pageInfo';
import {filterOverall} from '../../services/filters';

function Podcast(){
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
                                src={podcast.bannerURL} 
                                alt={podcast.title}  
                            />
                            <div className="page__podcast --fade-up">
                                <AudioPlayer audioURL={podcast.audioURL} />
                            </div>
                            <p className="page__post-title --centralized-text">{podcast.title}</p>
                            <div className="page__post-info">
                                    <span className="page__post-onwership --grey-text --bottom-thin-borders">{podcast.info.userNickname} #{podcast.info.userId}</span>
                            </div>
                        </Post>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Podcast;