import React from 'react';

//Component
import Navbar from '../../components/Navbar';

//Services
import {posts} from '../../services/mockData';
import filterByType from '../../services/filterByType';

function Loja(){
    const postsByType = filterByType('product',posts);

    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Loja</p>
                    {postsByType.map(element => {
                        return(
                            <React.Fragment>
                                <p className="">{posts[element.ID].title}</p>
                                
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

export default Loja;