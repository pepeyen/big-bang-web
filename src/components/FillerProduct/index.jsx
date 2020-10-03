import React from 'react';
import {Link} from 'react-router-dom';

//Mock up data
import {products} from '../../services/mockData';

function FillerProduct(props){
    return(
        <li className="page__filler-product --centralized-text">
            <Link to={`/store/product/?id=${products[props.id].ID}`}>
                <img
                    className="page__filler-product-image"
                    src={products[props.id].bannerURL}
                    alt="Produto"
                />
                <span className="page__filler-product-name --dark-text">{products[props.id].title}</span>
                <p className="page__filler-product-info --grey-text">{products[props.id].info === '' ? '\u00A0' : products[props.id].info}</p>
                <span className="page__filler-product-price --dark-text">R$ {products[props.id].price.toFixed(2)}</span>
            </Link>
        </li>
    );
}

export default FillerProduct;