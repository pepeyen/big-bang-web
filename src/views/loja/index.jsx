import React from 'react';

//Component
import Navbar from '../../components/Navbar';

function Loja(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Loja</p>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Loja;