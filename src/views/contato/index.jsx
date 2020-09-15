import React from 'react';

//Component
import Navbar from '../../components/Navbar';

function Contato(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Contato</p>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Contato;