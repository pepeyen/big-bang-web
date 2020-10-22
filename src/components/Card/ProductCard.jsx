import React from 'react';

//Components
import LikeButton from '../Button/LikeButton';

//Styles
import './_card.scss';

//Services
import {API} from '../../services/mockData';
import {filterOverall} from '../../services/filters';

const ProductCard = (props) => {
    const product = filterOverall(props.productID,'product',API);

    return(
        <div className="card__product">
            <div 
                className="card__product-banner"
                style={{backgroundImage: `url(${product.media.bannerURL})`}}
            >
                <LikeButton 
                    toBeLiked={product.ID}
                    itemType="product"
                />
            </div>
            <p className="card__product-title --dark-text">{product.info.title}</p>
            <p className="card__product-description --grey-text">{product.info.description === '' ? '\u00A0' : product.info.description}</p>
            <span className="card__product-price --medium-grey-text">R$ {product.info.price.toFixed(2)}</span>
        </div>
    );
}

export default ProductCard;