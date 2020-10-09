import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import Navbar from '../../components/Navbar';


//Services
import {products} from '../../services/mockData';
import {getCurrentPageID} from '../../services/pageInfo';
import {filterByID} from '../../services/filters';

function Product(){
    const productID = filterByID(getCurrentPageID(),products);
    if(productID !== -1){
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
                                src={products[productID].bannerURL} 
                                alt={products[productID].title} 
                            />
                            <div className="page__product-info">
                                <p className="page__filler-product-name">{products[productID].title}</p>
                                <p className="page__filler-product-info">{products[productID].info}</p>
                                <p className="page__filler-product-price">R$ {products[productID].price.toFixed(2)}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Product;