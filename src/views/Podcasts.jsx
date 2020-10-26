import React from 'react';

//Component
import {
    Navbar,
    Post,
    Redirector,
    RedirectorInfo,
    RedirectorText,
    RedirectorBanner
} from '../components';

//Services
import {API} from '../services/mockData';
import {filterByType} from '../services';

const Podcasts = () => {
    const posts = filterByType('podcast',API);

    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Podcasts</p>
                    <Post>
                        {posts.map((element,index) => {
                            return(
                                <Redirector 
                                    key={index}
                                    redirectorType={element.type}
                                    redirectorID={element.ID}
                                >
                                    <RedirectorInfo>
                                        <RedirectorText
                                            infoType="title"
                                            color="dark"
                                        >
                                            {element.info.name}
                                        </RedirectorText>
                                        <RedirectorText
                                            infoType="user"
                                            color="grey"
                                        >
                                            {element.info.onwership.username} #{element.info.onwership.userID}
                                        </RedirectorText>  
                                    </RedirectorInfo>
                                    <RedirectorBanner
                                        url={element.media.bannerURL}
                                        alt={element.info.name}
                                        type='podcast'
                                    />
                                </Redirector >
                            );
                        })}
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Podcasts;