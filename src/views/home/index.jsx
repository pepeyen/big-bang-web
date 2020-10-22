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
import Carousel from '../../components/Carousel';
import CarouselItem from '../../components/Carousel/CarouselItem';
import TableListing from '../../components/TableListing';
import ProductCard from '../../components/ProductCard';

const Home = () => {
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <Post>
                        <Banner ID={552}>
                            <Button 
                                text="LOREM IPSUM" 
                                root="banner"
                            />
                        </Banner>
                    </Post>
                    <Post>
                        <Cluster type='two-to-one'>
                            <Node
                                redirector
                                size="big"
                                position="left" 
                                theme="light"
                                type="post"
                                ID={681}
                            />
                            <Node 
                                redirector
                                size="small"
                                position="top-right"
                                theme="light"
                                type="podcast"
                                ID={11}
                            />
                            <Node 
                                redirector
                                size="small"
                                position="bottom-halfed-left"
                                theme="light"
                                type="course"
                                ID={12023452}
                            />
                            <Node 
                                redirector
                                size="small"
                                position="bottom-halfed-right"
                                theme="light"
                                type="product"
                                ID={404} 
                            />
                        </Cluster>
                        <Filler
                            title="recomendam"
                            text="nossos especialistas"
                        >
                            <FillerProduct productCount={3} />
                            <FillerProduct productCount={3} />
                        </Filler>
                    </Post>
                    <Post title="Blog">
                        <Cluster type='three-to-one'>
                            <Node
                                redirector
                                size="medium"
                                position="top-left" 
                                theme="light"
                                type="post"
                                ID={681}
                            />
                            <Node
                                redirector
                                size="medium"
                                position="top-right" 
                                theme="light"
                                type="post"
                                ID={682}
                            />
                            <Node
                                redirector
                                size="small"
                                position="bottom-left" 
                                theme="medium-grey"
                                type="post"
                                ID={684}
                            />
                            <Node
                                redirector
                                size="small"
                                position="bottom-middle" 
                                theme="medium-grey"
                                type="post"
                                ID={683}
                            />
                            <Node
                                size="small"
                                position="bottom-right" 
                                theme="dark"
                                type="newsletter"
                            />
                        </Cluster>
                        <Button
                            root="post" 
                            target="blog"
                            text="Veja todos os posts"
                        />
                    </Post>
                    <Post title="Namah Shop">
                        <Carousel>
                            <CarouselItem>
                                <TableListing listingType="four">
                                    <ProductCard productID={405}/>
                                    <ProductCard productID={406}/>
                                    <ProductCard productID={407}/>
                                    <ProductCard productID={404}/>
                                </TableListing>
                            </CarouselItem>
                            <CarouselItem>
                                <TableListing listingType="four">
                                    <ProductCard productID={39}/>
                                    <ProductCard productID={62}/>
                                    <ProductCard productID={72}/>
                                </TableListing>
                            </CarouselItem>
                        </Carousel>
                        <Button
                            root="post" 
                            target="store"
                            text="Veja todos os produtos"
                        />
                    </Post>
                    <Post title="Courses">                
                        <Button
                            root="post" 
                            target="courses"
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

export default Home;