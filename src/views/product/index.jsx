import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import Navbar from '../../components/Navbar';

//Services
import {API} from '../../services/mockData';
import {getCurrentPageID,getCurrentPageType} from '../../services/pageInfo';
import {filterOverall} from '../../services/filters';

function Product(){
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
                                src={product.bannerURL} 
                                alt={product.title} 
                            />
                            <div className="page__product-info">
                                <p className="page__filler-product-name">{product.title}</p>
                                <p className="page__filler-product-info">{product.info}</p>
                                <p className="page__filler-product-price">R$ {product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Product;