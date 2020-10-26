import React from 'react';

//Component
import {
    Navbar,
    Post,
    Redirector,
    RedirectorInfo,
    RedirectorText,
    RedirectorBanner
} from '../components';

//Services
import {API} from '../services/mockData';
import {filterByType} from '../services';

const Store = () => {
    const products = filterByType('product',API);
    
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Store</p>
                    <Post>
                        {products.map((element,index) => {
                            return(
                                <Redirector 
                                    key={index}
                                    redirectorType={element.type}
                                    redirectorID={element.ID}
                                >
                                    <RedirectorInfo>
                                        <RedirectorText
                                            infoType="title"
                                            color="dark"
                                        >
                                            {element.info.title}
                                        </RedirectorText>
                                        <RedirectorText
                                            infoType="price"
                                            color="grey"
                                        >
                                            R$ {element.info.price.toFixed(2)}
                                        </RedirectorText>
                                    </RedirectorInfo>
                                    <RedirectorBanner 
                                        url={element.media.bannerURL}
                                        alt={element.info.title}
                                    />
                                </Redirector>
                            );
                        })}
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Store;