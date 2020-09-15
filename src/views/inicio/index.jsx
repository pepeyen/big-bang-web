import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Clusters from '../../components/Clusters';
import Cluster from '../../components/Cluster';
import Filler from '../../components/Filler';
import FillerProduct from '../../components/FillerProduct';
import Post from '../../components/Post';

//Styles
import './_page.scss';
import './_mods.scss';

function Inicio(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <Post>
                        <Banner 
                            title="Lorem ipsum dolor sit amet"
                            text="Lorem ipsum dolor sit amet"
                        >
                            <Button 
                                text="LOREM IPSUM" 
                                root="banner"
                            />
                        </Banner>
                    </Post>
                    <Post>
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
                                title="Condicionador Namah"
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
                    </Post>
                    <Post title="Blog">
                        <Button
                            root="post" 
                            text="Veja todos os posts"
                        />
                    </Post>
                    <Post title="Namah Shop">

                        <Button
                            root="post" 
                            text="Veja todos os posts"
                        />
                    </Post>
                    <Post title="Cursos">                
                        <Button
                            root="post" 
                            text="Veja todos os posts"
                        />
                    </Post>
                    <Post title="Podcasts">               
                        <Button
                            root="post" 
                            text="Veja todos os posts"
                        />
                    </Post>
                    <Post title="@namah.concept">                 
                        <Button
                            root="post" 
                            text="Veja todos os posts"
                        />
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Inicio;