import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import Redirector from '../../components/Redirector';
import RedirectorInfo from '../../components/Redirector/redirectorInfo';
import RedirectorText from '../../components/Redirector/redirectorText';
import RedirectorBanner from '../../components/Redirector/redirectorBanner';

//Services
import {posts} from '../../services/mockData';
import filterByType from '../../services/filterByType';

function Blog(){
    const postsByType = filterByType('post',posts);

    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Blog</p>
                    <Post>
                        {postsByType.map((element,index) => {
                            return(
                                <Redirector 
                                    key={index}
                                    redirectorType={posts[element.ID].type}
                                    redirectorID={posts[element.ID].ID}
                                    
                                >
                                    <RedirectorInfo>
                                        <RedirectorText 
                                            infoType="type"
                                            color="dark"
                                        >
                                            {posts[element.ID].info.type}
                                        </RedirectorText>
                                        <RedirectorText 
                                            infoType="title"
                                            color="dark"
                                        >
                                            {posts[element.ID].title}
                                        </RedirectorText>
                                        <RedirectorText 
                                            infoType="user"
                                            color="grey"
                                        >
                                            {posts[element.ID].info.onwerShip}
                                        </RedirectorText>
                                    </RedirectorInfo>
                                    <RedirectorBanner
                                        url={posts[element.ID].bannerURL}
                                        alt={posts[element.ID].title} 
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