import React from 'react';

//Component
import Navbar from '../../components/Navbar';

function Contact(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Contact</p>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Contact;