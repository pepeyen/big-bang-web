import React, {
    useState,
    useEffect
}
from 'react';

//Component
import {
    Page,
    Post,
    Redirector,
    RedirectorInfo,
    RedirectorText,
    RedirectorBanner
} from '../components';


const Podcasts = () => {
    const [podcasts,setPodcasts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/podcasts`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setIsLoading(false);
            setPodcasts(data.podcasts);
        })
    },[]);

    return(
        <Page
            isLoading={isLoading}
            pageTitle="Podcasts"
        spinner>
            <Post>
                {podcasts.map((element,index) => {
                    return(
                        <Redirector 
                            key={index}
                            redirectorType='podcast'
                            redirectorID={element.podcast_id}
                        >
                            <RedirectorInfo>
                                <RedirectorText
                                    infoType="title"
                                    color="dark"
                                >
                                    {element.podcast_title}
                                </RedirectorText>
                                <RedirectorText
                                    infoType="user"
                                    color="grey"
                                >
                                    {element.podcast_author} #{element.podcast_id}
                                </RedirectorText>  
                            </RedirectorInfo>
                            <RedirectorBanner
                                url={`${process.env.REACT_APP_BLOB_HOST}/jpeg/podcast/bg-${element.podcast_id}.jpg`}
                                alt={element.podcast_title}
                                type='podcast'
                            />
                        </Redirector >
                    );
                })}
            </Post>
        </Page>
    );
}

export default Podcasts;