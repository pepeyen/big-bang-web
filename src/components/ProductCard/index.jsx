import React from 'react';

//Styles
import './productCard.scss';

//Services
import {API} from '../../services/mockData';
import {filterOverall} from '../../services/filters';

function ProductCard(props){
    const product = filterOverall(props.productID,'product',API);

    return(
        <div className="product-card">
            <div 
                className="product-card__banner"
                style={{backgroundImage: `url(${product.media.bannerURL})`}}
            >
            </div>
            <p className="product-card__title --dark-text">{product.info.title}</p>
            <p className="product-card__description --grey-text">{product.info.description === '' ? '\u00A0' : product.info.description}</p>
            <span className="product-card__price --medium-grey-text">R$ {product.info.price.toFixed(2)}</span>
        </div>
    );
}

export default ProductCard;