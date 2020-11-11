import React from 'react';

//Component
import {
    Page,
    Banner,
    RedirectorButton,
    Cluster,
    Node,
    Post,
    TableListing,
    ProductCard,
    Filler,
    FillerProduct,
    Carousel,
    CarouselItem
} from '../components';

const Home = () => {
    return(
        <Page>
            <Post>
                <Banner ID={552}>
                    <RedirectorButton
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
                <RedirectorButton
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
                <RedirectorButton
                    root="post" 
                    target="store"
                    text="Veja todos os produtos"
                />
            </Post>
            <Post title="Courses">                
                <RedirectorButton
                    root="post" 
                    target="courses"
                    text="Veja todos os cursos"
                />
            </Post>
            <Post title="Podcasts">               
                <RedirectorButton
                    root="post" 
                    target="podcasts"
                    text="Veja todos os podcasts"
                />
            </Post>
            <Post title="@namah.concept">
            </Post>
        </Page>
    );
}

export default Home;