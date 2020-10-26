import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {Navbar} from '../components';

//Services
import {API} from '../services/mockData';
import {
    getCurrentPageID,
    getCurrentPageType,
    filterOverall
} from '../services';

const Product = () => {
    const product = filterOverall(getCurrentPageID(),'product',API);

    if(product !== -1 && product === filterOverall(getCurrentPageID(),getCurrentPageType(),API)){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className="page">
                        <div className="page__product">
                            <img 
                                className="page__product-image"
                                src={product.media.bannerURL} 
                                alt={product.info.title} 
                            />
                            <div className="page__product-info">
                                <p className="page__filler-product-name">{product.info.title}</p>
                                <p className="page__filler-product-info">{product.info.description}</p>
                                <p className="page__filler-product-price">R$ {product.info.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Product;