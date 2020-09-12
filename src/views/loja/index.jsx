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
                <p>Loja</p>
            </main>
        </React.Fragment>
    );
}

export default Loja;