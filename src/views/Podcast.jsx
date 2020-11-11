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
    AudioPlayer,
    AudioPlayerButton
} from '../components';

//Services
import {getCurrentPageID} from '../services';

export const Podcast = (props) => {
    const [podcast,setPodcast] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const currentPageId = getCurrentPageID(props.location.search);

    useEffect(() => {
        setIsLoading(true);
        
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/podcasts/${currentPageId}`, {
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
    },[currentPageId]);

    if(podcast !== -1 && currentPageId !== null){
        return(
            <section className={isLoading ? "page --loading" : "page"}>
                <Post>
                    <img 
                        className="page__post-banner"
                        src={`${process.env.REACT_APP_BLOB_HOST}/jpeg/podcast/bg-${currentPageId}.jpg`} 
                        alt={podcast.podcast_title ? podcast.podcast_title : 'Loading'}  
                    />
                    <div className="page__podcast --fade-up">
                        <AudioPlayer>
                            <AudioPlayerButton audioURL={`${process.env.REACT_APP_BLOB_HOST}/mp3/podcasts/media-${currentPageId}.mp3`} />
                        </AudioPlayer>      
                    </div>
                    <p className="page__post-title --centralized-text">{podcast.podcast_title ? podcast.podcast_title : 'Loading'}</p>
                    <div className="page__post-info">
                            <Link 
                                to={`/user/${podcast.podcast_author}`}
                                className="page__post-onwership --grey-text --bottom-thin-borders">{podcast.podcast_author ? podcast.podcast_author : 'Loading'} #{currentPageId}
                            </Link>
                    </div>
                </Post>
            </section>
        );
    }else return <Redirect to="/error/404" />
}

export default Podcast;