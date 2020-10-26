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

const Blog = () => {
    const posts = filterByType('post',API);

    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Blog</p>
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
                                            infoType="type"
                                            color="dark"
                                        >
                                            {element.info.type}
                                        </RedirectorText>
                                        <RedirectorText 
                                            infoType="title"
                                            color="dark"
                                        >
                                            {element.info.title}
                                        </RedirectorText>
                                        <RedirectorText 
                                            infoType="user"
                                            color="grey"
                                        >
                                            {element.info.onwership.username}
                                        </RedirectorText>
                                    </RedirectorInfo>
                                    <RedirectorBanner
                                        url={element.media.bannerURL}
                                        alt={element.info.title} 
                                    />
                                </Redirector>
                            );
                        })}
                    </Post>                    
                </section>
            </main>
        </React.Fragment>
    );
}

export default Blog;