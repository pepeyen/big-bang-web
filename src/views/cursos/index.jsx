import React from 'react';

//Component
import Navbar from '../../components/Navbar';

function Cursos(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Cursos</p>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Cursos;