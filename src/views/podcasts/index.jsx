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
                <section className="page">
                    <p className="page__place-holder">Podcasts</p>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Podcasts;