import React from 'react';

//Component
import Navbar from '../../../components/Navbar';

function NotFound(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">404</p>
                </section>
            </main>
        </React.Fragment>
    );
}

export default NotFound;