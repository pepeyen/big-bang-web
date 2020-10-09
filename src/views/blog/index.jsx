import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import Redirector from '../../components/Redirector';
import RedirectorInfo from '../../components/Redirector/redirectorInfo';
import RedirectorText from '../../components/Redirector/redirectorText';
import RedirectorBanner from '../../components/Redirector/redirectorBanner';

//Services
import {API} from '../../services/mockData';
import {filterByType} from '../../services/filters';

function Blog(){
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
                                            {element.title}
                                        </RedirectorText>
                                        <RedirectorText 
                                            infoType="user"
                                            color="grey"
                                        >
                                            {element.info.onwerShip}
                                        </RedirectorText>
                                    </RedirectorInfo>
                                    <RedirectorBanner
                                        url={element.bannerURL}
                                        alt={element.title} 
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