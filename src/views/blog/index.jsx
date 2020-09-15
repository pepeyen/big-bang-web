import React from 'react';

//Component
import Navbar from '../../components/Navbar';

function Blog(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Blog</p>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Blog;