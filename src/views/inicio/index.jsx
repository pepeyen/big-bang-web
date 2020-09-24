import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Cluster from '../../components/Cluster';
import Node from '../../components/Node';
import Filler from '../../components/Filler';
import FillerProduct from '../../components/FillerProduct';
import Post from '../../components/Post';

//Styles
import '../_page.scss';
import '../_mods.scss';

function Inicio(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <Post>
                        <Banner bannerId={0}>
                            <Button 
                                text="LOREM IPSUM" 
                                root="banner"
                            />
                        </Banner>
                    </Post>
                    <Post>
                        <Cluster type='two-to-one'>
                            <Node
                                size="big"
                                position="left" 
                                type="post"
                                theme="light"
                                postId={0}
                            />
                            <Node 
                                size="small"
                                position="top-right"
                                type="podcast"
                                theme="light"
                                postId={1}
                            />
                            <Node 
                                size="small"
                                position="bottom-halfed-left"
                                type="course"
                                theme="light"
                                postId={2}
                            />
                            <Node 
                                size="small"
                                position="bottom-halfed-right"
                                type="product"
                                theme="light"
                                postId={3}
                            />
                        </Cluster>
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
                            target="blog"
                            text="Veja todos os posts"
                        />
                    </Post>
                    <Post title="Namah Shop">

                        <Button
                            root="post" 
                            target="loja"
                            text="Veja todos os produtos"
                        />
                    </Post>
                    <Post title="Cursos">                
                        <Button
                            root="post" 
                            target="cursos"
                            text="Veja todos os cursos"
                        />
                    </Post>
                    <Post title="Podcasts">               
                        <Button
                            root="post" 
                            target="podcasts"
                            text="Veja todos os podcasts"
                        />
                    </Post>
                    <Post title="@namah.concept">
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Inicio;