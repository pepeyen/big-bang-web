import React from 'react';

//Component
import Navbar from '../../components/navbar';

//Styles
import './_page.scss';

//Images
import img_foward from '../../assets/images/button/button-foward.svg';

function Inicio(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <div className="page__banner --central --first-post --thin-borders ">
                        <div className="page__banner-headline --flex-end-self">
                            <p className="page__banner-title --centralized-text --dark-text">
                                Lorem ipsum dolor sit amet
                            </p>
                            <p className="page__banner-text --centralized-text --grey-text">
                                Lorem ipsum dolor sit amet
                            </p>
                            <div className="page__button --centralized-text --light-text"> 
                                <span>LOREM IPSUM</span>
                            </div>
                        </div>
                    </div>
                    <ul className="page__cluster --central --two-to-one">
                        <li className="page__cluster-post -light-text">
                            <div className="page__banner-content --flex-end-self">
                                <p className="page__banner-title">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <p className="page__banner-text">
                                    VIAGEM
                                </p>
                                <p className="page__banner-text">
                                    por Fulano de Tal
                                </p>
                            </div>
                        </li>
                        <li className="page__cluster-podcast --light-text">
                            <div className="page__banner-content --flex-end-self">
                                <p className="page__banner-text">
                                    Namahcast #122
                                </p>
                                <p className="page__banner-title">
                                    Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli
                                </p>
                            </div>
                        </li>
                        <li className="page__cluster-course --light-text">
                            <div className="page__banner-content --flex-end-self">
                                <p className="page__banner-text">
                                    CURSO - 04 ABR
                                </p>
                                <p className="page__banner-title">
                                    Imersão Vinyasa Flow
                                </p>
                            </div>
                        </li>
                        <li className="page__cluster-product --light-text">
                            <div className="page__banner-content --flex-end-self">
                                <p className="page__banner-title">
                                    Condicionador Namah
                                </p>
                                <p className="page__banner-text">
                                    COMPRE AGORA
                                </p>
                                <img 
                                    className="page__product-foward"
                                    src={img_foward} 
                                    alt="Go to the product page" 
                                />
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Inicio;