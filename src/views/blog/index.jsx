import React from 'react';

//Component
import Navbar from '../../components/navbar';

function Blog(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <p>Blog</p>
            </main>
        </React.Fragment>
    );
}

export default Blog;