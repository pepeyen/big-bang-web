import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import Navbar from '../../components/Navbar';

//Services
import {API} from '../../services/mockData';
import {getCurrentPageID} from '../../services/pageInfo';
import {filterByID} from '../../services/filters';

function Product(){
    const products = filterByID(getCurrentPageID(),API);

    if(products.length !== 0){
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
                                src={products.bannerURL} 
                                alt={products.title} 
                            />
                            <div className="page__product-info">
                                <p className="page__filler-product-name">{products.title}</p>
                                <p className="page__filler-product-info">{products.info}</p>
                                <p className="page__filler-product-price">R$ {products.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Product;