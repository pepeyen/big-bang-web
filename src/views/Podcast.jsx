import React, {
    useEffect,
    useState
}from 'react';
import {
    Link,
    Redirect
} from 'react-router-dom';

//Component
import {
    Post,
    Navbar,
    AudioPlayer,
    AudioPlayerButton
} from '../components';

//Services
import {getCurrentPageID} from '../services';

export const Podcast = () => {
    const [podcast,setPodcast] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/podcasts/${getCurrentPageID()}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.success !== true){
                setPodcast(-1);
            }else{
                setIsLoading(false);
                setPodcast(data.podcasts);
            }
        })
    },[]);

    if(podcast !== -1 && getCurrentPageID() !== null){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className={isLoading ? "page --loading" : "page"}>
                        <Post>
                            <img 
                                className="page__post-banner"
                                src={`${process.env.REACT_APP_BLOB_HOST}/jpeg/podcast/bg-${getCurrentPageID()}.jpg`} 
                                alt={podcast.podcast_title ? podcast.podcast_title : 'Loading'}  
                            />
                            <div className="page__podcast --fade-up">
                                <AudioPlayer>
                                    <AudioPlayerButton audioURL={`${process.env.REACT_APP_BLOB_HOST}/mp3/podcasts/media-${getCurrentPageID()}.mp3`} />
                                </AudioPlayer>      
                            </div>
                            <p className="page__post-title --centralized-text">{podcast.podcast_title ? podcast.podcast_title : 'Loading'}</p>
                            <div className="page__post-info">
                                    <Link 
                                        to={`/user/${podcast.podcast_author}`}
                                        className="page__post-onwership --grey-text --bottom-thin-borders">{podcast.podcast_author ? podcast.podcast_author : 'Loading'} #{getCurrentPageID()}
                                    </Link>
                            </div>
                        </Post>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Podcast;