import React from 'react';

//Mock up data
import {products} from '../../services/mockData';

//Component
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Cluster from '../../components/Cluster';
import Node from '../../components/Node';
import Filler from '../../components/Filler';
import FillerProduct from '../../components/FillerProduct';
import Post from '../../components/Post';

function Inicio(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <Post>
                        <Banner id={0}>
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
                                id={1}
                            />
                            <Node 
                                size="small"
                                position="top-right"
                                type="podcast"
                                theme="light"
                                id={0}
                            />
                            <Node 
                                size="small"
                                position="bottom-halfed-left"
                                type="course"
                                theme="light"
                                id={3}
                            />
                            <Node 
                                size="small"
                                position="bottom-halfed-right"
                                type="product"
                                theme="light"
                                id={2} 
                            />
                        </Cluster>
                        <Filler
                            title="recomendam"
                            text="nossos especialistas"
                        >
                            {
                                products.map((element,index) => {
                                    if(index === 3){
                                        return;
                                    }
                                    return(
                                        <FillerProduct 
                                            key={index}
                                            id={index} 
                                        />
                                    )
                                })
                            }
                            {
                                products.map((element,index) => {
                                    if(index === 3){
                                        return;
                                    }
                                    return(
                                        <FillerProduct 
                                            key={index}
                                            id={index} 
                                        />
                                    )
                                })
                            }
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