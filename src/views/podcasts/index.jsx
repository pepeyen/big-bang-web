import React from 'react';

//Component
import Navbar from '../../components/Navbar';

//Services
import {posts} from '../../services/mockData';
import filterByType from '../../services/filterByType';

function Podcasts(){
    const postsByType = filterByType('podcast',posts);

    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Podcasts</p>
                    {postsByType.map((element,index) => {
                        return(
                            <React.Fragment key={index}>
                                <p className="">{posts[element.ID].title}</p>
                                <p className="">{posts[element.ID].info.userNickname} #{posts[element.ID].info.userId}</p>
                                <img 
                                    className=""
                                    src={posts[element.ID].bannerURL} alt={posts[element.ID].title} 
                                />
                            </React.Fragment>
                        );
                    })}
                </section>
            </main>
        </React.Fragment>
    );
}

export default Podcasts;