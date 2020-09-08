import React from 'react';

//Component
import Navbar from '../../components/navbar';

function Podcasts(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <p>Podcasts</p>
            </main>
        </React.Fragment>
    );
}

export default Podcasts;