import React from 'react';

//Component
import Navbar from '../../components/navbar';

function Inicio(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <p>Inicio</p>
            </main>
        </React.Fragment>
    );
}

export default Inicio;