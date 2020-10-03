import React from 'react';

//Component
import Navbar from '../../components/Navbar';

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
                    {postsByType.map(element => {
                        return(
                            <React.Fragment>
                                <p className="">{posts[element.ID].title}</p>
                                <p className="">{posts[element.ID].info.type}</p>
                                <p className="">{posts[element.ID].info.onwerShip}</p>

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

export default Blog;