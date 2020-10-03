import React from 'react';

//Component
import Navbar from '../../components/Navbar';

//Services
import {products} from '../../services/mockData';

function Loja(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Loja</p>
                    {products.map((element,index) => {
                        return(
                            <React.Fragment key={index}>
                                <p className="">{element.title}</p>
                                
                                <img 
                                    className=""
                                    src={element.bannerURL} alt={element.title} 
                                />
                            </React.Fragment>
                        );
                    })}
                </section>
            </main>
        </React.Fragment>
    );
}

export default Loja;