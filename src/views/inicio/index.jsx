import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Clusters from '../../components/Clusters';
import Cluster from '../../components/Cluster';
import Carousel from '../../components/Carousel';
import CarouselLink from '../../components/CarouselLink';

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
                    <Carousel
                        title="recomendam"
                        text="nossos especialistas"
                    >
                        <CarouselLink productId={0} />
                        <CarouselLink productId={1} />
                        <CarouselLink productId={2} />
                        <CarouselLink productId={0} />
                        <CarouselLink productId={1} />
                        <CarouselLink productId={2} />
                    </Carousel>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Inicio;