import React from 'react';

//Component
import Navbar from '../../components/navbar';

function Cursos(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <p>Cursos</p>
            </main>
        </React.Fragment>
    );
}

export default Cursos;