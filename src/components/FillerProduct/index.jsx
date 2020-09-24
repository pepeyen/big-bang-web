import React from 'react';
import { Link } from 'react-router-dom';

//Mock up data
import {products} from '../../services/mockData';

function FillerProduct(props){
    const linkHandler = () =>{
        sessionStorage.setItem('currentProductId',props.productId);
    }
    return(
        <li className="page__filler-product --centralized-text">
            <Link 
                to={`/loja/produto/${props.productId}`}
                onClick={linkHandler}
            >
                <img
                    className="page__filler-product-image"
                    src={products[props.productId].banner}
                    alt="Produto"
                />
                <span className="page__filler-product-name --dark-text">{products[props.productId].title}</span>
                <p className="page__filler-product-info --grey-text">{products[props.productId].info === '' ? '\u00A0' : products[props.productId].info}</p>
                <span className="page__filler-product-price --dark-text">R$ {products[props.productId].price.toFixed(2)}</span>
            </Link>
        </li>
    );
}

export default FillerProduct;