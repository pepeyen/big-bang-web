import React from 'react';

//Component
import Navbar from '../../components/Navbar';

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