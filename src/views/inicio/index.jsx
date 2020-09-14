import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Clusters from '../../components/Clusters';
import Cluster from '../../components/Cluster';
import Filler from '../../components/Filler';
import FillerProduct from '../../components/FillerProduct';

//Styles
import './_page.scss';

function Inicio(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <Banner 
                        title="Lorem ipsum dolor sit amet"
                        text="Lorem ipsum dolor sit amet"
                    >
                        <Button text="LOREM IPSUM" />
                    </Banner>
                    <Clusters type='two-to-one'>
                        <Cluster 
                            type="post"
                            theme="light"
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            info={["VIAGEM","por Fulano de Tal"]}
                        />
                        <Cluster 
                            type="podcast"
                            theme="light"
                            title="Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli..."
                            info={["Namahcast #122"]}
                        />
                        <Cluster 
                            type="course"
                            theme="light"
                            title="Imersão Vinyasa Flow"
                            info={["CURSO","04 ABR"]}
                        />
                        <Cluster 
                            type="product"
                            theme="light"
                            title="Imersão Vinyasa Flow"
                            info={["COMPRE AGORA"]}
                        />
                    </Clusters>
                    <Filler
                        title="recomendam"
                        text="nossos especialistas"
                    >
                        <FillerProduct productId={0} />
                        <FillerProduct productId={1} />
                        <FillerProduct productId={2} />
                        <FillerProduct productId={0} />
                        <FillerProduct productId={1} />
                        <FillerProduct productId={2} />
                    </Filler>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Inicio;