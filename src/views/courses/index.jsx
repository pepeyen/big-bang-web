import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import Redirector from '../../components/Redirector';
import RedirectorBanner from '../../components/Redirector/redirectorBanner';
import RedirectorInfo from '../../components/Redirector/redirectorInfo';
import RedirectorText from '../../components/Redirector/redirectorText';

//Services
import {API} from '../../services/mockData';
import {filterByType} from '../../services/filters';

function Courses(){
    const posts = filterByType('course',API);

    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Courses</p>
                    <Post listing="table">
                        {posts.map((element,index) => {
                            return(
                                <Redirector 
                                    key={index}
                                    redirectorType={element.type}
                                    redirectorID={element.ID}
                                >
                                    <RedirectorBanner
                                        url={element.bannerURL} 
                                        alt={element.title} 
                                    />
                                    <RedirectorInfo>
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
                                            {element.info.type} - {element.info.date.day} {element.info.date.month}
                                        </RedirectorText>
                                    </RedirectorInfo>
                                </Redirector>
                            );
                        })}
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Courses;