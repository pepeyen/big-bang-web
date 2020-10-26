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

const Courses = () => {
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
                                        url={element.media.bannerURL} 
                                        alt={element.info.title} 
                                    />
                                    <RedirectorInfo>
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
                                            {element.info.type} - {element.info.date.startDate.day} {element.info.date.startDate.month}
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